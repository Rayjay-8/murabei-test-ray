'use server'

import axios from 'axios';
import { Book } from '@/types/schemas';

export const fetchBooks = async (page: number = 1): Promise<{ data: typeof Book[]; total: number }> => {
   try {
       const response = await axios.get<{ books: typeof Book[]; total: number }>(`${process.env.API_BASE_URL}/books`, {
           params: { page, page_size: 9 },
       });
       return {
           data: response.data,
           total: response.data.length,
       };
   } catch (error) {
       console.error('Failed to fetch books:', error);
       throw new Error('Failed to fetch books. Please try again later.');
   }
};