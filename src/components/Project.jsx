import { Link } from "react-router-dom";
import projects from "../projects";
import Card from "react-bootstrap/Card";

const projectCards = projects.map((project, index) => {
  return (
    <div
      key={index}
      className="portfolio-section col-md-6 col-sm-6 g-4 table-responsive"
    >
      <div className="card-group" id="project-cards">
        <div className="card mb-3">
          <Card.Img
            src={project.imageSrc}
            className="card-img-top"
            alt={project.altText}
          />
          <Card.Body className="card-body">
            <Card.Title className="card-title">{project.name}</Card.Title>
            <p>{project.description}</p>
            <p id='technologies'> Technologies Used: {project.technologies}</p>
            <p>
              <Link to={project.deployedLink} id="deployed-link">
                Deployed Site
              </Link>
            </p>
            <p>
              <Link to={project.gitHub} id="github-link">
                Repository
              </Link>
            </p>
          </Card.Body>
        </div>
      </div>
    </div>
  );
});

export default function Project() {
  return <div className="row ">{projectCards}</div>;
}
