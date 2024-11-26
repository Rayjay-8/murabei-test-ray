'use client'
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { createBook } from "@/services/books";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { BookData, bookSchemaCreate } from "@/types/schemas";

const Page = () => {

  const form = useForm<BookData>({
    resolver: zodResolver(bookSchemaCreate),
  });

  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (data: BookData) => {
  
    const response = await createBook(data)

    if (response?.[0]?.book?.id) {
      toast({
        title: "Book Created",
        description: "The book has been successfully created.",
      });

      router.push(`/search?type=book&search=${data.title}`);

    }else{
      toast({
        title: "Book Fail :(",
        description: "The book has been not successfully created.",
      });
    }

  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Book</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="Author" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author_slug"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author Slug</FormLabel>
                <FormControl>
                  <Input placeholder="Author Slug" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="author_bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author Bio</FormLabel>
                <FormControl>
                  <Textarea placeholder="Author Bio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="authors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Authors</FormLabel>
                <FormControl>
                  <Input placeholder="Additional Authors" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="publisher"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Publisher</FormLabel>
                <FormControl>
                  <Input placeholder="Publisher" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="synopsis"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Synopsis</FormLabel>
                <FormControl>
                  <Textarea placeholder="Synopsis" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create</Button>
        </form>
      </Form>
    </div>
  )
}

export default Page