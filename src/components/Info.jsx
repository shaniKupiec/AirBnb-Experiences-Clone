import profile from '../assets/imgs/profile.jpeg'
import mail from '../assets/imgs/icons/mail.png'
import linkedin from '../assets/imgs/icons/linkedin.png'

function Info() {
  return (
    <section className="info">
      <img className='info__img' src={profile} alt="img"/>
      <span className='info__name'>shani kupiec</span>
      <span className='info__profession'>fullstcak developer</span>
      <section className='info__buttons'>
        <div className='mail'>
            <img src={mail} alt="" />
            <span>Email</span>
        </div>
        <div  className='linkedin'>
            <img src={linkedin} alt="" />
            <span>Linkedin</span>
        </div>
      </section>
    </section>
  )
}

export default Info
