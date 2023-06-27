import React, { useState } from 'react'
import Sign from './page/sign'
import Signup from './page/signup'
import './login.css'



const Login = () => {

  const [islogin, setIslogin] = useState(true)
  const toggleLog=()=>{
    setIslogin(!islogin)
  }
  return (
    <div className='login_main'>
      <div className="Auth">
        {islogin ? <Sign /> : <Signup />}
      </div>
      <button className='log_btn' onClick={()=>{toggleLog()}} >{islogin ? 'Go to SignUP' :' Go toLogin'}</button>
    </div>
  )
}





export default Login
