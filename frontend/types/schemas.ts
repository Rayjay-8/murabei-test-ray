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
    isbn13: z.number(),
})


export const bookSchemaCreate = z.object({
    title: z.string().min(1, "Title is required").max(100, "Title is too long"),
    author: z
      .string()
      .min(1, "Author is required")
      .max(100, "Author is too long"),
    author_slug: z
      .string()
      .min(1, "Author slug is required")
      .regex(
        /^[a-z0-9-]+$/,
        "Slug must be lowercase and contain only letters, numbers, or dashes"
      ),
    author_bio: z.string().optional(),
    authors: z.string().optional(),
    publisher: z.string().min(1, "Publisher is required"),
    synopsis: z
      .string()
      .min(10, "Synopsis must be at least 10 characters long")
      .max(500, "Synopsis is too long"),
  });

export const BookComplete = z.object({
    id: z.number(),
    title: z.string(),
    author: z.string(),
    author_id: z.string().nullable(),
    author_bio: z.string(),
    authors: z.string().nullable(),
    title_slug: z.string().nullable(),
    author_slug: z.string(),
    isbn13: z.number(),
    isbn10: z.string().nullable(),
    price: z.string().nullable(),
    format: z.string().nullable(),
    publisher: z.string(),
    pubdate: z.string().nullable(),
    edition: z.string().nullable(),
    subjects: z.string().nullable(),
    lexile: z.string().nullable(),
    pages: z.number().nullable(),
    dimensions: z.string().nullable(),
    overview: z.string().nullable(),
    excerpt: z.string().nullable(),
    synopsis: z.string(),
    toc: z.string().nullable(),
    editorial_reviews: z.string().nullable(),
})

export type BookSearchType = "book" | "author"

export type Bookstype = z.infer<typeof Book>
export type BookstypeComplete = z.infer<typeof BookComplete>
export type BookData = z.infer<typeof bookSchemaCreate>;