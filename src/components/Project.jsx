import { Link } from "react-router-dom";
import projects from "../projects";

const styles = {
  content: {
    padding: "2em",
    display: "flex",
    fleWwrap: "wrap"
    // flexFlow: "column wrap",
  },
};
const projectCards = projects.map((project, index) => {
  console.log(project);
  return (
    <div
      key={index}
      className="portfolio-section row row-cols-2 row-cols-md-2 table-responsive"
      style={styles.content}
    >
      <div className="card-group">
        <div className="card">
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

  return <div>{projectCards}</div>;
}
