import React from 'react';
//import ReactPlayer from 'react-player';


import '../styles/home.css';

const Home = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../images/Nebiyu-Kifle-resume.pdf';
        link.download = 'Nebiyu-Kifle-resume.pdf';
        link.click();
    };

    return (
        <div className="section home-section" >
            <div className="content">
                <h1 className="welcome-text">Welcome to My Portfolio</h1>
                <h1 className="name">I am Nebiyu Kifle</h1>
                <h3 className="role">Software/SharePont Developer</h3>
                <p className="description">
                    Software/SharePoint Developer with a passion for creating user-friendly digital content and features to promote transit programs and services.     
                    Excels in translating marketing strategies and brand management objectives into effective digital solutions. Seeking a challenging role to leverage proficiency 
                    in front-end and back-end web development technologies and contribute to Metro's digital initiatives.
                </p>
                <div className="download-section">
                    <button className="button download-btn" onClick={handleDownload}>
                        <h2>Download Resume</h2>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;