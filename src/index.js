import React from 'react' 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import {createRoot} from 'react-dom/client'
import Navbar from './component/navbar.js'
import Footer from './component/footer.js'
import Country from './component/country.js'
import Contact from './pages/contact.js'
import Home from './pages/home.js'
import WishList from './pages/wishList.js'
import BookList from './pages/bookList.js'
import Describe from './pages/describle.js'
import DetailBookList from './pages/detailBookList.js'

function Main(){
  return(
    <>
      <Router>
        <Navbar/>
        <div style={{width:"100%",height:"5rem"}} ></div>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/:country' element={<Country/>}/>
          <Route path='/:countryName/:ccounts/:wishList' element={<Describe/>}/>
          <Route path='/wishList' element={<WishList/>}/> 
          <Route path='/bookList' element={<BookList/>}/>
          <Route path='/detailBookList/:timeBookSecond' element={<DetailBookList/>}/> 
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
      <Footer/>
    </>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<Main/>);

