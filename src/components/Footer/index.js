import React from 'react';

function Footer(){
    return(
        <footer className='text-center bg-secondary bg-opacity-75'>
            <h2 className="text-centerr">Made By John Pacini</h2>
            <a href='https://github.com/JohnPac15'><i className="p-2 bi bi-github"></i></a>
            <a href='https://www.linkedin.com/in/john-pacini-b2579b219/'><i className="p-2 bi bi-linkedin"></i></a>
            <a href='https://github.com/JohnPac15'><i className="p-2 bi bi-instagram"></i></a>
            <div>
                <a href="./privacy-policy.html">Read our Privacy Policy</a><br />
                &copy; Pacini Insurance, Inc.
            </div>
        </footer>
    )
}

export default Footer;