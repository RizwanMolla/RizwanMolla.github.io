import React from 'react';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-text fade-in">
                        <h2>About Me</h2>
                        <p>As a detail-oriented Full Stack Developer completing my Bachelor's in Computer Applications, I specialize in building robust and scalable web applications with the MERN stack. My passion extends beyond web development into the practical applications of Artificial Intelligence and Machine Learning.</p>
                        <p>I am driven by the challenge of solving complex problems and thrive in collaborative environments that create impactful, real-world solutions.</p>
                    </div>
                    <div className="about-image fade-in">
                        <img src="/rizwan.png" alt="Md Rizwan Molla" className="profile-img" />
                    </div>                
                </div>
            </div>
        </section>
    );
};

export default About;