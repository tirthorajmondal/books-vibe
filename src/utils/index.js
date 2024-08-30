const getBooks = () => {
    let books;
    const localBooks = localStorage.getItem('read');
    if (localBooks) {
        books = JSON.parse(localBooks);
    }
    return books = [];
}

const saveBooks = book => {
    let books = getBooks();
     books.push(book);
    localStorage.setItem('read', JSON.stringify(books))
    console.log(books);

}

export { getBooks, saveBooks };