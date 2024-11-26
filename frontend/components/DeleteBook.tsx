"use client"
import React, { useState } from 'react'
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteBook } from '@/services/books';
import { useToast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation";
import action from '@/app/actions';


interface DeleteBookType {
    id: number;
    children: string;
}

const DeleteBookButton:React.FC<DeleteBookType> = ({ id, ...props }) => {

    const { toast } = useToast()
    const router = useRouter();

    const [disablebutton, setDisablebutton] = useState(false)

    const deletefunction = async () => {
        try {
            await deleteBook(id);
            setDisablebutton(true)
            
            toast({
                title: "Book Deleted",
                description: "The book has been deleted successfully. You will be redirected in 5 seconds!",
                duration: 5000, // Duração da notificação
                style: {
                  background: "#333",
                  color: "#fff",
                },
              });
            
               // Aguarda 5 segundos antes de redirecionar
                setTimeout(async () => {
                  // revalidatePath('/', 'layout')
                    await action()
                    router.push("/"); // Redireciona para a página inicial

                }, 5000);

        } catch (error) {
            console.error('Failed to delete book:', error);
            toast({
                description: "An error occurred while deleting the book. Please try again.", 
                duration: 5000,
        });
              setDisablebutton(false)
        }

    }
    return (
        <Button disabled={disablebutton} variant="destructive" className="w-full" onClick={deletefunction} {...props}>
          <Trash className="mr-2" /> Delete
        </Button>
      );
}

export default DeleteBookButton