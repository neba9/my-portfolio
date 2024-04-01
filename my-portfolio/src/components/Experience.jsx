import React from "react";

const Experience = () => {
    return (
        <div className="section">
            <h2>Experience and Skills</h2>
            <h3>Experience</h3>
            <ExperienceItem
                title="Software & SharePoint Developer,AT&T with Infosys Limited"
                startDate="Sep 2021"
                endDate="Feb 2024"
                bullets={[
                    "Applied expertise in web technologies and industry best practices including SEO, Landing Page Optimization, and web accessibility.",
                    "Designed, built, and launched online surveys and open houses to engage audiences and gather feedback.",
                    "Extensive experience in designing Project Tracking and Financial Dashboards using Dashboard Designer, Power BI and Excel services and creating real time data connections with SharePoint List and SQL server.",
                    "Proficient in front-end and back-end web development technologies, including HTML, CSS, JavaScript, and frameworks like Bootstrap.",
                    "Experience in marketing agencies or in-house marketing environments for high-traffic enterprise websites and digital communications vehicles.",
                    "Applied object-oriented design principles and various Design Patterns to optimize code quality, scalability, and maintainability.",
                    "Created web parts to provide combined views of document libraries and lists.",
                    "Created content type, form library, and document library for the web application and assigned different levels of permissions..",
                ]}
                
            />
            <h3>Skills</h3>
            <ul>
                <li><strong>Programming languages:</strong> Java,Python, Microsoft Power Platform (PowerApps, Power Automate, Power BI), JavaScript, TypeScript</li>
                <li><strong>Web Development Frameworks and tools:</strong> Maven, Spring Boot, Django, ASP.NET MVC, Entity Framework</li>
                <li><strong>JavaScript Frameworks and Libraries:</strong> Angular, jQuery</li>
                <li><strong>Database Technologies:</strong> SQL, NoSQL, ETL, MongoDB, MS SQL Server, Oracle, MySQL, PostgreSQL</li>
                <li><strong>API and Web Services:</strong> Restful APIs, Microservices, API testing</li>
                <li><strong>Markup and Data Formats:</strong> HTML5, CSS, JSON, XML</li>
                <li><strong>Cloud Computing:</strong> AWS, Microsoft Azure</li>
                <li><strong>Version Control and collaboration tools:</strong> Git, GitHub, GitLab, Trello, Eclips</li>
                <li><strong>Agile Methodologies:</strong> Scrum Framework, User Story Creation and Management</li>
                <li><strong>Microsoft Power Platform:</strong> PowerApps, Power Automate, Power BI, Outlooks</li>
            </ul>
            <h3>Certifications</h3>
            <ul>
                <li>Infosys Certified AWS Solutions Architect Associate - 24 Jan 2023</li>
                <li>Infosys Certified Spring Associate - 30 Oct 2022</li>
                <li>Infosys Certified Angular Associate - 27 Jan 2002</li>
            </ul>
        </div>
    );
};

const ExperienceItem = ({ title, startDate, endDate, bullets }) => {
    return (
        <div className="experience-item">
            <h4>{title}</h4>
            <p>{startDate} - {endDate}</p>
            <ul>
                {bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;