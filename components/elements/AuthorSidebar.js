import Link from "next/link";

export default function AuthorSidebar() {
  return (
    <>
      <aside className="blog-sidebar">
        <div className="widget sidebar-widget">
          <div className="tgAbout-me">
            <div className="tgAbout-thumb">
              <img src="/assets/img/others/about_me.png" alt="me" />
            </div>
            <div className="tgAbout-info">
              <p className="intro">
                Hi there, I’m <span>Rosalina D.</span>
              </p>
              <span className="designation">Content Writer</span>
            </div>
            <div className="tgAbout-social">
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
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
