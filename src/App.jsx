import { useEffect, useState } from 'react'
import './App.css'
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import BookCard from './comps/BookCard'
import CategoryCard from './comps/CategoryCard'
import BookListCard from './comps/BookListCard'

function App() {
  let [clist,setclist]=useState([])
  async function getCategories(){
    let k=await fetch('http://localhost:7000/categories')
    k=await k.json()
    // console.log(k)
    setclist(k.categories)
  }
  useEffect(()=>{
    getCategories()
  },[])
  useEffect(()=>{
    console.log(clist)
  },[clist])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CategoryCard clist={clist}/>}></Route>
        <Route path='/book/:url' element={<BookCard/>}></Route>
        <Route path='/books/:url' element={<BookListCard/>}></Route>
        <Route path='*' element={<PgNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
      )
}

function PgNotFound(){
  return(
      <div>Pg not found</div>
  )
}
export default App
