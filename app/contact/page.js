"use client";
import { useEffect, useRef, useState } from "react";
import Toast from "@/components/alert/Alert";
import "./form.css";


export default function page() {
  const initState = {
    "name": "",
    "email": "",
    "subject": "",
    "message": "",
  }
  const [toasts, setToasts] = useState([]);
  const [isWaiting, setWaiting] = useState(false)
  const [formData, setFormData] = useState(
    (typeof window !== "undefined") && (JSON.parse(localStorage.getItem("formData")) ?? initState)
  )


  function newToast(type, message) {
    setToasts(old => [...old, <Toast key={old.length} id={old.length} type={type} message={message} />])
  }

  function valueHandler(e) {
    const { name, value:newValue } = e.target;
    setFormData(old => ({...old, [name]: newValue}));
  }

  
  useEffect(function() {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData])


  async function submitHandler(e) {
    e.preventDefault();
    setWaiting(true)
    const res = await fetch('/api/contact/', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(formData)
    })

    setWaiting(false)
    if (!res.ok) {
      return newToast("failed", "Opps, mail failed to sent !")
    }
    const data = await res.json();
    return newToast("success", "Congrats, mail has sent")
  }

  
  return (
    <>
      <div className='alerts grid gap-2 fixed top-0 left-0'>
        {
          toasts
        }
      </div>
      {/* May some one would change the disabled from the console.. its ok BUT what isn't ok: keeping the functionality working (active) */}
      <form className="contact-form grid gap-4 max-w-7xl px-4 md:px-6 py-12 rounded-md" onSubmit={(e) => isWaiting ? e.preventDefault() : submitHandler(e)}>
          <label>
            <span>Name <span>(required)</span></span>
            <input required
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={valueHandler}
            />
          </label>
          <label>
            <span>Email <span>(required)</span></span>
            <input required
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={valueHandler}
            />
          </label>
          <label>
            <span>Subject <span>(required)</span></span>
            <input required
              name="subject" 
              value={formData.subject} 
              onChange={valueHandler}
            />
          </label>
          <label>
            <span>Message <span>(required)</span></span>
            <textarea required
              name="message"
              defaultValue={formData.message}
              onChange={valueHandler}
              rows={5}
            > 
            </textarea>
          </label>
          <button className='btn-primary w-full' disabled={isWaiting} >{isWaiting ? "Loading..." : "Submit"}</button>
      </form>
    </>
  )
}
