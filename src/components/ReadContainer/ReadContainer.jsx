import { useEffect } from 'react';
import ReadCard from '../../components/ReadCard/ReadCard';

const ReadContainer = () => {
    const localBooks = JSON.parse(localStorage.getItem('read'));
    const books = localBooks || [];

    useEffect(() => {
    }, [])

    return (
        <div className="grid gap-5 mb-5">
            {
                books.length > 0 && (books.map(book => <ReadCard key={book.bookId} book={book} />))
            }
        </div>
    );
};

export default ReadContainer;