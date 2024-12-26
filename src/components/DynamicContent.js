import React, { useState, useEffect } from 'react';

const DynamicContent = () => {
    const [content, setContent] = useState([]);
    
    // Sample JSON data - replace this with your actual data
    const sampleData = [
        {
            title: "Frontend Development",
            description: "Web development tasks and responsibilities",
            skills: ["HTML", "CSS", "JavaScript"],
            techStack: ["React.js", "Node.js", "Express.js"]
        },
        {
            title: "Project Details",
            description: "Current project information and requirements",
            techStack: ["MongoDB", "Express.js", "React.js", "Node.js"]
        }
    ];

    useEffect(() => {
        // Simulating API call with sample data
        setContent(sampleData);
    }, []);

    return (
        <div className="dynamic-content">
            {content.map((item, index) => (
                <div key={index} className="content-card">
                    <h3>{item.title}</h3>
                    {item.description && <p>{item.description}</p>}
                    {item.skills && (
                        <div className="skills-container">
                            <h4>Required Skills:</h4>
                            <ul>
                                {item.skills.map((skill, idx) => (
                                    <li key={idx}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {item.techStack && (
                        <div className="tech-stack-container">
                            <h4>Tech Stack:</h4>
                            <ul>
                                {item.techStack.map((tech, idx) => (
                                    <li key={idx}>{tech}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DynamicContent;