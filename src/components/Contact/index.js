import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { validateEmail } from '../../utils/helpers'



function Contact(){
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({
         name: '',
         email: '',
         message: '' 
        });

    const { name, email, message } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
              setErrorMessage('Your email is invalid.');
            } else {
              setErrorMessage('');
            }
          } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          console.log('errorMessage', errorMessage);
    }
      
    // console.log(formState);

    function handleBlur(e) {
        e.preventDefault()
        // console.log(e.target.value, '=====')
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <Container>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div class="input-group mb-3">
                    <input 
                    name="name" 
                    defaultValue={name}
                    onBlur={handleChange} 
                    type="text" 
                    className="form-control" 
                    placeholder="Name" 
                    aria-label="Name" 
                    aria-describedby="basic-addon1"/>
                    <span className="input-group-text" id="basic-addon1">Name</span>
                </div>

                <div class="input-group mb-3">
                    <input 
                    name="email" 
                    defaultValue={email} 
                    onBlur={handleChange} 
                    type="text" 
                    className="form-control" 
                    placeholder="You@email.com" 
                    aria-label="Recipient's username" 
                    aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>

                <div class="input-group">
                    <textarea 
                    name="message" 
                    defaultValue={message} 
                    onBlur={handleChange}
                    className="form-control" 
                    aria-label="With textarea"> 
                    </textarea>
                    <span className="input-group-text">Let me know how I can help you</span>
                </div>
                {errorMessage && (
                <div>
                <p className="error-text">{errorMessage}</p>
                </div>
                )}
                <button type="submit">Submit</button>
            </form>

        </Container>
    )
}

export default Contact;