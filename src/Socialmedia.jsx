import './stylesheets/quizapp.css';
import ProjectPageLayout from './components/ProjectPageLayout';
import socialImg from "./assets/social.png";

function Socialmedia() {
  return (
    <ProjectPageLayout title="Developer Community Social Media" imageSrc={socialImg}>
      <ul>
        <li>
          Building a niche social media platform tailored for developers to connect, share knowledge,
          and collaborate on projects.
        </li>
        <li>
          Features include user authentication, profile creation, user-generated posts, a follow
          system, interactive discussions, and real-time chat functionality.
        </li>
        <li>
          Implementing AJAX for seamless dynamic updates and a responsive UI using Bootstrap.
        </li>
      </ul>
      <p>
        <b>Tech Stack: </b>Django, JavaScript, HTML, CSS, Bootstrap, AJAX
      </p>
    </ProjectPageLayout>
  );
}

export default Socialmedia;