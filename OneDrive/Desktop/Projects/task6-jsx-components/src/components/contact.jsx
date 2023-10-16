import styles from "./contact.module.css";
function Contact() {
  return (
    <div className={styles.contact}>
      <h2> Contact US</h2> 
      <label htmlFor="name">Name</label>
      <input type="name" /> <br /> 
      <label htmlFor="email">Email</label>
      <input type="email" /> <br /> 
      <label htmlFor="comments">Comments</label>
      <textarea name="comments" id="comments">
      
      </textarea>
   <br /><br />
      
      <button className={styles.btn}>Submit</button>
    </div>
  );
}

export default Contact;