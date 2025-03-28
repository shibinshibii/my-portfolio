import './stylesheets/quizapp.css'
import { motion } from 'framer-motion'

function QuoteGenerator(){
    return(
        <motion.div
        className="quiz-main"
        initial={{x:800,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.4}}
        >
            <div className="quiz-container1">
                <h1>Random Quote Generator</h1>
                <ul>
                    <li> Built a dynamic quote generator that fetches and displays random motivational quotes.  </li>

                    <li>Integrated APIs to retrieve quotes dynamically, ensuring a seamless user experience. </li>
                </ul>
                <p><b>Tech Stack:  </b>Django, JavaScript, HTML, CSS, API Integration </p>
            </div>

        </motion.div>
    )
}
export default QuoteGenerator