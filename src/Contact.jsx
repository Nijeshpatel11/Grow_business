import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',
    });
     
    const fromSubmit = (e) => {
        e.preventDefault();
        alert(`${data.fullname} , Your Form is Submited ` );
    }

    const inputEvent = (event) => {
      const {name, value} = event.target;

         setData((preVal) => {
            return {
                ...preVal,
                [name] : value,
            }
         } )
    }



    return (
        <> 
            <div className='my-5' >
                <h1 className='text-center' > Contact Us </h1>
            </div>
            <div className='container contact_div' >
                <div className='row' >
                    <div className='col-md-6 col-10 mx-auto' >
                        <form onSubmit={fromSubmit} >
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                FullName
                                </label>
                                <input 
                                type="text" 
                                class="form-control" 
                                id="exampleFormControlInput1" 
                              name='fullname'
                              value={data.fullname}
                              onChange={inputEvent}
                                placeholder="Enter your name"
                                 />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                Phone
                                </label>
                                <input 
                                type="number" 
                                class="form-control" 
                                id="exampleFormControlInput1" 
                                name='phone'
                                value={data.phone}
                                onChange={inputEvent}
                                placeholder="mobile number" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">
                                Email address
                                </label>
                                <input 
                                type="email" 
                                class="form-control" 
                                id="exampleFormControlInput1" 
                              name='email'
                              value={data.email}
                              onChange={inputEvent}
                                placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">
                                Message
                                </label>
                                <textarea 
                                class="form-control" 
                                id="exampleFormControlTextarea1" 
                                rows="3"
                                name='msg'
                                value={data.msg}
                                onChange={inputEvent}
                                ></textarea>
                            </div>
                            <button type="submit" class="btn btn-outline-primary">
                            Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Contact;