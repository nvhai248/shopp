import { gql } from "@apollo/client";

// Define the GraphQL mutation with variable definitions
export const SendVerificationMutation = gql`
  mutation RequireSendEmailVerifyUser {
    requireSendEmailVerifyUser
  }
`;
