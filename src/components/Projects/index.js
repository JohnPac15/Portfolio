import React from 'react'
import PIA from '../../assets/img/PIA.png'
import Tech from '../../assets/img/tech-blog.png'
import Pizza from '../../assets/img/Pizza.png'
import Note from '../../assets/img/Note.png'
import Bank from '../../assets/img/Bank.png'
import Snap from '../../assets/img/Snapshot.png'
import Babble from '../../assets/img/Babble.png'

function Projects(){
    return(

                <div className="row justify-content-center ">
                    <div className="col-sm-3 border m-1">
                        <div className="card-header">PIA Website
                        </div>
                        <div className="card" >
                        <img src={PIA} className="card-img-top img-fluid p-1" alt="PIA"/>
                        <div className="d-grid gap-2">
                            <a href="https://pacini-insurance.herokuapp.com" target="_blank" className="btn btn-primary mb-1">Deployed Site</a>
                            <a href="https://github.com/JohnPac15/PIA-website" target="_blank"  className="btn btn-primary">Github</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3 border m-1">
                        <div className="card-header">Tech Blog
                        </div>
                        <div className="card" >
                        <img src={Tech} class="card-img-top img-fluid p-1" alt="tech blog"/>
                        <div className="d-grid gap-2">
                            <a href="https://evening-forest-43704.herokuapp.com" target="_blank" className="btn btn-primary mb-1">Deployed Site</a>
                            <a href="https://github.com/JohnPac15/tech_blog" target="_blank" className="btn btn-primary">Github</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3 border m-1">
                        <div className="card-header">Pizza Hunt
                        </div>
                        <div className="card" >
                        <img src={Pizza} className="card-img-top img-fluid p-1" alt="Pizza"/>
                        <div className="d-grid gap-2">
                            <a href="https://mighty-mountain-45097.herokuapp.com/add-pizza" target="_blank" className="btn btn-primary mb-1">Deployed Site</a>
                            <a href="https://github.com/JohnPac15/pizza-hunt" target="_blank" className="btn btn-primary">Github</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3 border m-1">
                        <div className="card-header">Note Taker
                        </div>
                        <div className="card" >
                        <img src={Note} className="card-img-top img-fluid p-1" alt="Note"/>
                        <div className="d-grid gap-2">
                            <a href="https://mysterious-shelf-12036.herokuapp.com" target="_blank" className="btn btn-primary mb-1">Deployed Site</a>
                            <a href="https://github.com/JohnPac15/note-taker" target="_blank" className="btn btn-primary">Github</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3 border m-1">
                        <div className="card-header">Bank Roll
                        </div>
                        <div className="card" >
                        <img src={Bank} className="card-img-top img-fluid p-1" alt="bank roll"/>
                        <div className="d-grid gap-2">
                            <a href="https://protected-meadow-37903.herokuapp.com" target="_blank" className="btn btn-primary mb-1">Deployed Site</a>
                            <a href="https://github.com/JohnPac15/Bank-Roll" target="_blank" className="btn btn-primary">Github</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3 border m-1">
                        <div className="card-header">Snap-Shot
                        </div>
                        <div className="card" >
                        <img src={Snap} class="card-img-top img-fluid p-1" alt="Snapshot"/>
                        <div className="d-grid gap-2">
                            <a href="https://johnpac15.github.io/photo-port/" target="_blank" className="btn btn-primary mb-1">Deployed Site</a>
                            <a href="https://github.com/JohnPac15/photo-port" target="_blank" className="btn btn-primary">Github</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-3 border m-1">
                        <div className="card-header">Babble-app
                        </div>
                        <div className="card" >
                        <img src={Babble} class="card-img-top img-fluid p-1" alt="Snapshot"/>
                        <div className="d-grid gap-2">
                            <a href="https://gentle-retreat-43606.herokuapp.com" target="_blank" className="btn btn-primary mb-1">Deployed Site</a>
                            <a href="https://gentle-retreat-43606.herokuapp.com" target="_blank" className="btn btn-primary">Github</a>
                        </div>
                        </div>
                    </div>
                </div>
    )
}

export default Projects;