import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
  location: string;
  message: string;
}
const API_URL = "https://api-gms.vercel.app/api/v1/contacts";
// const API_URL = "https://api-gms-theta.vercel.app/api/v1/contacts";
// const API_URL = "http://localhost:8080/api/v1/contacts";

export function useCantacts() {
  const queryClient = useQueryClient();
  const createContact = useMutation({
    mutationFn: async (newContact: Omit<Contact, "id">) => {
      const response = await axios.post(`${API_URL}`, newContact, {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5fZG9lIiwic3ViIjoxLCJpYXQiOjE3MzAzOTQyMzh9._7MAwb4HYLH2uSaiOwN61xAqSfgekUg9kWJQbgtxNgY",
        },
      });
      return response.data;
    },
  });
  return {
    createContact,

    queryClient,
  };
}
