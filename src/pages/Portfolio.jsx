import Project from "../components/Project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faGit } from "@fortawesome/free-brands-svg-icons";
import { faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faJava } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";

export default function PortfolioPage() {
  const styles ={
    iconSize: {
      height: "2em",
    },
    content: {
      marginBottom: "23em",
    },
    skills: {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
  }

  return (
    <div className="resume">
      <div className="skills-list mt-5 mb-5" style={styles.skills}>
        <FontAwesomeIcon style={styles.iconSize} icon={faFigma} />
        <FontAwesomeIcon style={styles.iconSize} icon={faJs} />
        <FontAwesomeIcon style={styles.iconSize} icon={faReact} />
        <FontAwesomeIcon style={styles.iconSize} icon={faNodeJs} />
        <FontAwesomeIcon style={styles.iconSize} icon={faDatabase} />
        <FontAwesomeIcon style={styles.iconSize} icon={faCss3} />
        <FontAwesomeIcon style={styles.iconSize} icon={faGit} />
        <FontAwesomeIcon style={styles.iconSize} icon={faBootstrap} />
        <FontAwesomeIcon style={styles.iconSize} icon={faHtml5} />
        <FontAwesomeIcon style={styles.iconSize} icon={faJava} />
        <FontAwesomeIcon style={styles.iconSize} icon={faPython} />
      </div>
      <Project />
    </div>
  );
}
