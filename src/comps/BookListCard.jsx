import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function BookListCard({isMobile}) {
    let nav = useNavigate()
    let [blist, setblist] = useState([])
    let { url } = useParams()
    
    async function getBooks(url) {
        let k = await fetch('http://localhost:7000/books/' + encodeURIComponent(url))
        k = await k.json()
        // console.log(k)
        setblist(k.books)
    }

    useEffect(() => {
        // let url=localStorage.getItem('cat')
        console.log(url)
        getBooks(url)
    }, [url])

    return (
        <div className='bg-dark'>
            {/* Heading */}
    <div style={{display:'flex',flexDirection:'row',padding:10,}}>
    <button onClick={()=>nav(-1)} style={{marginLeft:5,backgroundColor:'white',borderRadius:3,borderColor:'transparent'}}><img width={30} src="https://cdn-icons-png.flaticon.com/128/271/271220.png" alt="" /></button>
        <h1 className='text-center card-header m-auto text-white' style={{fontFamily:'lobster'}}>Book List</h1>
    </div>
        <div style={isMobile ? {display:'grid',gridTemplateColumns:'auto auto'} : {display:'grid',gridTemplateColumns:'auto auto auto auto',gap:0,padding:10,overflow:'scroll',maxHeight:window.outerHeight-100} }>
            {blist.map((e, i) =>
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