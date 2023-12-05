import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Link from 'react-router-dom';

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
};

export default function AboutMeCard() {
  return (
    <Container>
      <Row>
        <Col className="about-me-section mt-5" style={styles.content} lg={6}>
          {/* <h1 style={styles.title}>Who Am I...</h1> */}

          <img
            src="images/portfoliophoto.jpg"
            className="headshot"
            alt="headshot photo"
            style={styles.headshot}
          ></img>
        </Col>
        <Col className="container-sm p-5">
          <h1 className="intro" style={styles.intro}>
            Hi, my name is Aipu.
          </h1>
          <p className="text-start content mt-3" style={styles.bio}>
            I am a Full Stack Web Developer with a focus on
            visionary technology. I have extensive knowledge in test-centered
            design with JavaScript, as well as utilizing HTML and CSS to
            manipulate data effectively. My prior experience in UX/UI design has
            aided my passions for creating a website that is user-centered,
            consistent, and fully accessible. When it comes to successful
            websites, I understand the best practices of Search Engine
            Optimization (SEO) and responsive web design.
            <br />
            <br />
            When I am not coding, I enjoy traveling, all things self-care, and learning new hobbies.
          </p>
          <p>
            Email:
            <a className="links" href="mailto:aipuameh.16@gmail.com">
              {" "}
              aipuameh.16@gmail.com
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
