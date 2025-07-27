import React, { useEffect } from 'react';

const Projects = () => {
    useEffect(() => {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });
    }, []);

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="fade-in">Featured Projects</h2>
                
                <div className="projects-grid">

                    <div className="project-card glass fade-in">
                        <div className="project-image"><img src="/StudyForge.png" alt="StudyForge Project" /></div>
                        <div className="project-info">
                            <h3>StudyForge</h3>
                            <p>
                                All-in-one AI-powered study assistant with note-taking, Pomodoro timer, to-do lists, and analytics. Built with Next.js, React, and Genkit.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Next.js</span>
                                <span className="tag">React</span>
                                <span className="tag">TailwindCSS</span>
                                <span className="tag">ShadCN UI</span>
                                <span className="tag">Genkit</span>
                                <span className="tag">Google AI</span>
                                <span className="tag">MongoDB</span>
                                <span className="tag">JWT</span>
                            </div>
                            <div className="project-buttons">
                                <a href="https://github.com/RizwanMolla/StudyForge" className="cta-button project-button">Repo</a>
                                <a href="https://studyforge-rm.vercel.app/" className="cta-button project-button">Live</a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-card glass fade-in">
                        <div className="project-image"><img src="/EduLearn.png" alt="EduLearn Project" /></div>
                        <div className="project-info">
                            <h3>EduLearn</h3>
                            <p>Designed and built a clean EdTech platform interface. Implemented responsive layout, course listing, and user-friendly navigation.</p>
                            <div className="project-tags">
                                <span className="tag">React</span>
                                <span className="tag">Node.js</span>
                                <span className="tag">TailwindCSS</span>
                                <span className="tag">DaisyUI</span>
                            </div>
                            <div className="project-buttons">
                                <a href="https://github.com/RizwanMolla/EduLearn-EdTech_Project" className="cta-button project-button">Repo</a>
                                <a href="https://edu-learn-ed-tech-project.vercel.app/" className="cta-button project-button">Live</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card glass fade-in">
                        <div className="project-image"><img src="/ReportnRepair.png" alt="ReportNRepair Project" /></div>
                        <div className="project-info">
                            <h3>ReportNRepair</h3>
                            <p>Developed a full-stack civic issue reporting app, led frontend with React.js, Tailwind CSS, DaisyUI. Implemented responsive UI, protected routes, and interactivity.</p>
                            <div className="project-tags">
                                <span className="tag">React</span>
                                <span className="tag">TailwindCSS</span>
                                <span className="tag">DaisyUI</span>
                            </div>
                            <div className="project-buttons">
                                <a href="https://github.com/Team-Web-Weavers/ReportNRepair" className="cta-button project-button">Repo</a>
                                <a href="https://report-n-repair.vercel.app/" className="cta-button project-button">Live</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card glass fade-in">
                        <div className="project-image"><img src="/AimTrainer.png" alt="TaskFlow Project" /></div>
                        <div className="project-info">
                            <h3>AimTrainer</h3>
                            <p>Built a real-time aim trainer game with difficulty levels and time-based scoring using event-driven programming and optimized game loops for smooth performance.</p>
                            <div className="project-tags">
                                <span className="tag">Python</span>
                                <span className="tag">PyGame</span>
                            </div>
                            <div className="project-buttons">
                                <a href="https://github.com/RizwanMolla/AimTrainer" className="cta-button project-button">Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;