import Facebook from "../Icon/Facebook"
import Instagram from "../Icon/Instagram"
import Twitter from "../Icon/Twitter"

const Social = () => {
  return (
    <div className="footer__social social">
      <a
        href="https://www.instagram.com/"
        className="social__icon"
        target="_blank"
        title="Instagram"
      >
        <Instagram />
      </a>
      <a
        href="https://www.facebook.com/"
        className="social__icon"
        target="_blank"
        title="Facebook"
      >
        <Facebook />
      </a>
      <a
        href="https://www.twitter.com/"
        className="social__icon"
        target="_blank"
        title="Twitter"
      >
        <Twitter />
      </a>
    </div>
  )
}
export default Social
