import { createRoot } from 'react-dom/client'
import {RouterProvider, Route, createBrowserRouter} from 'react-router-dom'
import App from './App'

import './index.css'

//paginas

import Home from './routes/Home';
import NewPost from './routes/NewPost';

const router = createBrowserRouter([
    {
      element: <App />,
      children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/new",
        element: <NewPost />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
