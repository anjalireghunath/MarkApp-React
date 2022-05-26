import React, { useState } from 'react'

const AddStudent = () => {
    var [name,setName]=useState("")
    var [admno,setAdmno]=useState("")
    var [cgpa,setCgpa]=useState("")
    const addStud=()=>{
        const data={"name":name,"admno":admno,"cgpa":cgpa}
        console.log(data)
    }
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(a)=>{setName(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">AdmNo</label>
                    <input onChange={(a)=>{setAdmno(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">CGPA</label>
                    <input onChange={(a)=>{setCgpa(a.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={addStud} className="btn btn-success">REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AddStudent