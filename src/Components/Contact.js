import React, { useState} from 'react'
import axios from 'axios'


const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const submitHandler = async (e) => {
        e.preventDefault()

        const config = {
            header: {
              "Content-Type": "application/json",
            },
          };
      
          try {
      
            const res = await axios.post("https://hngitasktwo.herokuapp.com/api/contact", {name, email, message}, config)
            console.log(res)
            setSuccess(true)
          } catch (error) {
            setError(true)
          }
    }

    setTimeout(() => {
      setSuccess(false)
    }, 4000);

    setTimeout(() => {
      setError(false)
    }, 4000);

    return (
        <>
             <div className='text-center bg-danger text-white mb-5'>
             {error && <span > <h3>  Message not sent, Please try again </h3> </span>}
              </div>

              <div className='text-center bg-success text-white mb-5'>
             {success && <span > <h3>  Message sent successfully! </h3> </span>}
              </div>

        <form  onSubmit={submitHandler}>
          <div className="card p-4  bg-light">
          <h1 className='text-center text-primary'>Contact Form </h1>
          <div className="col-md-6 m-auto">
      <div className="mb-3">
  <label htmlFor="name" className="form-label">Name</label>
  <input type="text" 
  className="form-control" 
  id="name"  
  name="name" 
  required
  onChange={(e) => setName(e.target.value)}/>
  
</div>

<div className="mb-3">
  <label htmlFor="name" className="form-label">Email</label>
  <input type="email" 
  className="form-control" 
  id="email"  
  name="email" 
  required
  onChange={(e) => setEmail(e.target.value)}/>
  
</div>

<div className="mb-3">
  <label htmlFor="age" className="form-label">Message</label>
  <textarea type="text" 
  className="form-control"
   id="age" 
   name="message"
   required
   onChange={(e) => setMessage(e.target.value)}
  />
</div>
</div>
<button className="btn btn-outline-danger">SUBMIT</button>
</div>
</form>
        </>
    )
}

export default Contact
