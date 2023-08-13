const styles = {
    content: {
        paddingBottom: "19em",
    },
    headshot: {
        maxWidth: "25%",
        padding: "0"
    },
    pageTitle: {
        paddingTop: "5em"
    },
    aboutMeText: {
        margin: "3em 10em",
    }
}

export default function AboutMeCard() {
    return (
        <div className="about-me-section mt-5" style={styles.content}>
            <h1 >About Me</h1>

            <img src="./src/assets/portfoliophoto.jpg" className="headshot" alt="headshot photo" style={styles.headshot}></img>

            <p className="text-start content" style={styles.aboutMeText}> My name is Aipu Ameh. I am a Full Stack Web Developer with a focus on visionary technology. As an avid learner, I use my experiences from various roles that I have held to fuel my life, both personally and professionally. When I am not working, I enjoy spending time with friends and family, traveling, and self-care activities.</p>
        </div>
    )
}