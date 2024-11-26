'use server'
import Paginacao from "@/components/Paginacao";
import SearchBar from "@/components/SearchBar";
import SkeletonCardBook from "@/components/SkeletonCardBook";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className=" py-10 ">
      <main className=" min-h-screen container mx-auto sm:bg-white md:bg-white">

        <section className="mt-4 flex flex-col gap-8 pb-12 ">
          <h1 className="text-left max-w-2xl  text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white">Discover</h1>
          <SearchBar/>        
        </section>

        <section className=" flex flex-col gap-8 min">
          <h1 className="text-left max-w-2xl  text-xl font-extrabold tracking-tight leading-none md:text-2xl xl:text-2xl dark:text-white">Book&apos;s</h1>
          <Suspense fallback={
            <div className="h-[700px] layout-grid-cards mb-12">
              <SkeletonCardBook/>
              <SkeletonCardBook/>
              <SkeletonCardBook/>

              <SkeletonCardBook/>
              <SkeletonCardBook/>
              <SkeletonCardBook/>

              <SkeletonCardBook/>
              <SkeletonCardBook/>
              <SkeletonCardBook/>

              <SkeletonCardBook/>
              <SkeletonCardBook/>
              <SkeletonCardBook/>

            </div>
            }>
            <Paginacao />
          </Suspense>
        </section>

      </main>
    </div>
  );
}
