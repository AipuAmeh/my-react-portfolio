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
    }
}

export default function AboutMeCard() {
    return (
        <div className="about-me-section" style={styles.content}>
            <h1>About Me</h1>

            <img src="./src/assets/portfoliophoto.jpg" className="headshot" alt="headshot photo" style={styles.headshot}></img>

            <p>My name is Aipu Ameh. I am a Full Stack Web Developer with a focus on visionary technology. I </p>
        </div>
    )
}