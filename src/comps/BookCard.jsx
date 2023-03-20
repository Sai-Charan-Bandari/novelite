import React, { useEffect, useState } from 'react'
import {useParams,useNavigate } from 'react-router-dom'

function BookCard({isMobile}) {
    let {url}=useParams()
    let [bookData,setBookData]=useState({})
    let nav=useNavigate()
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
    <div className='card text-center'> 
    {/* Heading */}
    <div style={{display:'flex',flexDirection:'row'}} className='card-header'>
    <button onClick={()=>nav(-1)}  style={{backgroundColor:'transparent',borderColor:'transparent'}}><img width={30} src="https://cdn-icons-png.flaticon.com/128/271/271220.png" alt="" /></button>
    <h1 style={{fontFamily:'lobster'}}>{bookData.name}</h1>
    </div>
    <div><img src={bookData.img} width={isMobile ? 250 : 350} height={isMobile ? 250 : 350} className='rounded-3 mt-2'/></div>
    <div >
    <div className='card-body'>{bookData.availability}</div>
    <div>{bookData.price}</div>
    <div>{bookData.rating}</div>
    </div>
    <h1>description</h1>
    <div className='card m-4'>{bookData.desc}</div>
    <h1>Product info</h1>
    <div className='card m-4'>
    <div>UPC : {bookData.upc}</div>
    <div>Product Type : {bookData.ptype}</div>
    <div>Price Exclusive of Taxes : {bookData.price_exc}</div>
    <div>Price Inclusive of Taxes : {bookData.price_inc}</div>
    <div>Tax : {bookData.tax}</div>
    <div>No. of Reviews : {bookData.no_of_reviews}</div>
    </div>
    </div>
  )
}

export default BookCard