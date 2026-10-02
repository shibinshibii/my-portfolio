import './stylesheets/quizapp.css';
import ProjectPageLayout from './components/ProjectPageLayout';
import eCommerce from "./assets/ecommerce.jpg";

function Ecommerce() {
  return (
    <ProjectPageLayout title="E-commerce Website" imageSrc={eCommerce}>
      <ul>
        <li>
          Developed a fully functional e-commerce platform with features like product browsing, cart
          management, secure checkout, and order tracking.
        </li>
        <li>
          Implemented real-time cart updates without page refreshes using AJAX and the Fetch API,
          enhancing the user experience.
        </li>
        <li>
          Integrated Django Authentication to securely manage user accounts, sessions, and order
          history.
        </li>
      </ul>
      <p>
        <b>Tech Stack: </b>Django, JavaScript, HTML, CSS, AJAX, SQLite
      </p>
    </ProjectPageLayout>
  );
}

export default Ecommerce;