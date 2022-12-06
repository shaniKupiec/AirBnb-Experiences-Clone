import facebook from '../assets/imgs/icons/facebook.png'
import gitHub from '../assets/imgs/icons/gitHub.png'
import instagram from '../assets/imgs/icons/instagram.png'
import twitter from '../assets/imgs/icons/twitter.png'

function Footer() {
  return (
    <footer className="footer">
        <img src={facebook} alt="facebook" />
        <img src={gitHub} alt="gitHub" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
    </footer>
  )
}

export default Footer
