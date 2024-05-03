import "../styles/About.css"

function About() {
  return (
    
    <div className="abtme">
      <section className="me">
        <img className="abtpic" src="src/assets/me.jpg" alt="" />
      </section>
      <section className="abtme-caveat-font">
      <h1 className="abtmeheader">About me!</h1>
      <section className="educationsection">
        <h2 className="educationheader">Education:</h2>
        <p className="education">I am currently studying to become a frontend developer at Folkuniversitetet in Gothenburg (2023-2025).</p>
      </section>
      <section className="experiencesection">
        <h2 className="experienceheader">My experience:</h2>
        <p className="experience">Before the studies started i didn't have any experience in the field of frontend development or any kind of coding what so ever,
        therefor as time goes by i learn new things continuously.</p>
        <p className="experience">I'm not going to lie, I struggle <strong>ALOT</strong>. I have always liked problem solving, so I
        know that once i get the hang of it this is what I'm meant to do!</p>
      </section>
      </section>
    </div>
  );
}


export default About
