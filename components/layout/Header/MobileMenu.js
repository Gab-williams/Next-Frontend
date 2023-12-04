import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const MobileMenu = ({ handleMobileMenuClose, openClass }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });
  const router = useRouter();

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn" onClick={handleMobileMenuClose}>
            <i className="fas fa-times" />
          </div>
          <div className="nav-logo">
            <Link href="/" className="logo-dark">
              <img src="/assets/img/logo/logo.png" alt="Logo" />
            </Link>
            <Link href="/" className="logo-light">
              <img src="/assets/img/logo/w_logo.png" alt="Logo" />
            </Link>
          </div>
          <div className="tgmobile__search">
            <form action="#">
              <input type="text" placeholder="Search here..." />
              <button>
                <i className="far fa-search" />
              </button>
            </form>
          </div>
          <div className="tgmobile__menu-outer">
            <ul className="navigation">
              <li className={router.pathname == "/business" ? "active" : ""}>
                <Link href="/">Home</Link>
              </li>
              <li className={router.pathname == "/business" ? "active" : ""}>
                <Link href="/business">Business Insights</Link>
              </li>
              <li className={router.pathname == "/technology" ? "active" : ""}>
                <Link href="/technology">Technology Trends</Link>
              </li>
              <li>
                <Link href="/nft">Marketing & Finance</Link>
              </li>
              <li
                className="active menu-item-has-children"
                onClick={() => handleToggle(1)}
              >
                <Link href="#">More</Link>
                <ul
                  className="sub-menu"
                  style={
                    isActive.key == 1
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <li className={router.pathname == "/index-2" ? "active" : ""}>
                    <Link href="/">Multimedia & Events</Link>
                  </li>
                  <li className={router.pathname == "/index-3" ? "active" : ""}>
                    <Link href="/">Productivity & Innovation</Link>
                  </li>
                  <li className={router.pathname == "/index-4" ? "active" : ""}>
                    <Link href="/">Opinions & Editorials</Link>
                  </li>
                  <li className={router.pathname == "/index-5" ? "active" : ""}>
                    <Link href="/">Workplace & Culture</Link>
                  </li>
                </ul>
                <div
                  className={`dropdown-btn ${isActive.key == 1 ? "open" : ""}`}
                >
                  <span className="plus-line" />
                </div>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="list-wrap">
              <li>
                <Link
                  href="https://web.facebook.com/profile.php?id=61552875998422&mibextid=ZbWKwL&_rdc=1&_rdr"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://twitter.com/Dabarnetwork?t=FdWs0919Lh2CqQxq50VUMg"
                  target="_blank"
                >
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/the.dabar/?igshid=YzAwZjE1ZTI0Zg%3D%3D"
                  target="_blank"
                >
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/darbar-media/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
        className="tgmobile__menu-backdrop"
        onClick={handleMobileMenuClose}
      />
    </>
  );
};

export default MobileMenu;
