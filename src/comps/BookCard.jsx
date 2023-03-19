import React, { useEffect, useState } from 'react'
import {useParams,useNavigate } from 'react-router-dom'

function BookCard() {
    let {url}=useParams()
    let [bookData,setBookData]=useState({})
    
    async function getBook(url){
        let k=await fetch('http://localhost:7000/book/'+encodeURIComponent(url))
        k=await k.json()
        console.log("got ",k)
        setBookData(k)
      }

      useEffect(()=>{
    console.log(url)
        getBook(url)
    },[])

  return (
    <div> 
    BookCard
    <h1>{bookData.name}</h1>
    <div><img src={bookData.img} width='50px'/></div>
    <div>{bookData.availability}</div>
    <div>{bookData.price}</div>
    <div>{bookData.rating}</div>
    <h1>description</h1>
    <div>{bookData.desc}</div>
    <div>{bookData.upc}</div>
    <div>{bookData.ptype}</div>
    <div>{bookData.price_exc}</div>
    <div>{bookData.price_inc}</div>
    <div>{bookData.tax}</div>
    <div>{bookData.no_of_reviews}</div>
    </div>
  )
}

export default BookCard