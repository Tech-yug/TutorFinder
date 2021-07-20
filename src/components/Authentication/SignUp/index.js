import React from 'react'
import './SignupElement.css'
import { Link } from 'react-router-dom'
import HomeImg from '../../../assets/home.png';

const SignUp = () => {
    return (
        <div class="main">
        <div class="header"><Link to="/"><img src={HomeImg} alt="Home" class="homeicons"/></Link>SIGN UP</div>
    <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <img src="https://cdn.mytutor.co.uk/images/login/parent-mytutor-274x286.png?1626357870000" alt="parent"/>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                        <h3>I am Parent</h3>
                        <p>Manage payments or lessons for your child</p>
                        <h3>
                            <button>Parent SignUp</button>
                        </h3>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <img src="https://cdn.mytutor.co.uk/images/login/student-mytutor-286x286.png?1626357870000" alt="stuent"/>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>I am Student</h3>
                    <p>Have lessons, message your tutor or watch your lessons back</p>
                    <h3>
                        <button>Student SignUp</button>
                    </h3>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <img src="https://cdn.mytutor.co.uk/images/login/tutor-mytutor-330x286.png?1626357870000" alt="teacher"/>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>I am Teacher</h3>
                    <p>Give lessons or manage bookings with your customers</p>
                    <h3>
                        <button>Teacher SignUp</button>
                    </h3>
                </div>
            </div>
        </div>
    </div>
    <div class="footersignup">
    <h3>I have Already Account! <Link to="/SignInPage" class="btn">LOG IN</Link></h3>
    </div>
    
</div>
 
    )
}

export default SignUp
