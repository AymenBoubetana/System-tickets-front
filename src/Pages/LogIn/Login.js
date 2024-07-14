
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faKey, faEye, faEyeSlash, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import './Login.css'
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [form_name, setFormname] = useState('login');
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };




	const handleOnChange = e => {
		const { name, value } = e.target;

		switch (name) {
			case "email":
				setEmail(value);
				break;

			case "password":
				setPassword(value);
				break;

			default:
				break;
		}
	};

	const handleOnSubmit = async e => {
		e.preventDefault();

		if (!email || !password) {
			return alert("Remplir les informations necessaires!");
		}
    console.log(email,password)
  }

  const handleresetOnSubmit = async e => {
		e.preventDefault();

		if (!email) {
			return alert("Remplir les informations necessaires!");
		}
    console.log(email)
  }

  const formSwitcher = (type)=>{
    setFormname(type)

  }

  return (
    <div className="overlay">
      {form_name==='login' &&  
      <form onSubmit={handleOnSubmit} className='formLogin'>
        <div className="con">
          <header className="headForm">
            <h2>Log In</h2>
            <p>login des employes pour reclamer</p>
          </header>
          <br />
          <div className="field-set">
            <span className="input-item">
              <FontAwesomeIcon icon={faUserCircle} />
            </span>
            <input
              className="form-input"
              id="txt-input"
              type="text"
              placeholder="@UserName"
              name="email"
              value={email}
              onChange={handleOnChange}
              required
            />
            <br />
            <span className="input-item">
              <FontAwesomeIcon icon={faKey} />
            </span>
            <input
              className="form-input"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              id="pwd"
              name="password"
              value={password}
              onChange={handleOnChange}
              required
            />
            <span>
              <FontAwesomeIcon
                icon={!showPassword ? faEyeSlash : faEye}
                aria-hidden="true"
                type="button"
                id="eye"
                onClick={handleShowPassword}
              />
            </span>
            <br />
            <button type="submit" className="btn log-in" id='logg'>Log In</button>
          </div>
          <div className="other">
            <button type="button" className="btn submits frgt-pass" id='pass_fr' onClick={()=>formSwitcher('reset')}>Forgot Password</button>
            <button type="button" className="btn submits sign-up" id='sign-up'>Sign Up
              <FontAwesomeIcon icon={faUserPlus} aria-hidden="true" />
            </button>
          </div>
        </div>
      </form>
}


{form_name==='reset' &&  
      <form onSubmit={handleresetOnSubmit}>
        <div className="con">
          <header className="head-form">
            <h2>Reset Password</h2>
            <p>Veuillez entrer l'email</p>
          </header>
          <br />
          <div className="field-set">
            <span className="input-item">
              <FontAwesomeIcon icon={faUserCircle} />
            </span>
            <input
              className="form-input"
              id="txt-input"
              type="text"
              placeholder="@UserName"
              name="email"
              value={email}
              onChange={handleOnChange}
              required
            />
            <br />
      
            <br />
            <button type="submit" className="log-in" id='logg'>Reset password</button>
          </div>
          <div className="other">
            <button type="button" className="btn submits frgt-pass" id='pass_fr' onClick={()=>formSwitcher('login')}>Log In Now</button>
            <button type="button" className="btn submits sign-up" id='sign-up'>Sign Up
              <FontAwesomeIcon icon={faUserPlus} aria-hidden="true" />
            </button>
          </div>
        </div>
      </form>
}
    </div>
  )
}


export default Login