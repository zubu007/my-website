import React from 'react'
import Footer from '../Footer/Footer'
import {FaGithub, FaReact, FaNodeJs, FaPython} from 'react-icons/fa'
import {SiTensorflow,SiTableau, SiKeras, SiVisualstudiocode, SiCodechef, SiMysql, SiFirebase, SiJavascript} from 'react-icons/si'
import {DiIllustrator, DiDjango} from 'react-icons/di'
import {RiFileExcel2Fill, RiFileWord2Fill} from 'react-icons/ri'
import './About.css'

function About() {
    return (
        <> 
            <div className='main-container-about'>
                <div className="content">
                    <div className="content-label">
                        <h1>About</h1>
                    </div>
                    <div className="content-text">
                    <h1>Zubayer Hossain</h1>
                    <h4>Likes Pokemons, Pizzas and good Puzzles</h4>
                    <p>I am a result oriented individual whose primary target is problem solving. Ispecialize in Python and deep learning. Using tools such as Tensorflow andKeras, I experiment in making Deep learning AI models. I am very competitivewhen it comes to learning new technology.</p>
                    <p>Hi, how are you all?</p>
                    </div>
                </div>
                
                <div className="content">
                    <div className="content-label">
                        <h1>Experience</h1>
                    </div>
                    <div className="content-text">
                    <h1>Work History</h1>
                    <h4>Jahangirartist.com || Web Developer/Database Manager</h4>
                    <h4>Mar 2019 - Apr 2020</h4>
                    <ul>
                        <li>Developed www.jahangirartist.com using Wordpress.</li>
                        <li>Implemented back-end database with WooCommerce.</li>
                        <li>Managed change in products/ counts/ prices.</li>
                        <li>Found information in data about demand and counseled prices accordingly.</li>
                    </ul>
                    <h4>Mentors' Banani || IELTS Instructor</h4>
                    <h4>Jan 2018 - Dec 2018</h4>
                    <ul>
                        <li>IELTS English instructor.</li>
                        <li>Speaking test coordinator.</li>
                        <li>Managed change in products/ counts/ prices.</li>
                        <li>Model Question paper Examiner</li>
                    </ul>
                
                    <h4>Orange Educational Institution, Gulshan 1 || Student Counselor and Teacher's Assistant</h4>
                    <h4>Dec 2016 - Oct 2017</h4>
                    <ul>
                        <li>Checking Mock Exam Scripts.</li>
                        <li>Assisting in O level Mathematics classes.</li>
                    </ul>
                    </div>   
                </div>
                <div className="content">
                    <div className="content-label">
                        <h1>Awards</h1>
                    </div>
                    <div className="content-text">
                    <h1>Achievements / Certifications</h1>
                    <h4>Verilog HDL: VLSI Hardware Design Comprehensive Masterclass Course on Udemy || 2021</h4>
                    <h4>Verilog HDL programming with practical approach Course on Udemy || 2021</h4>
                    <h4>Daily Star Awards || 2015</h4>
                    <h4>Edexcel Awards || 2015</h4>
                    <h4>Hack NSU Hackathon || 2018</h4>
                    <h4>BYLC Youth Entrepreneurship bootcamp || 2019</h4>
                    <h4>Basic Japanese Language course || 2017</h4>
                    
                    </div>   
                </div>
                <div className="content">
                    <div className="content-label">
                        <h1>Skills</h1>
                    </div>
                    <div className="content-text">
                    <h1>Technical skills</h1>
                    <FaGithub className="icons"/>
                    <SiTensorflow className="icons"/>
                    <SiKeras className='icons'/>
                    <DiIllustrator className='icons'/>
                    <FaReact className='icons'/>
                    <RiFileExcel2Fill className='icons'/>
                    <FaNodeJs className='icons'/>
                    <DiDjango className='icons'/>
                    <SiJavascript className='icons'/>
                    <br></br>
                    <RiFileWord2Fill className='icons'/>
                    <SiVisualstudiocode className='icons'/>
                    <SiCodechef className='icons'/>
                    <FaPython className='icons'/>
                    <SiMysql className='icons'/>
                    <SiTableau className='icons'/>
                    <SiFirebase className='icons'/>
                    </div>   
                </div>
                <div className="content">
                    <div className="content-label">
                        <h1>Education</h1>
                    </div>
                    <div className="content-text">
                    <h1>Schooling</h1>
                    <h4>North South University || Bachelor's of Science EEE</h4>
                    <p>CGPA: 3.12 (78%)</p>
                    <p>List of important courses</p>
                    <ul>
                        <li>VLSI</li>
                        <li>Partern Recognition using Neural Networks</li>
                        <li>Control Engineering</li>
                        <li>Verilog</li>
                        <li>Semiconductor Devices</li>
                    </ul>
                    <h4>Islamic International School and College || O levels/ A levels</h4>
                    <p>A level results || GPA: 4.5</p>
                    <ul>
                        <li>Physics: B</li>
                        <li>Mathematics: A</li>
                    </ul>
                    <p>O level results || GPA: 5.0</p>
                    <ul>
                        <li>English: A</li>
                        <li>Physics: A*</li>
                        <li>Chemistry: A*</li>
                        <li>Biology: A*</li>
                        <li>Bangla: A</li>
                        <li>Mathematics: A*</li>
                        <li>Further Pure Mathermatics: A*</li>
                    </ul>

                    </div>
                </div>
                

            </div>
            <Footer /> 
        </>
    )
}

export default About
