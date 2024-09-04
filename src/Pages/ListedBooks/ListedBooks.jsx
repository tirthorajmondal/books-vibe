import ReadContainer from '../../components/ReadContainer/ReadContainer';
import ShortBy from '../../components/ShortBy/ShortBy';
import WishlistContainer from './../../components/WishlistContainer/WishlistContainer';

const ListedBooks = () => {

    return (
        <div className='min-h-screen'>
            <h2 className='font-bold text-2xl bg-ashback rounded-xl text-center py-5'>Books</h2>

            {/* toggle shortby */}
            <ShortBy />
            {/* tabs */}

            {/* dynamic container */}
            <WishlistContainer/>
            <ReadContainer />

        </div>
    );
};

export default ListedBooks;