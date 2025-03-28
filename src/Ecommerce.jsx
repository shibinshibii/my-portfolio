import './stylesheets/quizapp.css'
import { motion } from 'framer-motion'
function Ecommerce(){
    return(
        <motion.div
        className="quiz-main"
        initial={{x:800,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.4}}
        >
            <div className="quiz-container1">
                <h1>E-commerce</h1>
                <ul>
                    <li> Developed a fully functional e-commerce platform with features like product browsing, cart 
                    management, secure checkout, and order tracking. </li>

                    <li>Implemented real-time cart updates using AJAX & Fetch API to enhance user experience. </li>
                    <li>Integrated SQLite for database management and Django Authentication for user security. </li>
                </ul>
                <p><b>Tech Stack:  </b>Django, JavaScript, HTML, CSS, AJAX </p>
            </div>

        </motion.div>
    )
}
export default Ecommerce