import { useContext } from "react";
import { AppContext } from "../App";
import aboutImg from "../image-01.jpg";

const About = () => {

  const aboutCtx = useContext(AppContext);

  return (
    <section className="about">
      <div className="container">
        <h2>About Us</h2>
        <div className="header-wrapper">
          <div className="about-content">
            <h3>Enable {aboutCtx.user.name} </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, eligendi! Nemo labore recusandae architecto eum beatae, dolor reiciendis reprehenderit iusto illo officia voluptatum ducimus dolorum minus perspiciatis atque culpa. Quae!</p>
            <button type="button">KNOW MORE</button>
          </div>

          <figure><img src={aboutImg} alt="about" /></figure>
        </div>

      </div>
    </section>
  )
}

export default About