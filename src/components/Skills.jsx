import React, { useEffect } from 'react';

const Skills = () => {
    useEffect(() => {
        const colors = ['--primary', '--secondary', '--accent'];
        document.querySelectorAll('.skill').forEach(skill => {
            skill.addEventListener('mouseenter', function() {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                this.style.borderColor = `var(${randomColor})`;
                this.style.boxShadow = `0 10px 30px var(${randomColor})30`;
            });
            
            skill.addEventListener('mouseleave', function() {
                this.style.borderColor = '';
                this.style.boxShadow = '';
            });
        });
    }, []);

    return (
        <section id="skills" className="skills-section">
            <div className="container skills-text">
                <h2 className="fade-in">My Skills</h2>
                <div className="skill-categories">
                    <div className="skill-category glass fade-in">
                        <h3>Languages</h3>
                        <div className="skills">
                            <div className="skill">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" /><span>JavaScript</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /><span>Python</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" /><span>Java</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" /><span>C++</span></div>
                        </div>
                    </div>
                    <div className="skill-category glass fade-in">
                        <h3>Frontend</h3>
                        <div className="skills">
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" /><span>React</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" /><span>Redux</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" /><span>Angular</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"/><span>Tailwind</span></div>
                        </div>
                    </div>
                    <div className="skill-category glass fade-in">
                        <h3>Backend</h3>
                        <div className="skills">
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" /><span>Node.js</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" /><span>Express</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /><span>Python</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" /><span>Flask</span></div>
                        </div>
                    </div>
                    <div className="skill-category glass fade-in">
                        <h3>Database</h3>
                        <div className="skills">
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" /><span>MongoDB</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" /><span>PostgreSQL</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" /><span>MySQL</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" /><span>Redis</span></div>
                        </div>
                    </div>
                    
                    <div className="skill-category glass fade-in">
                        <h3>Tools</h3>
                        <div className="skills">
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" /><span>Git</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" /><span>GitHub</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" /><span>Postman</span></div>
                            <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg" /><span>Webpack</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;