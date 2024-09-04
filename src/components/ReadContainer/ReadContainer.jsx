import ReadCard from '../../components/ReadCard/ReadCard';

const ReadContainer = () => {

    const books = JSON.parse(localStorage.getItem('read'));

    return (
        <div className="grid gap-5">
            {
                books.map(book => <ReadCard key={book.bookId} book={book} />)
            }
        </div>
    );
};

export default ReadContainer;