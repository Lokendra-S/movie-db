import React,{useContext} from 'react';
import { RiMovie2Line } from 'react-icons/ri'
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom'

import './Navbar.css'
import { MovieContext } from '../Context/MainContext' 

function Signup() {

    const { signup,setSignup,updateSignupDetails,signBool, setSignBool } = useContext(MovieContext)
    let navigate = useNavigate();

    const handleFirstname = (e) => {
        setSignup({...signup, firstname : e.target.value})
    }
    const handleLastname = (e) => {
        setSignup({...signup, lastname : e.target.value})
    }
    const handleUsername = (e) => {
        setSignup({...signup, username : e.target.value})
    }
    const handlePassword = (e) => {
        setSignup({...signup, password : e.target.value})
    }
    const handleCPassword = (e) => {
        setSignup({...signup, cPassword : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSignBool(!signBool)
        updateSignupDetails(
            signup.firstname,
            signup.lastname,
            signup.username,
            signup.password,
            signup.cPassword
        )
        navigate('/',{ replace:true })
    }

    return (
        <>
            <div className="row container-fluid">
                <div className="signupForm">
                    <form className='signupFormContainer'>
                        <h3 className='formHeader'>Welcome to<br/>
                            <IconContext.Provider value={{className:"movieIcon"}}>
                                <RiMovie2Line/>  
                            </IconContext.Provider>
                            <strong>Movies</strong>
                        </h3>
                        <div className="row">
                            <div className="col">
                                <label for="" className="form-label">Enter First Name</label>
                                <input type="text" value={signup.firstname} onChange = {(e) => handleFirstname(e)}
                                className="form-control" id="" aria-describedby=""/>
                            </div>
                            <div className="col">
                            <label for="" className="form-label">Enter Last Name</label>
                                <input type="text" value={signup.lastname} onChange = {(e) => handleLastname(e)}
                                className="form-control" id="" aria-describedby=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="" className="form-label">Enter Username</label>
                                <input type="text" value={signup.username} onChange = {(e) => handleUsername(e)}
                                className="form-control" id="" aria-describedby=""/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label for="exampleInputPassword1" className="form-label">Enter Password</label>
                                <input type="password" value={signup.password} onChange = {(e) => handlePassword(e)}
                                className="form-control" id=""/>
                            </div>
                            <div className="col">
                            <label for="exampleInputPassword1" className="form-label">Re-enter Password</label>
                                <input type="password" value={signup.cPassword} onChange = {(e) => handleCPassword(e)}
                                className="form-control" id=""/>
                            </div>
                        </div>
                        <button type="submit" onClick={handleSubmit}
                        className="btn btn-primary submitSignup">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup;
