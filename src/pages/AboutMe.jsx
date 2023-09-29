import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const styles = {
  headshot: { 
    maxWidth: "100%",
    paddingTop: '3em'
  },
title: {
  display: 'flex',
  justifyContent: 'flex-start'
},
bio: {
  position: 'relative'
}

};

export default function AboutMeCard() {
  return (
    <Container>
      <Row >
      <Col className="about-me-section mt-5" style={styles.content} lg={6}>
      <h1 style={styles.title}>About Me</h1>

      <img
        src="images/portfoliophoto.jpg"
        className="headshot"
        alt="headshot photo"
        style={styles.headshot}
      ></img>

    </Col>
    <Col className="container-sm p-5" >
        <p className="text-start content mt-3" style={styles.bio}>
          My name is Aipu Ameh. I am a Full Stack Web Developer with a focus on
          visionary technology. I have extensive knowledge in test-centered
          design with JavaScript, as well as utilizing HTML and CSS to
          manipulate data effectively. My prior experience in UX/UI design has
          aided my passions for creating a website that is user-centered,
          consistent, and fully accessible. When it comes to successful
          websites, I understand the best practices of Search Engine
          Optimization (SEO) and responsive web design, especially using
          JavaScript frameworks like React.
        </p>
      </Col>
      </Row>
  
 
    </Container>

  );
}
