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
                        <a href="https://www.geeksforgeeks.org/user/rizwanmolla/" className="achievement-link">View Profile</a>
                    </div>
                    <div className="achievement-item glass fade-in">
                        <h3>DSA Proficiency (LeetCode)</h3>
                        <p>Conquered 250+ Data Structures & Algorithms challenges.</p>
                        <a href="https://leetcode.com/u/rizwan_molla/" className="achievement-link">View Profile</a>
                    </div>
                    <div className="achievement-item glass fade-in">
                        <h3>Codecademy Certifications</h3>
                        <p>Completed 12+ courses in Web Development, Python, and AI.</p>
                        <a href="https://www.codecademy.com/profiles/MD_RIZWAN_MOLLA" className="achievement-link">View Certs</a>
                    </div>
                    <div className="achievement-item glass fade-in">
                        <h3>100 Days of DSA Challenge</h3>
                        <p>Successfully completed the rigorous 100-day DSA challenge.</p>
                        <a href="https://x.com/MdRizwanMolla/status/1881946448725688750" className="achievement-link">View Post</a>
                    </div>
                    <div className="achievement-item glass fade-in">
                        <h3>GfG 160 Days Problem Solving</h3>
                        <p>Achieved completion of the GfG 160-day problem-solving streak.</p>
                        <a href="https://www.linkedin.com/posts/rizwan-molla_im-happy-to-share-that-ive-obtained-a-new-activity-7323579697672400897-1G5D/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADZyDYwB2kFmkp08oELQQRA0S5zcDkHB60Q" className="achievement-link">View Post</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;

