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
    }, [])

    return (
        <div>
        <h1 className='text-center card-header'>Book List</h1>
        <div style={isMobile ? {display:'grid',gridTemplateColumns:'auto auto'} : {display:'grid',gridTemplateColumns:'auto auto auto auto',gap:0} }>
            {blist.map((e, i) =>
                <div key={i} className='card'>
                    <button onClick={() => { nav('/book/' + encodeURIComponent(e.url)) }} className='card-body'>
                        <h1 className='card-head'>{e.name}</h1>
                        <div><img src={e.img} alt="" width={isMobile ?100:300} height={150} /></div>
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