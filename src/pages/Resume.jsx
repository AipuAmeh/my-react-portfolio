import { Link } from "react-router-dom";

const styles = {
  content: {
    marginBottom: "23em",
  },
  skills: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  iconSize: {
    height: "2em",
  },
};

export default function Resume() {
  return (
    <div className="resume" style={styles.content}>
      <Link
        className="resume-link mt-5 mb-5"
        to="https://drive.google.com/file/d/1nbAs0CckWVHXYFXOh8qZMITiZmeggcS-/view?usp=sharing"
      >
        Click Here to View My Full Resume!
      </Link>
    </div>
  );
}
