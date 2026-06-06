import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

function HomePage() {
  const projects = Object.values(projectsData);

  return (
    <main>
      <section>
        <div className="row-hero">
          <div className="column">
            <h1>Welcome</h1>
            <p>
              Welcome to Negin Farzib's portfolio!
              I am a frontend developer. Here are some of the projects that I have worked on during the past two years.
              </p>
          </div>
          <div className="column">
            <img 
              className="hero-image" 
              src="/hero-image-light.jpg" 
              alt="My profile photo"
            />
          </div>
        </div>
      </section>

      <section>
        <div id="thumb-container">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
