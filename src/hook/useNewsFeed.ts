import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
export type NewsFeed = {
  id: number;
  date: string;
  fileType: "image" | "video" | "youtube" | "instagram";
  details: string;
  mediaUrl: string;
};
const API_URL = "https://api-gms.vercel.app/api/v1/newsfeed";
// const API_URL = "https://api-gms-theta.vercel.app/api/v1/newsFeed";
// const API_URL = "http://localhost:8080/api/v1/newsFeed";

export function useNewsFeed() {
  const queryClient = useQueryClient();

  // Fetch all news feeds (READ)
  const getNewsFeeds = useQuery({
    queryKey: ["newsfeeds"],
    queryFn: async () => {
      try {
        const response = await axios.get(`${API_URL}`);
        return response.data as NewsFeed[];
      } catch (error) {
        console.error("Error fetching news feeds:", error);
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
    getNewsFeeds,
    queryClient,
  };
}
