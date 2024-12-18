import { createRoot } from 'react-dom/client';
import { App } from './components/App/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = document.getElementById('root');

if(!root) throw new Error('root is not found');

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: []
  }
]);

const container = createRoot(root);
container.render(<RouterProvider router={router} />)