import React from 'react';
import useForm from "react-hook-form";


const Contact = () => {
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = data => { reset()}

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
            <form name="contact" onSubmit={handleSubmit(onSubmit)} method="POST" className="contact-form column-right" noValidate>
                <div>
                <label className="form-label" htmlFor="user_name">NAME</label>
                <input className="form-control" name="name" id="user_name" placeholder="Name" ref={register({ required: true, minLength: 2, maxLength: 100 })} required></input>
                {errors.name && errors.name.type === "required" && (
                <span className="text-danger">Your Name is required</span>
              )}
              {errors.name && errors.name.type === "minLength" && (
                <span className="text-danger">
                  Your Name Must Be Longer than 2 Characters
                </span>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <span className="text-danger">
                  Your First Name Can Not Be Longer Than 100 Characters
                </span>
              )}
              </div>
                
                <div>
                <label className="form-label mt-3" htmlFor="user_email">EMAIL</label>
                <input className="form-control" name="email" id="user_email" type="email" placeholder="E-mail" ref={register({
                required: true,
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                minlength: 5,
                maxLength: 100
              })} required></input>
                {errors.email && errors.email.type === "required" && (
              <span className="text-danger">Your E-mail is required</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span className="text-danger">
                Please Enter a Valid E-mail address
              </span>
            )}
            {errors.email && errors.email.type === "minLength" && (
              <span className="text-danger">
                Email Must Be at Least 5 Characters
              </span>
            )}
            {errors.email && errors.email.type === "maxLength" && (
              <span className="text-danger">
                Email Can Not be Longer than 100 Characters
              </span>
            )}
            </div>

                <div>
                <label className="form-label mt-3" htmlFor="user_message">MESSAGE</label>
                <textarea className="form-control" name="message" id="user_message" type="text" placeholder="Message" ref={register({ required: true, minLength: 5, maxLength: 255 })} required></textarea>
                {errors.message && errors.message.type === "required" && (
              <span className="text-danger">A Message is Required</span>
            )}
            {errors.message && errors.message.type === "minLength" && (
              <span className="text-danger">
                Your Message Must Be At Least 5 Characters
              </span>
            )}
            {errors.message && errors.message.type === "maxLength" && (
              <span className="text-danger">
                Your Message Can Not Be Longer than 255 Characters
              </span>
            )}
            </div>

                <input type="hidden" name="form-name" value="contact" />

                <input className="btn btn-light mt-3" type="submit" value="SEND" />
            </form>
            </div>
            </div>
        </div>
    )
};

export default Contact;