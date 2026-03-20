// src/lib/sanity/fetch.ts
import { client } from "./client";

export async function sanityNoStoreFetch<QueryResponse>(
  query: string,
  params: Record<string, unknown> = {}
): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    cache: "no-store",
  });
}