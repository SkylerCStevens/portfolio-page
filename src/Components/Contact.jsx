import React from 'react';

const Contact = () => {
    return (
        <div className="contact" id="contact">
            <h2 className="page-header">Contact Me</h2>
            <form>
                <label>Name:</label>
                <input placeholder="Name"></input>
                
                <label>Email</label>
                <input type="email"></input>

                <label>Message</label>
                <input type="text"></input>
            </form>
        </div>
    )
};

export default Contact;