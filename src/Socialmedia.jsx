import './stylesheets/quizapp.css'
import { motion } from 'framer-motion'

function Socialmedia(){
    return(
        <motion.div
        className="quiz-main"
        initial={{x:800,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.4}}
        >
            <div className="quiz-container1">
                <h1>Developer Community Social Media (In Progress) </h1>
                <ul>
                    <li> Currently developing a social media platform for developers to connect, share knowledge, and 
                    collaborate.   </li>

                    <li>Features include authentication, user-generated posts, follow system, interactive discussions, 
                    and a real-time chat system.  </li>
                    <li>Implementing AJAX for seamless dynamic updates and a responsive UI using Bootstrap. </li>
                </ul>
                <p><b>Tech Stack:  </b>Django, JavaScript, HTML, CSS, AJAX</p>
            </div>

        </motion.div>
    )
}
export default Socialmedia