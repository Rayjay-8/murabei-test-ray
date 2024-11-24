'use server'
import PaginationBooks from "@/components/PaginationBooks";
import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="min-h-screen py-10 ">
      <main className="min-h-screen container mx-auto">

        <section className="mt-4 flex flex-col gap-8 pb-12 ">
          <h1 className="text-left max-w-2xl  text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white">Discover</h1>
          <SearchBar/>        
        </section>

        <section className=" flex flex-col gap-8 ">
          <h1 className="text-left max-w-2xl  text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white">Book's</h1>
          <Suspense fallback={<p>carregando...</p>}>
            <PaginationBooks />
          </Suspense>
        </section>

      </main>
    </div>
  );
}
