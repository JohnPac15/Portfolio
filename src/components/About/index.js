import React from 'react';
import John from '../../assets/img/John.JPG'

function About(){
    return(
        <div id='about'>
            <h1 className="text-center">JOHN PACINI</h1>
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col-sm-3">
                    <img src={John} className="img-fluid"/>
                    </div>
                    <div class="col col-sm-6">
                    <p>
                        Hello, My name is John Pacini. I'm an entry-level full-stack web-developer. 
                        I enjoy learning new skills and pushing those skills to the test. 
                        I am nearing completion of a Coding Boot Camp, and this Boot Camp has forced me outside my comfort zone. 
                        I knew nothing six months ago about coding, and I am very proud and impressed with what I have learned in such a short time.
                        On the journey, I have added plenty of new tools to my toolbelt, and have found certain areas of coding I enjoy the most. 
                        I currently own my own business "Pacini Insurance Agency." 
                        I fully intend on using my new skills to bring my Agency into the future and build jaw-dropping websites to attract new business. 
                        I also plan to work as a freelancer after this Boot Camp. To offer my services as a web developer, to all my referral partners. 
                        Manly to build my business, but also can stay fresh on my coding skills. 
                        I'm so very thankful to have learned the skill of coding in multiple languages, and hope to use the skill to grow my business in ways I couldn't have done before.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;