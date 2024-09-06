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
    const isExist = books.find(b => b.bookId === book.bookId)

    if (isExist) {
        return toast.error('Already added to read')
    }

    books.push(book);
    localStorage.setItem('read', JSON.stringify(books))
    toast.success('Successfully added to Read');

    deleteFromWishlist(book.bookId);
}



const saveToWishlist = book => {
    let books = JSON.parse(localStorage.getItem('wishlist')) || [];
    const readBooks = getBooks();
    const isExistInRead = readBooks.find(b => b.bookId === book.bookId);
    const isExist = books.find(b => b.bookId === book.bookId);
    if (isExistInRead) {
        return toast.error('Already read this book')
    }
    if (isExist) {
        return toast.error('Already added to Wishlist')
    }
    books.push(book)
    localStorage.setItem('wishlist', JSON.stringify(books))
}

const deleteFromWishlist = id => {
    const wishlisted = JSON.parse(localStorage.getItem('wishlist'));
    const newWishlisted = wishlisted.filter(book => book.bookId !== id)

    localStorage.setItem('wishlist', JSON.stringify(newWishlisted));    
}


export { getBooks, saveBooks, saveToWishlist };