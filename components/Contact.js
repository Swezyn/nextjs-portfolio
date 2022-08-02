import React, { useState } from 'react'

export default function Contact() {

    const initialFormDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(initialFormDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

  return (
    <div>Contact</div>
  )
}
