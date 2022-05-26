import React from 'react'
import Header from './Header'

const ViewAll = () => {
    var viewstudent=[
        {
            "name":"Anjali",
            "admno":"123",
            "cgpa":"86"
        },
        {
            "name":"Adhi",
            "admno":"121",
            "cgpa":"87"
        },
        {
            "name":"sruthy",
            "admno":"128",
            "cgpa":"85"
        },
        {
            "name":"Divya",
            "admno":"126",
            "cgpa":"86"
        }
    ]
  return (
    <div>

<Header/>

<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">AdmNo</th>
      <th scope="col">CGPA</th>
      
    </tr>
  </thead>
  <tbody>
    {viewstudent.map((value,key)=>{
      return <tr>
      <td>{value.name}</td>
      <td>{value.admno}</td>
      <td>{value.cgpa}</td>
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