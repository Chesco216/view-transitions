import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Page1 } from './pages/Page1'
import { Page3 } from './pages/Page3';
import { Page2 } from './pages/Page2';
import './App.css'

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
  },
  {
    path: "/p2",
    element: <Page2 />,
  },
  {
    path: "/p3",
    element: <Page3 />,
  },
]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
