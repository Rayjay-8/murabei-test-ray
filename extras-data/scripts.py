import requests
import os

def get_book_cover(book_name, save_dir="book_covers"):

    # URL base da API do Google Books
    api_url = "https://www.googleapis.com/books/v1/volumes"
    params = {"q": book_name}
    try:
        response = requests.get(api_url, params=params)
        response.raise_for_status()
        data = response.json()

        if "items" not in data:
            print(f"Nenhuma capa encontrada para o livro: {book_name}")
            return

        
        book_info = data["items"][0]
        cover_url = book_info["volumeInfo"].get("imageLinks", {}).get("thumbnail")
        if not cover_url:
            print(f"Nenhuma imagem disponível para o livro: {book_name}")
            return

        
        img_response = requests.get(cover_url)
        img_response.raise_for_status()

        
        os.makedirs(save_dir, exist_ok=True)

        
        file_name = f"{save_dir}/{book_name.replace(' ', '_').replace(':', '').replace('/', '')}.jpg"

        
        with open(file_name, "wb") as img_file:
            img_file.write(img_response.content)

        print(f"Capa salva com sucesso: {file_name}")

    except requests.exceptions.RequestException as e:
        print(f"Erro ao buscar a capa de {book_name}: {e}")


if __name__ == "__main__":
    
    books = [
        "Opening Spaces: An Anthology of Contemporary African Women's Writing",
        "Things Fall Apart",
        "Half of a Yellow Sun"
    ]

    
    for book in books:
        get_book_cover(book)
