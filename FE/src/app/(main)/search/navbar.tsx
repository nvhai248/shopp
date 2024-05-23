"use client";

import Rating from "@/components/ui/rating";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export function NavFilter() {
  const [category, setCategory] = useState<string>("");
  const [rating, setRating] = useState<string>("");
  const [publisher, setPublisher] = useState<string>("");
  const [onSale, setOnSale] = useState<boolean>(false);
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setCategory(e.target.value);
  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setRating(e.target.value);
  const handlePublisherChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setPublisher(e.target.value);
  const handleSaleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setOnSale(e.target.checked);

  return (
    <div className="w-1/4 pr-5 py-5  border-r border-gray-300">
      <div className="border">
        <h2 className="text-xl mb-4 font-bold bg-gradient-to-t text-white from-blue-600 to-blue-700 py-2 text-left p-4">
          ALL CATEGORIES
        </h2>

        <ul className="mb-8">
          {[
            "Accessories",
            "Camera",
            "Collection - Full Width",
            "Collection - Left Sidebar",
            "Collection - Right Sidebar",
            "Laptop",
            "Printer",
            "Smartphone",
            "Speaker",
            "Tablet",
            "Television",
          ].map((item, index) => (
            <li key={index} className="mb-2 text-left px-4 py-1">
              <div
                onClick={() => setCategory(item.toLowerCase())}
                className={`flex justify-between hover:cursor-pointer items-center ${
                  category === item.toLowerCase() ? "font-bold" : ""
                }`}
              >
                <span>{item} </span>
                <span className="text-gray-500">(8)</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="border mt-5">
        <h2 className="text-xl mb-4 font-bold bg-gradient-to-t text-white from-blue-600 to-blue-700 py-2 text-left p-4">
          SHOP BY
        </h2>
        <div className="flex items-center space-x-2 mt-2 ml-4">
          <Checkbox id="isFilterOnSale" />
          <label
            htmlFor="isFilterOnSale"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Is On Sale
          </label>
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-start p-4">Price</label>
          <div className="flex px-4 flex-col">
            <Input
              type="number"
              placeholder="From"
              className="w-full p-2 border border-gray-300 rounded-none"
            />
            <Input
              type="number"
              placeholder="To"
              className="w-full p-2 border mt-4 border-gray-300 rounded-none"
            />
          </div>
        </div>
      </div>

      <div className="border mt-5">
        <h2 className="text-xl mb-4 font-bold bg-gradient-to-t text-white from-blue-600 to-blue-700 py-2 text-left p-4">
          RATING
        </h2>

        <RadioGroup defaultValue="5" className="ml-4 mb-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="5" id="r5" />
            <Rating score={5} />
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4" id="r4" />
            <Rating score={4} />
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="r3" />
            <Rating score={3} />
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="r2" />
            <Rating score={2} />
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="r1" />
            <Rating score={1} />
          </div>
        </RadioGroup>
      </div>

      <div className="border mt-5">
        <h2 className="text-xl mb-4 font-bold bg-gradient-to-t text-white from-blue-600 to-blue-700 py-2 text-left p-4">
          PUBLISHER
        </h2>

        <ul className="mb-8">
          {[
            "Accessories",
            "Camera",
            "Collection - Full Width",
            "Collection - Left Sidebar",
            "Collection - Right Sidebar",
            "Laptop",
            "Printer",
            "Smartphone",
            "Speaker",
            "Tablet",
            "Television",
          ].map((item, index) => (
            <li key={index} className="mb-2 text-left px-4 py-1">
              <div
                onClick={() => setCategory(item.toLowerCase())}
                className={`flex hover:cursor-pointer justify-between items-center ${
                  category === item.toLowerCase() ? "font-bold" : ""
                }`}
              >
                <span>{item} </span>
                <span className="text-gray-500">(8)</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
