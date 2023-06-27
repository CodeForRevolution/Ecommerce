import React from 'react'
import styles from './signup.module.css'

const signup = () => {
  return (
    <div className='signup_main'>
    <h3>this is signup</h3>
    <form action="" className={styles.form_singup}>
     <div className={styles.fields}><span>Name</span><input type="text"/></div>
     <div className={styles.fields}><span>Email</span><input type="text"/></div>
     <div className={styles.fields}><span>Password</span><input type="text"/></div>
     <div className={styles.fields}><span>Conf-password</span><input type="text"/></div>
     <button>REGESTER</button>
    </form>
    </div>
  )
}

export default signup
