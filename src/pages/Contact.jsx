import "../styles/Contact.css"
import { IonIcon } from '@ionic/react'
import { logoGithub, mailOutline } from 'ionicons/icons'
import { logoLinkedin } from 'ionicons/icons'

const Contact = () => {
  return (
    <div>
      
      <section className="contactsection">

        <h1 className="contactheader">My contact information</h1>
        <p className="contactp">Here you have al the ways to reach me! send me an E-mail if you have a question or want to know more about me, you can also contact me on LinkedIn
        or look at my projects on my Github profile.</p>

      </section>

      <section className="contactinfo">

        <section className="socialslinks">
          <section className="mail">
            <a href="mailto:stenvictoria@gmail.com">
              <IonIcon icon={mailOutline} /> stenvictoria@gmail.com
            </a>
          </section>

          <section className="linkedin">
            <a href="https://www.linkedin.com/in/victoria-sten-%C3%A5senius-358353296/">
              <IonIcon icon= { logoLinkedin } /> Min linkedinprofil
            </a>
          </section>

          <section className="github">
            <a href="https://github.com/vickanS">
            <IonIcon icon= { logoGithub } /> Min Githubprofil
            </a>
          </section>
        </section>

      </section>
      
    </div>
  )
}

export default Contact
