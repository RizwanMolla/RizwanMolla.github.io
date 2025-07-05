import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                if (sectionTop <= 100) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="glass">
            <div className="burger-menu" id="burger-menu" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className={`nav-links ${isOpen ? 'active' : ''}`} id="nav-links">
                <ul>
                    <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</a></li>
                    <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About</a></li>
                    <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsOpen(false)}>Skills</a></li>
                    <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsOpen(false)}>Projects</a></li>
                    <li><a href="#achievements" className={activeSection === 'achievements' ? 'active' : ''} onClick={() => setIsOpen(false)}>Achievements</a></li>
                    <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;