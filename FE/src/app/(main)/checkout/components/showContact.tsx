"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useQuery } from "@apollo/client";
import { GetContactsQuery } from "@/+core/definegql";
import { useSession } from "next-auth/react";
import Spinner from "@/components/ui/spinner";
import { ContactInterface } from "@/+core/interfaces/contact";
import { FaMapMarkerAlt } from "react-icons/fa";
import ContactDialog from "@/components/contact/dialog";

export default function ShowContacts() {
  const { data: session } = useSession();
  const { data, loading } = useQuery(GetContactsQuery, {
    context: {
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
      },
    },
  });

  if (loading) {
    return (
      <div className="p-8 w-full min-h-screen">
        <div className="flex items-center w-full space-x-4">
          <div className="space-y-2 w-full">
            <Spinner size={80} />
          </div>
        </div>
      </div>
    );
  }

  let contacts: ContactInterface[] = [];
  if (data && data.contacts) {
    contacts = data.contacts;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-blue-500 underline mb-5">Thay Đổi</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] lg:max-w-[60rem]">
        <DialogHeader>
          <DialogTitle>
            <h2 className="text-2xl flex flex-row text-start font-bold mb-6 text-blue-600">
              <FaMapMarkerAlt className="mt-1" />
              <span className="ml-4">Địa Chỉ Nhận Hàng</span>
            </h2>
          </DialogTitle>
        </DialogHeader>
        {contacts.map((contact) => (
          <div className="border-b shadow-md p-4 pb-6 mb-3 text-start flex justify-between">
            <div className="mb-4">
              <span className="font-bold">
                {contact.fullName} {contact.phoneNumber}
              </span>
              <span className="ml-5">
                {contact.detailAddress}, {contact.wards}, {contact.district},{" "}
                {contact.province}
              </span>
            </div>
            <div className="flex flex-row">
              <button className="text-red-500 hover:text-red-600 underline mb-5 ml-5">
                Remove
              </button>
            </div>
          </div>
        ))}
        <DialogFooter>
          <ContactDialog />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
