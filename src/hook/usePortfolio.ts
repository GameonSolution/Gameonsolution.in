import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
type Portfolio = {
  id: number;
  date: string;
  details: string;
  fileType: "image" | "video" | "youtube";
  mediaUrl: string;
};
// const API_URL = "https://api-gms-theta.vercel.app/api/v1/portfolio";
// const API_URL = "https://api-gms.vercel.app/api/v1/portfolio";
const API_URL = "https://api.gameonsolution.in/api/v1/portfolio";
// const API_URL = "http://localhost:8080/api/v1/portfolio";

export function usePortfolio() {
  const queryClient = useQueryClient();

  // Fetch all portfolio items (READ)
  const getPortfolio = useQuery({
    queryKey: ["portfolio"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        return response.data as Portfolio[];
      } catch (error) {
        console.error("Error fetching portfolio:", error);
        throw error;
      }
    },
    enabled: !!(queryClient.getQueryData(["carousels"]) as {
      id: number;
      url: string;
      phoneUrl: string;
    }[]),
    staleTime: 600000,
    refetchInterval: 600000,
  });

  return {
    getPortfolio,
    queryClient,
  };
}
