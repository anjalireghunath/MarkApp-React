import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
   const [data,setData]=useState([
       {
           "name":"",
           "cgpa":""
       }
      
   ])

   var [admno,setAdmno]=useState("")

    const deleteData=(id)=>{
    const remove={"_id":id}
      console.log(remove)
      axios.post("http://localhost:4001/api/delete",data).then((response)=>{
          if(response.remove.status=="success")
          {
              alert("successfully deleted")
          }
          else
          {
              alert("error")
          }
      })
  }

   const searchData=()=>{
       const data={"admno":admno}
       console.log(data)
       axios.post("http://localhost:4001/api/search",data).then((response)=>{
           console.log(response.data)

           setData(response.data)
          
       })
   }

  
   
  return (
    <div>
<Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">AdmNo</label>
                    <input onChange={(e)=>{setAdmno(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchData} className="btn btn-success">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>


{data.map((value,key)=>{
    return <div className="container">
    <div className='row'>
        <div className='col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
            <label className='form-label'>Name</label>
            <input type="text" className="form-control" value={value.name} />
        </div>
        <div className='col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
            <label className='form-label'>CGPA</label>
            <input type="text"  className="form-control" value={value.cgpa} />
        </div>
        </div>
        <div className='col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
        <button onClick={()=>{deleteData(value._id)}} className='btn btn-danger'>DELETE</button>
</div>
    </div>
    
})}

    </div>
  )
}

export default Search