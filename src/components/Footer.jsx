import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="section-center">
				<div className="social-icons">
					<Link className="social-icon">
						<i className="fab fa-facebook"></i>
					</Link>
					<Link className="social-icon">
						<i className="fab fa-twitter"></i>
					</Link>
					<Link className="social-icon">
						<i className="fab fa-instagram"></i>
					</Link>
				</div>
				<h4 className="footer-text">
					&copy;<span>2021</span>
					<span className="company">tea station</span>
					all rights reserved
				</h4>
			</div>
		</footer>
	);
};

export default Footer;
