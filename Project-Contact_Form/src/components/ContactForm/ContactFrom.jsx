import { useState } from 'react'
import styles from "./Contact.module.css"
import Button from '../Button/Button'
import {MdMessage} from "react-icons/md"
import {MdCall} from 'react-icons/md'
import {HiMail} from "react-icons/hi"

const ContactFrom = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [text,setText] = useState("");


  const onsumbit = (event) => {

    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    
  }

  const onViacallsumbit = () => {
    console.log("I am from call")
  }

  return (
    <section className={styles.container}>
       <div className={styles.contact_form}>
        <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage />}/>
            <Button 
            text="VIA CALL"
            icon={<MdCall/>}
            onClick={onViacallsumbit}
            />
        </div>
            <Button 
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail/>}/>
        <form onSubmit={onsumbit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text"name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="Text">Text</label>
            <textarea name="name" rows="8" />
          </div>
          <div
           style={{
            display: 'flex',
            justifyContent: "end"}}>
          <Button  isOutline={false} text="SUMBIT BUTTON"/>
         </div>
         <div style={{display:'flex', gap: '20px'}}>
          <div>{name}</div>
          <div>{email}</div>
          <div>{text}</div>         
          </div>
       </form>
      </div> 
      <div className={styles.contact_image}>
      <img src="/Image/contact.svg" alt='contact_img'/>
      </div>  
    </section>
  );
};

export default ContactFrom;