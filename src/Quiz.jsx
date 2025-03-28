import './stylesheets/quizapp.css'
import { motion } from "framer-motion"
import reacticon from './assets/react.svg'
function Quiz(){
    
    return(
        <motion.div
        className="quiz-main"
        initial={{x:800,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.4}}
        >
            <div className="quiz-container1">
                <h1>Quiz Website</h1>
                <ul>
                    <li> Built a dynamic quiz platform with multiple-choice questions, real-time score tracking, and option selection using React (JSX).</li>

                    <li>Integrated Framer Motion for seamless page transitions and question animations, along with Bootstrap for a responsive and user-friendly interface.</li>
                </ul>
                <p><b>Tech Stack:  </b>React </p>
            </div>

        </motion.div>
    )

}
export default Quiz