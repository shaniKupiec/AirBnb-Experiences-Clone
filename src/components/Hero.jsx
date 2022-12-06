import experiences from "../../public/imgs/experiences.png"

function Hero() {  
  return (
    <section className="hero">
      <img className="hero__img" src={experiences} alt="" />
      <h3 className="hero__title">Online Experiences</h3>
      <p className="hero__txt">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero
