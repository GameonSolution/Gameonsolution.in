import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
type Carousel = {
  id: number;
  url: string;
};
// const API_URL = "https://api-gms.vercel.app/api/v1/carousel";
const API_URL = "https://api.gameonsolution.in/api/v1/carousel";
// const API_URL = "http://localhost:8080/api/v1/carousel";

export function useCarousel() {
  const queryClient = useQueryClient();

  // Fetch all carousel items (READ)
  const getCarousels = useQuery({
    queryKey: ["carousels"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        return response.data as Carousel[];
      } catch (error) {
        console.error("Error fetching carousels:", error);
        throw error;
      }
    },
    staleTime: 600000,
    refetchInterval: 600000,
  });

  return {
    getCarousels,
    queryClient,
  };
}
