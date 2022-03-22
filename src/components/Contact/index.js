import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { checkPassword, validateEmail } from '../../utils/helpers';



function Contact(){
    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    function handleChange(e) {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
      
      
      
      if(inputType === 'name'){
        if(inputValue === ''){
          setErrorMessage("Please enter your name");
          return
        }
        setErrorMessage('')
        setName(inputValue)   
      } else if(inputType === 'email'){
        if(!validateEmail(inputValue)){
          setErrorMessage("Please enter your Email");
          return
        } else {
          setErrorMessage('')
          setEmail(inputValue)
        }
      } else {
        if(inputValue === ''){
          setErrorMessage('Please provide a message');
          return
        } else{
          setErrorMessage("")
          setMessage(inputValue)
        }
      }
    }

    const handleSubmit = (e) => {
      console.log('------')
      e.preventDefault();
      
      if (!validateEmail(email) || !name) {
        setErrorMessage('Email or username is invalid');
        return;
      }
      if (!checkPassword(name)) {
        setErrorMessage( "You need a name"
        );
        return;
      }
      
      setName('');
      setEmail('');
      setMessage('')
      alert(`Hello ${name}`);
    };
    
    
    return(
      <Container id='contact-me' className='p-5 justify-content-center'>
          {errorMessage && (
            <div className="alert alert-warning text-center" role="alert">
              <p className="error-text fs-1">{errorMessage}</p>
            </div>
          )}
          
            <form id="contact-form">
                <div className="input-group mb-3">
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

                <div className="input-group mb-3">
                    <input 
                    name="email" 
                    defaultValue={email} 
                    onBlur={handleChange} 
                    type="email" 
                    className="form-control" 
                    placeholder="You@email.com" 
                    aria-label="Recipient's username" 
                    aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>

                <div className="input-group">
                    <textarea 
                    name="message" 
                    defaultValue={message} 
                    onBlur={handleChange}
                    className="form-control" 
                    aria-label="With textarea"> 
                    </textarea>
                    <span className="input-group-text">Let me know how I can help you</span>
                </div>
                <div className="m-2 row align-items-center">
                  <button type="submit" className="btn btn-secondary" onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>

        </Container>
    )
}

export default Contact;