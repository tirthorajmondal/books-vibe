import { toast } from "react-toastify";

const getBooks = () => {
    let books = [];
    const localBooks = localStorage.getItem('read');
    if (localBooks) {
        books = JSON.parse(localBooks);
    }
    return books;
}

const saveBooks = book => {
    let books = getBooks();
    books.push(book);

    localStorage.setItem('read', JSON.stringify(books))
    console.log(book, books);
    
    toast.success('Successfully added to Read');


}

export { getBooks, saveBooks };