import React, { useEffect, useState } from 'react'
import {useParams,useNavigate } from 'react-router-dom'

function BookCard({isMobile,bookobj,setbookobj}) {
    let {url}=useParams()
    let nav=useNavigate()
    async function getBook(url){
        let k=await fetch('https://novelite-server2.onrender.com/book/'+encodeURIComponent(url))
        k=await k.json()
        console.log("got ",k)
        setbookobj({...bookobj,[url]:k})
      }

      useEffect(()=>{
    console.log(url)
    console.log(bookobj)
    // if the book data doesnt exist then we have to fetch
    if(!bookobj[url])
        getBook(url)
    },[])

  return (
    <div className='card text-center'> 
    {/* Heading */}
    <div style={{display:'flex',flexDirection:'row'}} className='card-header'>
    <button onClick={()=>nav(-1)}  style={{backgroundColor:'transparent',borderColor:'transparent'}}><img width={30} src="https://cdn-icons-png.flaticon.com/128/271/271220.png" alt="" /></button>
    <h1 style={{fontFamily:'lobster'}}>{bookobj[url] ? bookobj[url].name : 'Novelite'}</h1>
    </div>
    {bookobj[url] &&
    <>
    <div><img src={bookobj[url].img} width={isMobile ? 250 : 350} height={isMobile ? 250 : 350} className='rounded-3 mt-2'/></div>
    <div >
    <div className='card-body'>{bookobj[url].availability}</div>
    <div>{bookobj[url].price}</div>
    <div>{bookobj[url].rating}</div>
    </div>
    <h1>description</h1>
    <div className='card m-4'>{bookobj[url].desc}</div>
    <h1>Product info</h1>
    <div className='card m-4'>
    <div>UPC : {bookobj[url].upc}</div>
    <div>Product Type : {bookobj[url].ptype}</div>
    <div>Price Exclusive of Taxes : {bookobj[url].price_exc}</div>
    <div>Price Inclusive of Taxes : {bookobj[url].price_inc}</div>
    <div>Tax : {bookobj[url].tax}</div>
    <div>No. of Reviews : {bookobj[url].no_of_reviews}</div>
    </div>
    </>
    }
    </div>
  )
}

export default BookCard