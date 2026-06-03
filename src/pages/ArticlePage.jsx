import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

function ArticlePage() {
  const { projectId } = useParams();
  const project = projectsData[projectId];

  if (!project) {
    return (
      <main>
        <div className="article-container">
          <h1>Project not found</h1>
          <p>Sorry, the project you're looking for doesn't exist.</p>
          <Link to="/">Back to Home</Link>
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
    <main>
      <article className="article-container">
        <div className="article-header">
          <h1>{project.title}</h1>
          <div className="article-links">
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Visit Live Site
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View GitHub
            </a>
            <button className="copy-btn" onClick={handleCopyLink}>
              Copy Link
            </button>
          </div>
        </div>

        <img 
          className="article-image" 
          src={project.fullImage} 
          alt={project.title}
        />
        <p className="image-caption">{project.imageCaption}</p>

        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />

        <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '2px solid #5548a1' }}>
          <Link to="/">← Back to Home</Link>
        </div>
      </article>
    </main>
  );
}

export default ArticlePage;
