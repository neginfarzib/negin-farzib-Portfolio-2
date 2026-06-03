import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="thumbnail-image">
      <h4>{project.title}</h4>
      <img 
        src={project.image} 
        alt={project.title}
      />
      <p>{project.teaser}</p>
      <div className="row-read-git">
        <Link to={`/project/${project.id}`}>Read More...</Link>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
