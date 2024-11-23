import React from 'react'
import {
   NavigationMenu,
   NavigationMenuItem,
   NavigationMenuLink
} from "@/components/ui/navigation-menu";
import Link from "next/link";


const NavigationBar = () => {
  return (
   <header className="shadow-sm">
        <div className="container mx-auto flex justify-between items-center py-8">
        <div className="text-lg font-bold">
        <Link href="/" className="hover:text-gray-400 transition">
        Murabei Library
                        </Link>
                        </div>
        <NavigationMenu className="flex space-x-8">
           
                <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                        <Link href="/books/create" className="hover:text-gray-400 transition">
                            New Book
                        </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
         
            </NavigationMenu>
            </div>
    </header>
  )
}

export default NavigationBar