import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import CardBook from "@/components/CardBook";
import PaginationBooks from "@/components/PaginationBooks";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen py-10 ">
      <main className="min-h-screen ">

      <section className="mt-4 flex flex-col px-20 gap-8 pb-24 ">
      <h1 className="text-left max-w-2xl  text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white">
          Discover
        </h1>

        <div className="flex gap-2">
        <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="All" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>select type search</SelectLabel> */}
          <SelectItem value="apple">Book</SelectItem>
          <SelectItem value="banana">Author</SelectItem>
         
        </SelectGroup>
      </SelectContent>
    </Select>
        <Input type="email" placeholder="Find the book you like..." />

        <Button variant="default">Search</Button>

        </div>
      </section>


      <section className=" flex flex-col px-20 gap-8 ">
      <h1 className="text-left max-w-2xl  text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white">
          Book's
        </h1>
        

        <Suspense fallback={<p>carregando...</p>}>
          <PaginationBooks/>
        </Suspense>
     
        
      </section>

      
      </main>
      
    </div>
  );
}
