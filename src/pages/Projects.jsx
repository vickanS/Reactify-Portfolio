import "../styles/Projects.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/vickanS/repos')
      .then(response => {
        setRepos(response.data); 
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []); 

  return (
    <div>

      <section className="projectsection">
        <section className="projectshead">
          <h1 className="projectsheader">My Github projects</h1>
          <p className="projectsp">This list contains of the various projects I've worked on and uploaded on Github during my studies.</p>
        </section>
      </section>

      <section className="projects-container githubprojects">
        <section className="projectslist">
          <ul>
            {repos.map(repo => (
              <li key={repo.id}>
                <a href={`https://github.com/vickanS/${repo.name}`} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
     
    </div>
  ); 
};

export default Projects;
