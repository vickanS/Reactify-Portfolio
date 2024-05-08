import "../styles/Home.css"

const Home = () => {
  return (
   <section className="welcome-container">
    <img className="heropic" src="src/assets/Homepic.jpg" alt="Victoria Sten Åsenius" />
        <div className="welcometext">
            <h1 className="welcome">Welcome to my portfolio page!</h1>
            <p className="welcomep">Hey! My name is Victoria Sten Åsenius, I'm 26 years old and I live in Kalmar, Sweden.
            On this page you'll find information about me, my education, my experience with frontend developing but you can
            also have a look at some of my projects i have on my Github page.</p>
        </div>
   </section>
  )
}

export default Home
