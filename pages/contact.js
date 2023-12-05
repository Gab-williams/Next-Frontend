import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import ContactForm from "@/components/layout/Header/contactForm";

export default function Contact() {
  return (
    <>
      <Layout breadcrumbCategory="Contact us" >
        <div className="hero-section about gap mt-5 mb-5">
          <div className="container col-lg-6">
            <div className="row align-items-center justify-content-center">
              <div
                className="col text-center"
                data-aos="fade-up"
                data-aos-delay={200}
                data-aos-duration={300}
              >
                <div className="about-text mb-4">
                  <h2>Contact us</h2>
                  <p>
                    Egestas sed tempus urna et pharetra pharetra massa. Fermentum
                    posuere urna nec tincidunt praesent semper.
                  </p>
                </div>
                <div className="row justify-content-center">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="address mb-4">
                      <BsTwitterX style={{ fontSize: "xx-large", marginBottom: "0.5em" }} />
                      <a href="mailto:quick.info@mail.net">
                        <h6>quick.info@mail.net</h6>
                      </a>
                      <span>Lorem ipsum dolor sit.</span>
                      <a href="mailto:quick.info@mail.net">
                        <h6>quick.info@mail.net</h6>
                      </a>
                      <span>Dolore magna aliqua</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="address mb-4">
                      <FaLinkedin style={{ fontSize: "xx-large", marginBottom: "0.5em" }} />
                      <a href="mailto:quick.info@mail.net">
                        <h6>quick.info@mail.net</h6>
                      </a>
                      <span>Lorem ipsum dolor sit.</span>
                      <a href="mailto:quick.info@mail.net">
                        <h6>quick.info@mail.net</h6>
                      </a>
                      <span>Dolore magna aliqua</span>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="address mb-4">
                      <FaInstagramSquare
                        style={{ fontSize: "xx-large", marginBottom: "0.5em" }}
                      />
                      <a href="callto:+14253261627">
                        <h6>+1 425 326 16 27</h6>
                      </a>
                      <span>Et netus et malesuada</span>
                      <a href="callto:+14253261627">
                        <h6>+1 425 326 16 27</h6>
                      </a>
                      <span>Enim tortor auctor urna</span>
                    </div>
                  </div>
                  {/* <!-- Contact Form --> */}
                  <div className="mt-3 mb-12 lg:mb-0 lg:w-full">
                    <p className="dark:text-jacarta-300 mb-16 text-lg leading-normal">
                      {"Have a question? Need help? Don't hesitate, drop us a line"}
                    </p>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
