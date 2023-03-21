import { useEffect, useState } from 'react'
import './App.css'
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import BookCard from './comps/BookCard'
import CategoryCard from './comps/CategoryCard'
import BookListCard from './comps/BookListCard'
import Welcome from './comps/Welcome'

function App() {
  let [booklistobj,setbooklistobj]=useState({}) //contains booklist of each category (key is the url of that category)
  let [bookobj,setbookobj]=useState({}) //contains book data ... key is book url
  let [clist,setclist]=useState([])
  async function getCategories(){
    let k=await fetch('https://novelite-server2.onrender.com/categories')
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
    <div style={!isMobile ? {display:'flex',flexDirection:'row'} : {display:'block'}}>
    {!isMobile && <CategoryCard clist={clist} isMobile={isMobile}/>}
      <Routes>
        <Route path='/' element={isMobile ? <CategoryCard clist={clist} isMobile={isMobile}/> : <Welcome/>}></Route>
        <Route path='/book/:url' element={<BookCard isMobile={isMobile} bookobj={bookobj} setbookobj={setbookobj} />}></Route>
        <Route path='/books/:url' element={<BookListCard isMobile={isMobile} booklistobj={booklistobj} setbooklistobj={setbooklistobj} />}></Route>
        <Route path='*' element={<PgNotFound/>}></Route>
      </Routes>
      </div>
    </BrowserRouter>
      )
}

function PgNotFound(){
  return(
      <div>Pg not found</div>
  )
}

export default App
