import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

function CategoryCard({clist}) {
    let nav=useNavigate()
  return (
    <div >
     {clist.map((e,i)=>
      <div key={i}><button onClick={()=>{nav('/books/'+encodeURIComponent(e.url));}}>{e.name}</button></div>
     )}
    </div>

  )
}

export default CategoryCard