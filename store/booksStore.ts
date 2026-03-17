import { create } from 'zustand';
import axios from 'axios';

export enum Gen {
  ROMANCE = 'ROMANCE',
  ACTION = 'ACTION',
  FICTION = 'FICTION',
  THRILLER = 'THRILLER',
  PERSONAL_DEVELOPMENT = 'PERSONAL_DEVELOPMENT',
  FOR_KIDS = 'FOR_KIDS',
  HISTORICAL = 'HISTORICAL',
  HORROR = 'HORROR'
}

interface Book {
  id: string;
  title: string;
  image?: string;
  description: string;
  gen: Gen;
  buyLink?: string;
  writtenAt: string | Date;
  author: string;
  createdAt: string | Date;
  review:Review | null;
}

export interface Review {
  id: string;
  bookId: string;
  description: string;
  stars: number;
  createdAt?: string | Date;
  editedAt?: string | Date;
}

interface BookState {
  books: Book[];
  isLoading: boolean;
  error: string | null;
  getBooks: () => Promise<void>;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const useBookStore = create<BookState>((set) => ({
  books: [],
  isLoading: false,
  error: null,

  getBooks: async () => {
    set({ isLoading: true, error: null });
    try {
      
      const response = await axios.get(`${baseUrl}/api/book`)


    let booksData = Array.isArray(response.data) ? response.data : [];
    
    if (!Array.isArray(response.data) && response.data.books) {
      booksData = response.data.books;
    }

    set({ books: booksData, isLoading: false });
    } catch (error: any) {
      const message = error.response?.data?.message || 'Loading books error!';
      set({ error: message, isLoading: false });
    }
  },
}));