import "../Contact/Contact.css"
const Contact = () => {
    return ( 
       <div>
    <div>
        <ul>
            <h3>SOCIAL MEDIA</h3>
            <li>Whatsapp:+1 (555) 123-4567</li>
            <li>Facebook:amazon123</li>
            <li>Instagram:_amazon_</li>
            <li>Twitter:amazon</li>

        </ul>
    </div>
        <div className="form-label">
          <input className="input input-element" name="Name" placeholder="Name"/>
          <input className="input input-element" name="Email" placeholder="Email"/>
          <textarea className="textinput input-element" placeholder="Message"></textarea>
          <button className="button">
            Send
          </button>
        </div>

   
        </div>
    
    
     );
}
 
export default Contact;
