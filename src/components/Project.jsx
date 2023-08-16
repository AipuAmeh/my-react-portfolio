import { Link } from "react-router-dom";
import projects from "../projects";

const projectCards = projects.map((project, index) => {
  return (
    <div
      key={index}
      className="portfolio-section col-md-6 col-sm-6 g-4 table-responsive"
    > 
      <div className="card-group" id='project-cards'>
        <div className="card mb-3">
          <img
            src={project.imageSrc}
            className="card-img-top"
            alt={project.altText}
          />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            
            <Link 
            to={project.deployedLink} id="deployed-link">
              View My Deployed Site! 
            </Link>
          {'\n'}
            <Link to={project.gitHub}
            id="github-link">
              View My Repository!
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
});

export default function Project() {

  return <div className="row ">{projectCards}</div>;
}
