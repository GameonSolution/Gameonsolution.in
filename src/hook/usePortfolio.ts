// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// type Portfolio = {
//   id: number;
//   date: string;
//   details: string;
//   fileType: "image" | "video" | "youtube" | "instagram";
//   mediaUrl: string;
// };
// // const API_URL = "https://api-gms-theta.vercel.app/api/v1/portfolio";
// // const API_URL = "https://api-gms.vercel.app/api/v1/portfolio";
// const API_URL = "https://api.gameonsolution.in/api/v1/portfolio";
// // const API_URL = "http://localhost:8080/api/v1/portfolio";

// export function usePortfolio() {
//   const queryClient = useQueryClient();

//   // Fetch all portfolio items (READ)
//   const getPortfolio = useQuery({
//     queryKey: ["portfolio"],
//     queryFn: async () => {
//       try {
//         const response = await axios.get(`${API_URL}`);
//         return response.data as Portfolio[];
//       } catch (error) {
//         console.error("Error fetching portfolio:", error);
//         throw error;
//       }
//     },
//     enabled: !!(queryClient.getQueryData(["carousels"]) as {
//       id: number;
//       url: string;
//       phoneUrl: string;
//     }[]),
//     staleTime: 600000,
//     refetchInterval: 600000,
//   });

//   return {
//     getPortfolio,
//     queryClient,
//   };
// }
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export type PortfolioItem = {
  id: string;
  title?: string;
  location?: string;
  shortDescription?: string;
  date?: string | null;
  fileType?: "image" | "video" | "youtube" | "instagram";
  mediaUrl?: string;
  imageUrl?: string; // kept for compatibility
  createdAt?: string | null;
};

const BASE =
  (import.meta.env.VITE_BLOG_API_URL as string) ??
  "https://gos-blog-backend.vercel.app";
const API_URL = `${BASE.replace(/\/$/, "")}/api/projects`;

/**
 * Fetch projects from backend, map to PortfolioItem shape used by UI.
 */
export function usePortfolio() {
  const queryClient = useQueryClient();

  const getPortfolio = useQuery({
    queryKey: ["portfolio"],
    queryFn: async (): Promise<PortfolioItem[]> => {
      try {
        const res = await axios.get(API_URL);
        const projects = Array.isArray(res.data?.projects)
          ? res.data.projects
          : [];

        const mapped = projects.map((p: any) => {
          return {
            id: String(p.id || p.id),
            title: p.title || "",
            location: p.location || "",
            shortDescription:
              p.shortDescription || p.details || p.content || "",
            // keep createdAt/date for date display if needed
            createdAt: p.createdAt ?? null,
            date: p.createdAt ?? p.date ?? null,
            // primary media fields
            imageUrl: p.imageUrl ?? p.mediaUrl ?? "",
            mediaUrl: p.imageUrl ?? p.mediaUrl ?? "",
            // infer fileType: if imageUrl present -> image, else fallback to video
            fileType:
              p.fileType || (p.imageUrl ? "image" : p.fileType || "video"),
          } as PortfolioItem;
        });

        return mapped;
      } catch (error) {
        console.error("Error fetching portfolio:", error);
        throw error;
      }
    },
    enabled: true,
    staleTime: 1000 * 60 * 10,
    refetchInterval: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  return {
    getPortfolio,
    queryClient,
  };
}
