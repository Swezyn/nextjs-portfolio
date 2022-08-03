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

    const onFormUpdate = (detail, value) => {
        setFormDetails({
            ...formDetails,
            [detail]: value
        })
    }

  return (
    <div>
      
    </div>
  )
}
