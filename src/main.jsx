import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout'
import Errorpage from './Pages/ErrorPage/Errorpage'
import Home from './Pages/Home/Home'
import ListedBooks from './Pages/ListedBooks/ListedBooks'
import BookDetails from './Pages/BookDetails/BookDetails'
import PagesToRead from './Pages/PagesToRead/PagesToRead'
import ReadContainer from './components/ReadContainer/ReadContainer'
import WishlistContainer from './components/WishlistContainer/WishlistContainer'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('books.json'),
      },
      {
        path: '/listed-books',
        element: <ListedBooks></ListedBooks>,
        children:[
          {
            index:true,
            path:'',
            element:<ReadContainer></ReadContainer>
          },
          {
            path:'whishlist',
            element:<WishlistContainer></WishlistContainer>
          }
        ]
      },
      {
        path: '/book/:id',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('/books.json'),
      },
      {
        path: '/to-read',
        element: <PagesToRead></PagesToRead>,
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
