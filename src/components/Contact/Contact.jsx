import React from 'react'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <section id='contact' className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="">
            <div className="formGroup">
                <label htmlFor="name" hidden>Name</label>
                <input type="text" name='name' id='name' placeholder='Nombre' required />
            </div>
            <div className="formGroup">
                <label htmlFor="email" hidden>Email</label>
                <input type="text" name='email' id='email' placeholder='Correo' required />
            </div>
            <div className="formGroup">
                <label htmlFor="message" hidden>Message</label>
                <textarea type="text" name='message' id='message' placeholder='Mensaje' required />
            </div>
            <input type="submit" value="Submit" className='hover btn' />
        </form>
    </section>
  )
}

export default Contact