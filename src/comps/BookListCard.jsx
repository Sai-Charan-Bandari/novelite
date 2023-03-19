import React, { useEffect, useState } from 'react'
import {useParams,useNavigate } from 'react-router-dom'

function BookListCard() {
    let nav=useNavigate()
    let [blist,setblist]=useState([])
    let {url}=useParams()

  async function getBooks(url){
    let k=await fetch('http://localhost:7000/books/'+encodeURIComponent(url))
    k=await k.json()
    // console.log(k)
    setblist(k.books)
  }

    useEffect(()=>{
        // let url=localStorage.getItem('cat')
    console.log(url)
        getBooks(url)
    },[])

  return (
    <div>
    BookListCard
     {blist.map((e,i)=>
      <div key={i}>
      <button onClick={()=>{nav('/book/'+encodeURIComponent(e.url))}}>
      <div>
      {e.name}
      </div>
      <div>
      {e.rating}
      </div>
      <div>
      {e.price}
      </div>
      <div>
      {e.availability}
      </div>
      </button>
      </div>
     )}
    </div>
  )
}

export default BookListCard