import React,{useContext,useState} from 'react';
import { RiMovie2Line } from 'react-icons/ri'
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom'

import './Navbar.css'
import { MovieContext } from '../Context/MainContext'

function Login() {

    const { login,setLogin,updateLoginDetails } = useContext(MovieContext)
    const navigate = useNavigate()

    const handleUsername = (e) => {
        setLogin({...login, username : e.target.value})
    }
    const handlePassword = (e) => {
        setLogin({...login, password : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login)
        updateLoginDetails(login.username,login.password)
        if(login.success){
            navigate('/',{replace:true})
        }
    }

    return (
        <>
            <div className="row container-fluid">
                <div className="signupForm col-lg-6 col-md-6">
                    <form className='signupFormContainer'>
                        <h3 className='formHeader'>Welcome to<br/>
                            <IconContext.Provider value={{className:"movieIcon"}}>
                                <RiMovie2Line/>  
                            </IconContext.Provider>
                            <strong>Movies</strong>
                        </h3>
                        <div className="col">
                            <label for="" className="form-label">Enter Username</label>
                            <input type="text" name='username' value={login.username} onChange = {(e) => handleUsername(e)}
                            className="form-control" id="" aria-describedby="emailHelp"/>
                        </div>
                        <div className="col">
                            <label for="exampleInputPassword1" className="form-label">Enter Password</label>
                            <input type="password" name='password' value={login.password} onChange = {(e) => handlePassword(e)}
                            className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <button type="submit" onClick = {handleSubmit} 
                        className="btn btn-primary submitSignup">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;