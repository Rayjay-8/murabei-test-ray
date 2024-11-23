import { z } from "zod";

export const Book = z.object({
   id: z.number(),
    title: z.string(),
    author: z.string(),
    author_slug: z.string(),
    author_bio: z.string(),
    authors: z.string(),
    publisher: z.string(),
    synopsis: z.string(),
    biography: z.string(),
})