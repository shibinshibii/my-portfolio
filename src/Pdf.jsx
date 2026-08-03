import './stylesheets/quizapp.css';
import ProjectPageLayout from './components/ProjectPageLayout';
import rQg from "./assets/7253845.jpg";

function Pdf() {
  return (
    <ProjectPageLayout title="PDF Query App" imageSrc={rQg}>
      <ul>
        <li>
          Built a full-stack PDF Query Web App using React (frontend) and FastAPI (backend) enabling
          users to upload PDFs and ask context-based questions.
        </li>
        <li>
          Integrated Gemini LLM via LlamaIndex to parse, index, and retrieve relevant answers using
          vector embeddings from uploaded documents.
        </li>
        <li>Implemented file uploads, local vector caching, and chat history persistence.</li>
      </ul>
      <p>
        <a href="https://pdf-query-app-delta.vercel.app/" target="_blank" rel="noopener noreferrer">
          View Live Demo
        </a>
      </p>
      <p>
        <b>Tech Stack: </b>FastAPI, React, LlamaIndex, Gemini
      </p>
    </ProjectPageLayout>
  );
}

export default Pdf;