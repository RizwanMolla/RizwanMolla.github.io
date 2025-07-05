import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container fade-in">
                <h2>Inquiries & Collaborations</h2>
                <p>I am currently available for new opportunities and collaborations. If you have a project in mind or would simply like to connect, please feel free to reach out.</p>
                
                <div className="contact-links">
                    <a href="https://linkedin.com/in/rizwan-molla" className="contact-link glass">
                        <span className="contact-icon"><i className="devicon-linkedin-plain"></i></span>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/RizwanMolla" className="contact-link glass">
                        <span className="contact-icon"><i className="devicon-github-original"></i></span>
                        <span>GitHub</span>
                    </a>
                    <a href="https://twitter.com/MdRizwanMolla" className="contact-link glass">
                        <span className="contact-icon"><i className="devicon-twitter-original"></i></span>
                        <span>Twitter</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;