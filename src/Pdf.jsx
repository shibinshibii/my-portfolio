import './stylesheets/quizapp.css'
import { motion } from "framer-motion"
import reacticon from './assets/react.svg'
function Pdf(){
    
    return(
        <motion.div
        className="quiz-main"
        initial={{x:800,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:0.4}}
        >
            <div className="quiz-container1">
                <h1>PDF Query App</h1>
                <ul>
                    <li>Built a full-stack PDF Query Web App using React (frontend) and FastAPI (backend) enabling 
                    users to upload PDFs and ask context-based questions. </li>

                    <li>Integrated Gemini LLM via LlamaIndex to parse, index, and retrieve relevant answers using 
                    vector embeddings from uploaded documents. </li>
                    <li>Implemented file uploads, local vector caching, and chat history persistence. </li>
                    <li><a href='https://pdf-query-app-delta.vercel.app/' target='blank'>Live Demo</a></li>
                </ul>
                <p><b>Tech Stack:  </b>FastAPI, React, LlamaIndex, Gemini  </p>
            </div>

        </motion.div>
    )

}
export default Pdf