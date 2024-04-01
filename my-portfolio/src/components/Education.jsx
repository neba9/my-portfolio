import React from 'react';
import '../styles/education.css';
const Education = () => {
    const relevantCourses = [
        'Advanced Software Engineering',
        'SharePoint developer with Power Apps',
        'Database Administration',
  
    ];

    const projects = [
        {
            name: 'City Explorer api',
            description: [
                'City Explorer gathers restaurants, weather, movies, and hiking trails based on city address the user inputs',
                'Implemented the web services and APIs and collaborated with the front-end team developers',
                'Created user-friendly interfaces that enhanced user satisfaction and engagement.',
            ],
            technologies: ['JavaScript', 'HTML', 'CSS', 'Vs code', 'GitHub', 'Git terminal', 'PostgreSQL', 'API', 'Trello'],
            // repoLink: 'https://bitbucket.org/restaurantws/teamc_hci_repo/src/master/',
        },
        {
            name: 'Attack On Typing | Typing Game Console App Project',
            description: [
                'Attack on Typing game allows the user to practice their typing accuracy and speed.',
                'Gather random words from Faker Data & render the words in different progress levels.',
                'Built with Python, and we used python libraries like Faker, Pyfiglet,colorama',
                'Implemented agile methodologies to enhance team productivity and successfully meet project deadlines.',
            ],
            technologies: ['Python', 'Faker Libraries', 'Pyfiglet', 'colorama', 'Django', 'Git Terminal', 'Trello', 'GitHub', 'repl.it', 'Trello'],
        },
        {
            name: 'Car Rental Approval Project using SharePoint & power Apps',
            description: [
                'Created a SharePoint site with a few clicks and set up a SharePoint list for string data.',
                'Built a power automated flow for authorization process.',
                'Constructed a flow for sending requests to the manager for approval.',
                'Put on a SharePoint calendar for tracking approval requests.',
                'Designed a power automated flow for sending remainders to manager.',
            ],
            technologies: ['SharePoint', 'power Apps'],
        },
    ];

    return (
        <div className="section">
            <h2>Education</h2>
            <EducationItem
                degree="BA degree "
                concentration="Marketing Managment"
                university="Addis Ababa University (AAU)"
                location="Addis Ababa, Ethiopia"
                graduationDate="Aug 2017"
                relevantCourses={relevantCourses}
                projects={projects}
            />
            {/* <EducationItem
                degree="Bachelor of Science in Environmental Health"
                university="Hawassa University"
                location="Hawassa, Ethiopia"
                graduationDate="July 2006"
            /> */}
        </div>
    );
};

const EducationItem = ({ degree, concentration, university, location, graduationDate, relevantCourses, projects }) => {
    return (
        <div className="education-item">
            <h3>{degree}</h3>
            <p>
                {concentration && <span style={{ fontSize: '1.2em' }}>{concentration}, </span>}
                <span style={{ fontSize: '1.2em' }}>{university}, {location}</span>
            </p>
            <p style={{ fontSize: '1.2em' }}>
                Graduated: {graduationDate}
            </p>
            {relevantCourses && (
                <div>
                    <h4>Relevant Courses</h4>
                    <ul>
                        {relevantCourses.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>
            )}
            {projects && (
                <div>
                    <h4>Relevant Projects</h4>
                    <ul>
                        {projects.map((project, index) => (
                            <div key={index}>
                                <h5>{project.name}</h5>
                                <ul>
                                    {project.description.map((point, pointIndex) => (
                                        <li key={pointIndex}>{point}</li>
                                    ))}
                                    <li>Technologies used: {project.technologies.join(", ")}</li>
                                    {project.repoLink && <li> <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Project Repository</a></li>}
                                </ul>
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Education;