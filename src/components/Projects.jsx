import React, { useState, useEffect } from 'react';
import './projects.css';

const Projects = () => {
    const [activeProject, setActiveProject] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const projects = [
        {
            id: 0,
            title: "StudyForge",
            description: "AI-powered study platform with smart note-taking, Pomodoro timers, task management, and analytics for enhanced learning productivity.",
            image: "/StudyForge.png",
            tags: ["Next.js", "React", "TailwindCSS", "ShadCN UI", "Genkit", "Google AI", "MongoDB", "JWT"],
            repo: "https://github.com/RizwanMolla/StudyForge",
            live: "https://studyforge-rm.vercel.app/"
        },
        {
            id: 1,
            title: "EduLearn",
            description: "Modern EdTech platform with responsive design, comprehensive course listings, and intuitive navigation for seamless online learning.",
            image: "/EduLearn.png",
            tags: ["React", "Node.js", "TailwindCSS", "DaisyUI"],
            repo: "https://github.com/RizwanMolla/EduLearn-EdTech_Project",
            live: "https://edu-learn-ed-tech-project.vercel.app/"
        },
        {
            id: 2,
            title: "ReportNRepair",
            description: "Full-stack civic app enabling citizens to report local issues with secure authentication and responsive UI for community engagement.",
            image: "/ReportnRepair.png",
            tags: ["React", "TailwindCSS", "DaisyUI", "Authentication"],
            repo: "https://github.com/Team-Web-Weavers/ReportNRepair",
            live: "https://report-n-repair.vercel.app/"
        },
        {
            id: 3,
            title: "AimTrainer",
            description: "Interactive aim training game with multiple difficulty levels, precision scoring, and optimized performance for engaging gameplay.",
            image: "/AimTrainer.png",
            tags: ["Python", "PyGame", "Game Development"],
            repo: "https://github.com/RizwanMolla/AimTrainer",
            live: null
        }
    ];

    const handleCardClick = (index) => {
        setActiveProject(index);
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    // Auto-rotation effect with pause functionality
    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            setActiveProject((prev) => (prev + 1) % projects.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [projects.length, isPaused]);

    const getCardPosition = (index) => {
        if (index === activeProject) {
            return 'active';
        } else if (index === (activeProject - 1 + projects.length) % projects.length) {
            return 'left';
        } else if (index === (activeProject + 1) % projects.length) {
            return 'right';
        } else {
            return 'hidden';
        }
    };

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="fade-in">Featured Projects</h2>
                
                <div className="projects-carousel">
                    <div className="carousel-container">
                        {projects.map((project, index) => (
                            <div 
                                key={project.id}
                                className={`project-card glass carousel-card ${getCardPosition(index)}`}
                                onClick={() => handleCardClick(index)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <div className="project-image">
                                    <img src={project.image} alt={`${project.title} Project`} />
                                </div>
                                <div className="project-info">
                                    <div className="project-content">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <div className="project-tags">
                                            {project.tags.map((tag, tagIndex) => (
                                                <span key={tagIndex} className="tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="project-buttons">
                                        <a 
                                            href={project.repo} 
                                            className="cta-button project-button"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Repo
                                        </a>
                                        {project.live && (
                                            <a 
                                                href={project.live} 
                                                className="cta-button project-button"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Project Indicator */}
                    <div className="project-indicator">
                        <span>{activeProject + 1}/{projects.length}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;