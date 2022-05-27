import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const ViewAll = () => {
    var [viewstudent,setViewstudent]=useState([])
    axios.get('http://localhost:4001/api/viewall').then(
      (response)=>{
        console.log(response.data)
        setViewstudent(response.data)
      }
    )
    const deleteData=(id)=>{
      const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:4001/api/delete",data).then((response)=>{
            if(response.data.status=="success")
            {
                alert("successfully deleted")
            }
            else
            {
                alert("error")
            }
        })
    }
    
  return (
    <div>

<Header/>

<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <table className="table table-primary table-striped">
  <thead className="table-danger">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">AdmNo</th>
      <th scope="col">CGPA</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    {viewstudent.map((value,key)=>{
      return <tr>
      <td>{value.name}</td>
      <td>{value.admno}</td>
      <td>{value.cgpa}</td>
      <button onClick={()=>{deleteData(value._id)}} className='btn btn-success'>DELETE</button>
    </tr>
    })}
    
    
    
  </tbody>
</table>



                    </div>
               

              </div>

            </div>

          </div>

        </div>

    </div>
  )
}

export default ViewAll