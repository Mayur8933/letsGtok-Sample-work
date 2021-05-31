import React from 'react'
import './css/footer.css'

const Footer = () => {
    return (
        <div>
            <div className='wrapper'>
                <form className='form'>
                    <div className='pageTitle title'>Contact Us</div>
                    <div class="secondaryTitle title">Please fill this form.</div>
                    <input type="text" className="name formEntry" placeholder="Name" />
                    <input type="text" className="email formEntry" placeholder="Email"/>
                    <textarea className="message formEntry" placeholder="Message"></textarea>
                    <button class="submit formEntry" onclick="thanks()">Submit</button>             
                </form>  
            </div>
        </div>
    )
}

export default Footer;