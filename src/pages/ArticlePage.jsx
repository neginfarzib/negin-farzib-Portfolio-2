import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

function ArticlePage() {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return (
      <main className="py-5">
        <div className="container">
          <div className="card border-0 shadow-sm p-4">
            <h1 className="h2">Project not found</h1>
            <p className="text-secondary mb-3">
              Sorry, the project you&apos;re looking for doesn&apos;t exist.
            </p>
            <div>
              <Link className="btn btn-outline-primary" to="/">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <main className="py-5">
      <article className="container">
        <div className="card border-0 shadow-sm p-4 p-md-5">
          <div className="d-flex flex-column flex-lg-row align-items-start justify-content-between gap-3 border-bottom pb-3 mb-4">
            <h1 className="display-6 fw-bold mb-0 text-dark-emphasis">{project.title}</h1>
            <div className="d-flex flex-wrap gap-2">
              <a
                className="btn btn-primary"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Live Site
              </a>
            <a 
                className="btn btn-outline-dark"
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
            >
                View GitHub
            </a>
              <button className="btn btn-outline-secondary" onClick={handleCopyLink}>
                Copy Link
              </button>
            </div>
          </div>

          <img
            className="img-fluid rounded-3 article-image"
            src={project.fullImage}
            alt={project.title}
          />
          <p className="small fst-italic text-secondary mt-2 mb-4 text-center">
            {project.imageCaption}
          </p>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />

          <div className="mt-4 pt-4 border-top">
            <Link className="btn btn-link ps-0" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

export default ArticlePage;
