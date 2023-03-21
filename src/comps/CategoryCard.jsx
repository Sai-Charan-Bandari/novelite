import React from 'react'
import { useNavigate} from 'react-router-dom'

function CategoryCard({clist,isMobile}) {
    let nav=useNavigate()
  return (
    <div className='p-2'>
    <h2 className='text-center' style={{fontFamily:'lobster'}}>Categories</h2>
    <div className='bg-dark' style={isMobile ? {display:'grid',gridTemplateColumns:'auto auto',overflow:'scroll',maxHeight:window.outerHeight-100} : {padding:10,overflow:'scroll',maxHeight:window.outerHeight-100} }>
     {clist.map((e,i)=>
      <div key={i} className='container text-center py-2 '><button className='btn btn-primary col-10 col-lg-12'  onClick={()=>{nav('/books/'+encodeURIComponent(e.url));}}>{e.name}</button></div>
     )}
    </div>
    </div>
  )
}

export default CategoryCard