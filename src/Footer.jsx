const Footer = () => {
  return (
    <section className="footer-section">
        <div className="footer-links">
            <div>
                <h2>Shortly</h2>
            </div>       
            <div className="topics">Features
                <ul>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className="topics">Resources
                <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="topics">Company
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="socials">
                <img src="../images/icon-facebook.svg" alt="facebook-icon" className="social-icon" />
                <img src="../images/icon-twitter.svg" alt="twitter-icon" className="social-icon" />
                <img src="../images/icon-pinterest.svg" alt="pinterest-icon" className="social-icon" />
                <img src="../images/icon-instagram.svg" alt="instagram-icon" className="social-icon" />
            </div>
        </div>
    </section>
  )
}
export default Footer