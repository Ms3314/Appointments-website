import SalonHomepage from './pages/home'
import Book from './pages/book'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from './components/Layout';
import Apoint from './pages/appointments';
import About from './pages/about';

function App() {
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Layout/>} >
        <Route index element={<SalonHomepage/>}/>
        <Route path="home" element={<SalonHomepage/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<SalonHomepage/>}/>
        <Route path="appointments" element={<Apoint/>}/>
        <Route path="book" element={<Book/>}/>
      </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
