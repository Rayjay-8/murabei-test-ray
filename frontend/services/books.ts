'use server'

import axios from 'axios';
import { Book } from '@/types/schemas';
import type * as booktype from '@/types/schemas';

export const fetchBooks = async (page: number = 1, pageSize = 12): Promise<{ data: booktype.Bookstype[]; total: number }> => {
   try {
       const response = await axios.get<{ books: booktype.Bookstype[]; total: number }>(`${process.env.API_BASE_URL}/books`, {
           params: { page, page_size: pageSize },
           headers: {
            'Cache-Control': 'no-store', // Indica que a resposta não deve ser armazenada em cache
            Pragma: 'no-cache',         // Compatibilidade com navegadores mais antigos
          },
       });
       return {
           data: response.data.books,
           total: response.data.total,
       };
   } catch (error) {
       console.error('Failed to fetch books:', error);
       throw new Error('Failed to fetch books. Please try again later.');
   }
};

export const fetchBook = async (id:number) => {
    try {
        const response = await axios.get(`${process.env.API_BASE_URL}/book/${id}`);
        return response.data
    }catch (error){
        console.error('Failed to fetch book:', error);
        throw new Error('Failed to fetch book. Please try again later.');
    }
}

export const fetchBooksByType = async (search:string, typeBook:"book" | "author"): Promise<booktype.Bookstype[]>  => {
    
    let urlfetch = ''
    if(typeBook === "author"){
        urlfetch = `${process.env.API_BASE_URL}/books/author/${search}`
    }
    if(typeBook === "book"){
        urlfetch = `${process.env.API_BASE_URL}/books/title/${search}`
    }
    
    try {
        const response = await axios.get<booktype.Bookstype[]>(urlfetch);
        return response.data
    }catch (error){
        console.error('Failed to fetch books:', error);
        throw new Error('Failed to fetch books. Please try again later.');
    }
    
}

export const deleteBook = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${process.env.API_BASE_URL}/books/${id}`);
    } catch (error) {
        console.error('Failed to delete book:', error);
        throw new Error('Failed to delete book. Please try again later.');
    }
};


export const createBook = async (book: Omit<booktype.Bookstype, 'id'>): Promise<booktype.Bookstype> => {
    try {
        const response = await axios.post<booktype.Bookstype>(`${process.env.API_BASE_URL}/books`, book);
        return response.data;
    } catch (error) {
        console.error('Failed to create book:', error);
        throw new Error('Failed to create book. Please try again!');
    }
};