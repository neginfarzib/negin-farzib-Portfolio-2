import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="card h-100 shadow-sm border-0 portfolio-card">
      <img
        className="card-img-top"
        src={project.image}
        alt={project.title}
      />
      <div className="card-body d-flex flex-column">
        <h4 className="h5 card-title text-dark-emphasis">{project.title}</h4>
        <p className="card-text text-secondary flex-grow-1">{project.teaser}</p>
        <div className="d-flex align-items-center justify-content-between gap-2 mt-3">
          <Link className="btn btn-primary btn-sm" to={`/project/${project.id}`}>
            Read More
          </Link>
        <a 
            className="btn btn-outline-dark btn-sm"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
