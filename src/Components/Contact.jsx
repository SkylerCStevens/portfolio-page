import React from 'react';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="container">
            <h2 className="page-header">CONTACT ME</h2>
            <div className="contact-content">
            <div className="name-address">
                <span className="contact-name">SKYLER STEVENS</span>
                <address>Charlotte, North Carolina</address>
                <p className="contact-p">Have any questions? Want to work together? Let's talk!</p>
                <a href="https://github.com/SkylerCStevens" target="_blank"><img className="icon github" src="https://cdn4.iconfinder.com/data/icons/liu-square-blac/60/github-square-social-media-512.png" alt="GitHub icon"></img></a>
                <a href="https://www.linkedin.com/in/skyler-stevens-789115195/" target="_blank"><img className="icon" src="https://cdn0.iconfinder.com/data/icons/global-top-brands/430/linkedin-logo-1-512.png" alt="LinkedIn icon"></img></a>
            </div>
            <form name="contact" method="POST" className="contact-form column-right">
                <label className="form-label" for="user_name">NAME</label>
                <input className="form-control" name="name" id="user_name" placeholder="Name" required></input>
                
                <label className="form-label" for="user_email">EMAIL</label>
                <input className="form-control" name="email" id="user_email" type="email" placeholder="E-mail" required></input>

                <label className="form-label" for="user_message">MESSAGE</label>
                <textarea className="form-control" name="message" id="user_message" type="text" placeholder="Message" required></textarea>

                <input type="hidden" name="form-name" value="contact" />

                <button className="btn btn-light mt-2" type="submit" value="submit">SEND</button>
            </form>
            </div>
            </div>
        </div>
    )
};

export default Contact;