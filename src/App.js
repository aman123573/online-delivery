
import './App.css';
import Layout from '../src/UI/Layout';
import Home from './components/Home';
import Cart from './pages/Cart';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Items from './pages/Items';
import Contact from './pages/Contact';
import Root from './routes/Root'
import { ItemContextProvider } from './store/ItemContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/items", element: <Items /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> }
    ]
  },
])

function App() {
  return (
    <ItemContextProvider>

      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </ItemContextProvider>
  );
}

export default App;
