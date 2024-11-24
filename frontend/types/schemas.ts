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