'use client'
import React, { useState } from 'react'

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button";
import Link from 'next/link';

type searchtype = "" | "author" | "book"

const SearchBar = ({defaultsearch="", defaulttype="book"}: {defaultsearch?: string, defaulttype?: searchtype}) => {
  
  const [searchby, setsearchby] = useState<searchtype>(defaulttype)
  const [search, setsearch] = useState("")

  return (
   <div className="flex gap-2">
   <Select onValueChange={(e:searchtype) => setsearchby(e)} defaultValue={defaulttype}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="book" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem value="book">Book</SelectItem>
        <SelectItem value="author">Author</SelectItem>
        
      </SelectGroup>
    </SelectContent>
    </Select>

    <Input 
    defaultValue={defaultsearch}
    data-cy="searchinput"
    // onKeyDown={(e) => {
    //   console.log('e.code', e.code)
    //   if(e.code == `Enter`){
    //     router.push("/search?type="+searchby+"&search="+search)
    //   }
    // }} 
    onBlur={e => setsearch(e.target.value)} type="search" placeholder={"Find the "+ (searchby || "book") + " you like..."} />
    
    <Button variant="default" data-cy="searchbutton" asChild>
      <Link href={"/search?type="+searchby+"&search="+search}>
        Search
      </Link>
      </Button>
   </div>
  )
}

export default SearchBar
