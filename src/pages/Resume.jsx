import { Link } from 'react-router-dom';

const styles = {
    content: {
        paddingBottom: "18em"
    }
}
 
 export default function Resume() {
    return (
        <div className="resume" style={styles.content}>
            {/* <h1 className='resume-header mt-5'>Resume</h1> */}
            <h4 className='mt-5'>As a Full Stack Developer with a background in UI/UX Design, I am proficient in the following skills:</h4>
            <ul className='skills-list mt-3'>
                <li>Figma/AdobeXD</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Responsive Web Design</li>
                <li>Node.JS</li>
                <li>JQuery</li>
                <li>MySQL/MongoDB</li>
                <li>React</li>
                <li>CSS Frameworks</li>
                <li>JavaScript</li>
            </ul>
            <Link 
            className='resume-link'
            to='https://drive.google.com/file/d/1wBr1JqEOZ_9gLJ60fs9jPjURFsvT4cyB/view?usp=sharing'>Click Here to View My Full Resume!</Link>
        </div>
    )
 }