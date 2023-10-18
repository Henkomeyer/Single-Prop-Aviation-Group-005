import React from "react";
import BackImage from './images/single-prop-plane.jpeg'
const About = () => {
	return (
		<body style={{ overflow: 'hidden'}}>
		<div style={{ width: "100%", height: 1602, background: 'white' }}>
			<div style={{ width: "100%", height: '100%', position: 'relative', background: 'linear-gradient(0deg, rgba(196.56, 196.56, 196.56, 0.15) 0%, rgba(196.56, 196.56, 196.56, 0.15) 100%)' }}>
				<img src={BackImage} style={{ width: '100%', position: 'absolute', opacity : '0.8' }} alt="Single prop plane" />
				<div style={{ width: "100%", height: 440, background: 'rgba(64, 64, 64, 0)' }}>
					<div style={{ width: "80%", height: 120, left: "10%", top: '3%',borderRadius: '10px', position: 'absolute', textAlign: 'center', lineHeight: '70%', color: '#000000', fontSize: 31, fontFamily: 'InterLato', wordWrap: 'break-word', lineHeight: 1,transition: 'background-color 0.3s', backgroundColor:'transparent' }}onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(211, 211, 211, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Welcome to our project dedicated to enhancing aviation safety in single-prop airplanes. Our primary mission is to contribute to the well-being of pilots and passengers by conducting thorough research, pinpointing safety gaps, and presenting practical solutions that can save lives and prevent accidents.</div>
					<div style={{ width: "80%", height: 140, left: "10%", top: "14%",borderRadius: '10px', position: 'absolute', textAlign: 'center', lineHeight: '70%', color: '#000000', fontSize: 31, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word',lineHeight: 1 }}onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(211, 211, 211, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Our project is firmly rooted in a mission to foster a profound understanding of aviation safety principles, risk management, and human factors within the aviation community. By doing so, we aim to empower future aviators with the knowledge and skills they need to make each flight a safer and more secure experience.</div>
					<div style={{ width: "45%", height: 340, left: "26%", top: "24%",borderRadius: '10px', position: 'absolute', textAlign: 'center', lineHeight: 1, color: '#000000', fontSize: 31, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(211, 211, 211, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>Explore Our Website Features:<br></br> <br></br>  Research: Access research findings and studies related to aviation safety in single prop airplanes.<br></br> <br></br> Recommendations: Discover practical recommendations for pilots and aviation organizations based on our research.<br></br> <br></br>  Quiz: Test your knowledge with our aviation safety quiz.</div>
				</div>
			</div>
		</div>
		</body>
	);
};

export default About;
