import { Link } from 'react-router-dom';

const styles = {
    content: {
        paddingBottom: "18em"
    }
}
 
 export default function Resume() {
    return (
        <div className="resume" style={styles.content}>
            <h1 className='resume-header mt-3'>Resume</h1>
            <h3>As a Full Stack Developer with a background in UI/UX Design, I am proficient in the following skills:</h3>
            <ul>
                <li>Figma/AdobeXD</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Responsive Web Design</li>
                <li>Node.JS</li>
                <li>JQuery</li>
                <li>MySQL/MongoDB</li>
                <li>React</li>
            </ul>
            <Link
            to='https://drive.google.com/file/d/1BqC2-vB2nL7_sBQh2vxpqZwbUQOA8Zj3/view?usp=sharing'>Click Here to View My Full Resume</Link>
        </div>
    )
 }