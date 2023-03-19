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
  const [isMobile, setIsMobile] = useState(false)
    //choose the screen size 
    const handleResize = () => {
      if (window.innerWidth < 720) {
          setIsMobile(true)
      } else {
          setIsMobile(false)
      }
  }

  useEffect(()=>{
    getCategories()

        // create an event listener
        window.addEventListener("resize", handleResize)
  },[])
  useEffect(()=>{
    console.log(clist)
  },[clist])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CategoryCard clist={clist} isMobile={isMobile}/>}></Route>
        <Route path='/book/:url' element={<BookCard isMobile={isMobile}/>}></Route>
        <Route path='/books/:url' element={<BookListCard isMobile={isMobile}/>}></Route>
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
