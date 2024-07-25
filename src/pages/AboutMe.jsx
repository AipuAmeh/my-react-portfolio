import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link }from 'react-router-dom';

import "../components/css/aboutme.css";

const styles = {
  headshot: {
    maxWidth: "100%",
    paddingBottom: "2em",
  },
  title: {
    display: "flex",
    justifyContent: "flex-start",
  },
  intro: {
    fontFamily: "Georgia, serif",
    fontWeight: "bold"
  },
skillsBubbles: {
  border: "1px solid white",
  backgroundColor: "white",
  width: "fit-content",
  borderRadius: "10px"
},
};

export default function AboutMeCard() {
  return (
    <Container>
      <Row>
        <Col className="container-sm p-5">
          <h1 className="intro" style={styles.intro}>
            Hi, my name is Aipu.
          </h1>
          <p className="text-start content mt-3" style={styles.bio}>
            I am a Full Stack Web Developer with a focus on
            visionary technology. I have extensive knowledge in test-centered
            design with JavaScript, TypeScript and React. My prior experience in UX/UI design has
            aided my passions for creating a website that is user-centered,
            and fully a11y accessible. When it comes to successful
            websites, I understand the best practices of Search Engine
            Optimization (SEO) and responsive web design.
            <br />
            <br />
            When I am not coding, I enjoy traveling, all things self-care, and learning new hobbies.
          </p>
          <Link to='/contact'>
          <button >Contact Me</button> 
          </Link>

        </Col>
        <Col className="about-me-section mt-5" style={styles.content} lg={4}>
          <img
            src="images/portfoliophoto.jpg"
            className="headshot"
            alt="headshot photo"
            style={styles.headshot}
          ></img>
        </Col>
      </Row>
      <div className="mt-5">
        <h2 >My Skills</h2>
  <ul className="skillsList mt-5" >
    <li style={styles.skillsBubbles} className="p-2 mx-2">JavaScript</li>
    <li style={styles.skillsBubbles} className="p-2 mx-2">TypeScript</li>
    <li style={styles.skillsBubbles} className="p-2 mx-2">SQL</li>
    <li style={styles.skillsBubbles} className="p-2 mx-2">MongoDB</li>
    <li style={styles.skillsBubbles} className="p-2 mx-2">React JS</li>
    <li style={styles.skillsBubbles} className="p-2 mx-2">Express JS</li>
    <li style={styles.skillsBubbles} className="p-2 mx-2">Jest</li>
    <li style={styles.skillsBubbles} className="p-2 mx-2">WordPress</li>
    <li style={styles.skillsBubbles} className="p-2 mx-2">PHP</li>
    <li style={styles.skillsBubbles} className="p-2 mx-2">Microsoft Sharepoint</li>
  </ul>
        </div>
    </Container>
  );
}
