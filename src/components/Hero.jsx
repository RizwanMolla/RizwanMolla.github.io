import React, { useEffect } from 'react';

const Hero = () => {
useEffect(() => {
    const subtitle = document.querySelector('.hero p');
    const text = "Full Stack Developer";
    subtitle.textContent = '';

    let i = 0;
    let timeoutId;

    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            timeoutId = setTimeout(typeWriter, 50);
        }
    }

    const startTimeout = setTimeout(typeWriter, 1000);

    return () => {
        clearTimeout(timeoutId);
        clearTimeout(startTimeout);
    };
}, []);


    return (
        <section id="home" className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1>Md Rizwan Molla</h1>
                    <p></p>
                    <a href="#projects" className="cta-button">View My Work</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;