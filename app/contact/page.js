"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import "./form.css";


export default function page() {

  const initState = {
    "name": "",
    "email": "",
    "subject": "",
    "message": "",
  }
  const [formData, setFormData] = useState(initState)
  

  function valueHandler(e) {
    const { name, value:newValue } = e.target;
    setFormData(old => ({...old, [name]: newValue}));
  }


  async function submitHandler(e) {
    e.preventDefault();
    const res = await fetch('/api/contact/', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(formData),
    });

    const { success } = await res.json();
    console.log(success);
  }

  
  return (
    <form className="contact-form grid gap-4 max-w-7xl px-4 md:px-6 py-12 rounded-md" onSubmit={submitHandler}>
        <label>
          <span>Name <span>(required)</span></span>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={valueHandler}
          />
        </label>
        <label>
          <span>Email <span>(required)</span></span>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={valueHandler}
          />
        </label>
        <label>
          <span>Subject <span>(required)</span></span>
          <input 
            name="subject" 
            value={formData.subject} 
            onChange={valueHandler}
          />
        </label>
        <label>
          <span>Message <span>(required)</span></span>
          <textarea 
            name="message"
            defaultValue={formData.message}
            onChange={valueHandler}
            rows={5}
          > 
          </textarea>
        </label>
        <button className='btn-primary w-full'>Submit</button>
    </form>
  )
}
