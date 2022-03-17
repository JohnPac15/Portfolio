import React from 'react';
import { Container } from 'react-bootstrap'
import PIA from '../../assets/img/PIA.png'
import Tech from '../../assets/img/tech-blog.png'
import Pizza from '../../assets/img/Pizza.png'
import Note from '../../assets/img/Note.png'
import Bank from '../../assets/img/Bank.png'
import Snap from '../../assets/img/Snapshot.png'

function Projects(){
    return(
        <Container>
        
            <div class="row justify-content-center ">
                <div class="col-sm-3 border m-1">
                    <div class="card-header">PIA Website
                    </div>
                    <div class="card" >
                    <img src={PIA} class="card-img-top img-fluid p-1" alt="PIA"/>
                    <div class="d-grid gap-2">
                        <a href="https://pacini-insurance.herokuapp.com" target="_blank" class="btn btn-primary mb-1">Deployed Site</a>
                        <a href="https://github.com/JohnPac15/PIA-website" target="_blank"  class="btn btn-primary">Github</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3 border m-1">
                    <div class="card-header">Tech Blog
                    </div>
                    <div class="card" >
                    <img src={Tech} class="card-img-top img-fluid p-1" alt="tech blog"/>
                    <div class="d-grid gap-2">
                        <a href="https://evening-forest-43704.herokuapp.com" target="_blank" class="btn btn-primary mb-1">Deployed Site</a>
                        <a href="https://github.com/JohnPac15/tech_blog" target="_blank" class="btn btn-primary">Github</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3 border m-1">
                    <div class="card-header">Pizza Hunt
                    </div>
                    <div class="card" >
                    <img src={Pizza} class="card-img-top img-fluid p-1" alt="Pizza"/>
                    <div class="d-grid gap-2">
                        <a href="https://mighty-mountain-45097.herokuapp.com/add-pizza" target="_blank" class="btn btn-primary mb-1">Deployed Site</a>
                        <a href="https://github.com/JohnPac15/pizza-hunt" target="_blank" class="btn btn-primary">Github</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3 border m-1">
                    <div class="card-header">Note Taker
                    </div>
                    <div class="card" >
                    <img src={Note} class="card-img-top img-fluid p-1" alt="Note"/>
                    <div class="d-grid gap-2">
                        <a href="https://mysterious-shelf-12036.herokuapp.com" target="_blank" class="btn btn-primary mb-1">Deployed Site</a>
                        <a href="https://github.com/JohnPac15/note-taker" target="_blank" class="btn btn-primary">Github</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3 border m-1">
                    <div class="card-header">Bank Roll
                    </div>
                    <div class="card" >
                    <img src={Bank} class="card-img-top img-fluid p-1" alt="bank roll"/>
                    <div class="d-grid gap-2">
                        <a href="https://protected-meadow-37903.herokuapp.com" target="_blank" class="btn btn-primary mb-1">Deployed Site</a>
                        <a href="https://github.com/JohnPac15/Bank-Roll" target="_blank" class="btn btn-primary">Github</a>
                    </div>
                    </div>
                </div>
                <div class="col-sm-3 border m-1">
                    <div class="card-header">Snap-Shot
                    </div>
                    <div class="card" >
                    <img src={Snap} class="card-img-top img-fluid p-1" alt="Snapshot"/>
                    <div class="d-grid gap-2">
                        <a href="https://johnpac15.github.io/photo-port/" target="_blank" class="btn btn-primary mb-1">Deployed Site</a>
                        <a href="https://github.com/JohnPac15/photo-port" target="_blank" class="btn btn-primary">Github</a>
                    </div>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default Projects;