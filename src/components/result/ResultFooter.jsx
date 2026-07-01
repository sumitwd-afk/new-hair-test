import Image from "next/image";

import footerImg from "@/images/footer-img.png";
import btnArrow from "@/images/btn-arrow.png";

import footerUsp1 from "@/images/footer-usp-1.png";
import footerUsp2 from "@/images/footer-usp-2.png";
import footerUsp3 from "@/images/footer-usp-3.png";
import footerUsp4 from "@/images/footer-usp-4.png";

import socialYoutube from "@/images/footer-media-1.png";
import socialInstagram from "@/images/footer-media-2.png";
import socialLinkedin from "@/images/footer-media-3.png";

export default function ResultFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-box flex-box justify-between">
          <div className="footer-consult-box relative text-center">
            <Image
              className="footer-consult-img"
              src={footerImg}
              alt="Doctor consultation on phone"
            />

            <div className="footer-consult-content">
              <p className="uppercase">Book Your Consultation</p>

              <h3>
                We're always here
                <br />
                for hair help.
              </h3>

              <a href="#" className="btn footer-btn">
                <span>Talk to a Hair Expert</span>

                <Image
                  src={btnArrow}
                  alt=""
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div className="footer-content">
            <div className="footer-menu-grid flex-box justify-between">
              <div className="footer-menu-box">
                <h6>Company</h6>

                <ul>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">Hair Test</a></li>
                  <li><a href="#">Success Stories</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>

              <div className="footer-menu-box">
                <h6>About Us</h6>

                <ul>
                  <li>
                    <a href="#">Our Story & Philosophy</a>
                  </li>

                  <li>
                    <a href="#">
                      Doctors & Ayurvedic
                      <br />
                      Experts Panel
                    </a>
                  </li>

                  <li>
                    <a href="#">Clinical Validation</a>
                  </li>
                </ul>
              </div>

              <div className="footer-menu-box footer-contact-box">
                <h6>Contact us</h6>

                <ul>
                  <li>
                    <a href="#">
                      QHT Clinic,521, Model Colony,
                      <br />
                      Ranipur More, Haridwar,
                      <br />
                      Uttarakhand
                    </a>
                  </li>

                  <li>
                    <a href="mailto:care@theuroots.com">
                      care@theuroots.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer-menu-box">
                <h6>Results</h6>

                <ul>
                  <li>
                    <a href="#">Before/After Photos</a>
                  </li>

                  <li>
                    <a href="#">Testimonials</a>
                  </li>

                  <li>
                    <a href="#">Case Studies</a>
                  </li>
                </ul>
              </div>

              <div className="footer-menu-box">
                <h6>Faq</h6>

                <ul>
                  <li>
                    <a href="#">Treatments & Safety</a>
                  </li>

                  <li>
                    <a href="#">Kits & Subscriptions</a>
                  </li>

                  <li>
                    <a href="#">
                      Delivery, Payments, Returns
                    </a>
                  </li>

                  <li>
                    <a href="#">General</a>
                  </li>
                </ul>
              </div>

              <div className="footer-menu-box footer-cert-box">
                <h6>Certifications</h6>

                <div className="footer-cert-list flex align-center">
                  <Image
                    src={footerUsp1}
                    alt="ISO certification"
                  />

                  <Image
                    src={footerUsp2}
                    alt="GMP certification"
                  />

                  <Image
                    src={footerUsp3}
                    alt="Licensed certification"
                  />

                  <Image
                    src={footerUsp4}
                    alt="Quality certification"
                  />
                </div>
              </div>
            </div>

            <div className="footer-links-row flex-box justify-between align-center">
              <ul className="footer-social-list flex align-center">
                <li>
                  <a href="#" aria-label="YouTube">
                    <Image
                      src={socialYoutube}
                      alt=""
                    />
                  </a>
                </li>

                <li>
                  <a href="#" aria-label="Instagram">
                    <Image
                      src={socialInstagram}
                      alt=""
                    />
                  </a>
                </li>

                <li>
                  <a href="#" aria-label="LinkedIn">
                    <Image
                      src={socialLinkedin}
                      alt=""
                    />
                  </a>
                </li>
              </ul>

              <ul className="footer-policy-list flex align-center">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>

                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            <div className="footer-bottom flex-box justify-between">
              <p>© Copyright All Rights Reserved</p>

              <p>
                Design Credits :{" "}
                <a
                  href="https://www.artattackk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Art Attacck
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}