"use client";

import { useQuery } from "@tanstack/react-query";

const BASE_API_URL = `${process.env.NEXT_PUBLIC_API_URL}`;
const BASE_SEARCH_URL = `${process.env.NEXT_PUBLIC_URL}`;

function useFetchData({
  endpoint,
  query,
  page,
  perPage,
  isSearchPage = false,
}) {
  const baseUrl = isSearchPage ? BASE_SEARCH_URL : BASE_API_URL;

  // Build query parameters
  const queryParams = new URLSearchParams();
  if (query) queryParams.append("query", query);
  if (page) queryParams.append("page", page);
  if (perPage) queryParams.append("per_page", perPage);

  const url = `${baseUrl}${endpoint}${
    queryParams.toString() ? `?${queryParams.toString()}` : ""
  }`;

  return useQuery({
    queryKey: ["fetchData", endpoint, query, page, perPage, isSearchPage],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json();
    },
  });
}

export default useFetchData;
