import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                    <li><Link to="/" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsOpen(false)}>About</Link></li>
                    <li><Link to="/skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsOpen(false)}>Skills</Link></li>
                    <li><Link to="/projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsOpen(false)}>Projects</Link></li>
                    <li><Link to="/achievements" className={activeSection === 'achievements' ? 'active' : ''} onClick={() => setIsOpen(false)}>Achievements</Link></li>
                    <li><Link to="/contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;