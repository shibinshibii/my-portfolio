import './stylesheets/quizapp.css';
import ProjectPageLayout from './components/ProjectPageLayout';
import quizImg from "./assets/quizimg.jpg";

function QuoteGenerator() {
  return (
    <ProjectPageLayout title="Random Quote Generator" imageSrc={quizImg}>
      <ul>
        <li>
          Built a dynamic quote generator that fetches and displays random motivational quotes on
          demand.
        </li>
        <li>
          Integrated external quote APIs for dynamic retrieval, ensuring a varied and engaging
          experience.
        </li>
      </ul>
      <p>
        <b>Tech Stack: </b>Django, JavaScript, HTML, CSS, API Integration
      </p>
    </ProjectPageLayout>
  );
}

export default QuoteGenerator;