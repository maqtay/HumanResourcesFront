import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Ana Sayfa</h2>
                        <Link to="/">Ana Sayfa</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Hakkımızda</h2>
                        <Link to="/about">Hakkımızda</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>İletişim</h2>
                        <Link to="/contact">İletişim</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Sosyal Medya</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            İnsan Kaynakları
                        </Link>
                    </div>
                    <small className="website-rigths">Maktay©2020</small>
                </div>
            </section>
        </div>
    )
}

export default Footer
