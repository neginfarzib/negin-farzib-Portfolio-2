import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

function HomePage() {
  const projects = Object.values(projectsData);
  const heroImage = `${import.meta.env.BASE_URL}hero-image-light.jpg`;

  return (
    <main>
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7 text-white">
              <h1 className="display-4 fw-bold">Welcome</h1>
              <p className="lead mb-0">
                Welcome to Negin Farzib&apos;s portfolio! I am a frontend developer.
                Here are some of the projects that I have worked on during the past
                two years.
              </p>
            </div>
            <div className="col-lg-5 text-center">
              <img
                className="img-fluid rounded-3 shadow hero-image"
                src={heroImage}
                alt="My profile photo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {projects.map((project) => (
              <div className="col-12 col-md-6 col-xl-4" key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
