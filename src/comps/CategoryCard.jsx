import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

function CategoryCard({clist,isMobile}) {
    let nav=useNavigate()
  return (
    <>
    <h1 className='text-center'>Categories</h1>
    <div style={isMobile ? {display:'grid',gridTemplateColumns:'auto auto'} : {display:'grid',gridTemplateColumns:'auto auto auto auto',gap:0} }>
     {clist.map((e,i)=>
      <div key={i} className='container text-center py-2'><button className='btn btn-primary col-10 col-lg-6'  onClick={()=>{nav('/books/'+encodeURIComponent(e.url));}}>{e.name}</button></div>
     )}
    </div>
    </>
  )
}

export default CategoryCard