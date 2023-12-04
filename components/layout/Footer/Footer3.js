import Link from "next/link"

export default function Footer3({footerClass, logoWhite}) {
    return (
        <>
            <footer className={`footer-area bg-black  ${footerClass}`} >
                <div className="newsletter-style-two style-three pt-80 pb-80">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-6 col-xl-7 col-lg-8">
                                <div className="newsletter__title text-center mb-35">
                                    <div className="newsletter__title-icon">
                                        <i className="fas fa-envelope-open-text" />
                                    </div>
                                    <span className="sub-title text-white">newsletter</span>
                                    <h4 className={`title  text-white`}>Get notified of the best artiles on <br /> on Dabar</h4>
                                </div>
                                <div className="newsletter__form-wrap text-center">
                                    <form action="#" className="newsletter__form ">
                                        <div className="newsletter__form-grp">
                                            <input type="email" placeholder="Email address" required />
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    I agree that my submitted datLink is being collected and stored.
                                                </label>
                                            </div>
                                        </div>
                                        <button className="btn" type="submit">
                                            <span className="text">Subscribe</span>
                                            <i className="fas fa-paper-plane" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="footer__logo-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-4">
                                <div className="footer__logo logo">
                                    <Link href="/" className="logo-dark"><img src={`assets/img/logo/w_logo.png`} alt="Logo" /></Link>
                                    <Link href="/" className="logo-light"><img src="assets/img/logo/w_logo.png" alt="Logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8">
                                <div className="footer__social">
                                    <ul className="list-wrap">
                                        <li><Link href="https://www.facebook.com/profile.php?id=61552875998422&mibextid=ZbWKwL"><i className="fab fa-facebook-f" /> Facebook</Link></li>
                                        <li><Link href="https://www.instagram.com/the.dabar/?igshid=YzAwZjE1ZTI0Zg%3D%3D"><i className="fab fa-instagram" /> Instagram</Link></li>
                                        <li><Link href="https://twitter.com/Dabarnetwork?t=FdWs0919Lh2CqQxq50VUMg"><i className="fab fa-twitter" /> Twitter </Link></li>
                                        <li><Link href="https://www.linkedin.com/company/darbar-media/"><i className="fab fa-linkedin" /> Linkedin </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyright">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="copyright__text">
                                    <p>All Rights Reserved © <a href="http://Dabar">Dabar</a> - {new Date().getFullYear()}</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="copyright__menu">
                                    <ul className="list-wrap">
                                        <li><Link href="#">Contact Us</Link></li>
                                        <li><Link href="#">Terms of Use</Link></li>
                                        <li><Link href="#">Advertise</Link></li>
                                      
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
