'use client';

import React from 'react'
import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Button } from './ui/button';
import SearchBar from './SearchBar';

import { usePathname } from 'next/navigation';

// import { headers } from 'next/headers';

const NavigationBar = () => {

    const router = usePathname();
  const isHome = router === '/';

  console.log(router)

  return (
   <header className="shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-8">
        <div className="text-lg font-bold">
        <Link href="/" className="hover:text-gray-600 transition">
        Murabei Library
                        </Link>
                        </div>
        <div>
            {isHome ? null : <SearchBar/>}
        </div>
        <NavigationMenu className="flex space-x-8">

           
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Button variant="outline" asChild>
                        <Link href="/createbook" className="hover:text-gray-600 transition">
                            New Book
                        </Link>
                        </Button>
                    </NavigationMenuLink>
                </NavigationMenuItem>
         
            </NavigationMenu>
            </div>
    </header>
  )
}

export default NavigationBar