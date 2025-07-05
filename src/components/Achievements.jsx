import React from 'react';

const Achievements = () => {
    return (
        <section id="achievements" className="achievements">
            <div className="container">
                <h2 className="fade-in">Achievements</h2>
                <div className="achievements-grid">
                    <div className="achievement-item glass fade-in">
                        <h3>DSA Mastery (GeeksforGeeks)</h3>
                        <p>Solved 400+ Data Structures & Algorithms problems.</p>
                        <a href="#" className="achievement-link">View Profile</a>
                    </div>
                    <div className="achievement-item glass fade-in">
                        <h3>DSA Proficiency (LeetCode)</h3>
                        <p>Conquered 250+ Data Structures & Algorithms challenges.</p>
                        <a href="#" className="achievement-link">View Profile</a>
                    </div>
                    <div className="achievement-item glass fade-in">
                        <h3>Codecademy Certifications</h3>
                        <p>Completed 12+ courses in Web Development, Python, and AI.</p>
                        <a href="#" className="achievement-link">View Certs</a>
                    </div>
                    <div className="achievement-item glass fade-in">
                        <h3>100 Days of DSA Challenge</h3>
                        <p>Successfully completed the rigorous 100-day DSA challenge.</p>
                        <a href="#" className="achievement-link">View Post</a>
                    </div>
                    <div className="achievement-item glass fade-in">
                        <h3>GfG 160 Days Problem Solving</h3>
                        <p>Achieved completion of the GfG 160-day problem-solving streak.</p>
                        <a href="#" className="achievement-link">View Post</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;

