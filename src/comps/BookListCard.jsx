import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function BookListCard({isMobile,booklistobj,setbooklistobj}) {
    let nav = useNavigate()
    let { url } = useParams()
    
    async function getBooks(url) {
        let k = await fetch('https://novelite-server2.onrender.com/books/' + encodeURIComponent(url))
        k = await k.json()
        // console.log(k)
        setbooklistobj({...booklistobj,[url]:k.books})
    }

    useEffect(() => {
        // let url=localStorage.getItem('cat')
        console.log(url)
        // if the obj[url] arr does not exist or if its length is 0 then we have to fetch and add the array
        if(!booklistobj[url] || booklistobj[url].length==0)
        getBooks(url)
    }, [url])

    return (
        <div className='bg-dark container-fluid'>
            {/* Heading */}
    <div style={{display:'flex',flexDirection:'row',padding:10,}}>
    <button onClick={()=>nav(-1)} style={{marginLeft:5,backgroundColor:'white',borderRadius:3,borderColor:'transparent'}}><img width={30} src="https://cdn-icons-png.flaticon.com/128/271/271220.png" alt="" /></button>
        <h1 className='text-center card-header m-auto text-white' style={{fontFamily:'lobster'}}>Book List</h1>
    </div>
        <div style={isMobile ? {display:'grid',gridTemplateColumns:'auto auto',overflow:'scroll',maxHeight:window.outerHeight-100} : {display:'grid',gridTemplateColumns:'auto auto auto auto',gap:0,padding:10,overflow:'scroll',maxHeight:window.outerHeight-100} }>
            {booklistobj[url] && booklistobj[url].map((e, i) =>
                <div key={i} className='card m-1' style={{borderColor:'transparent'}} >
                    <button onClick={() => { nav('/book/' + encodeURIComponent(e.url)) }} className='card-body rounded-3' style={{backgroundColor:'white',borderColor:'transparent'}}>
                       {isMobile ? <h3 className='card-head'>{e.name}</h3> : <h2 className='card-head'>{e.name}</h2>}
                        <div><img className='rounded-3' src={e.img} alt="" width={isMobile ?100:270} height={150} /></div>
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
        </div>
    )
}

export default BookListCard