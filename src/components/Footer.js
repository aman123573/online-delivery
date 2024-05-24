import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="footer-details">
                <h1>Fresh Pizza</h1>
                <div className="timings">
                    <p>Mon - Fri : 8:00 AM-11:00PM</p>
                    <p>Sat & Sun : 8:00 AM-3:00AM</p>
                    <div className="subscribe">
                        <input type="email" placeholder='Email'/>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <span>
                Copyright &copy; Fresh Pizza.
                </span>
            </div>
        </div>
    )
}

export default Footer
