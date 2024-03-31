import { Article } from "./types";

export const getAllArticles = async (): Promise<Article[]> => {
  // no-store: SSR
  const res = await fetch(`http://localhost:3001/posts`, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Error");
  }

  const articles = await res.json();
  return articles;
};
