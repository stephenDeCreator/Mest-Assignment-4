import '../fontawesome-free-5.12.1-web/css/all.min.css';
import '../css/Icon.css';

const Icons = (props) => {
	return (
		<span className="skill-icon">
			<i className={props.name}></i>
		</span>
	);
};

export default Icons;
