import React from 'react';
import BackImage from './images/backGround.svg';

const Home = () => {
	return (
		
    <div style={{ width: "100%", height: 1602, background: 'white' }}>
    <div style={{ width: "100%", height: 1080, position:'relative', background: 'linear-gradient(0deg, rgba(196.56, 196.56, 196.56, 0.15) 0%, rgba(196.56, 196.56, 196.56, 0.15) 100%)' }}>
    <img src={BackImage} style={{ width: '100%',  position: 'absolute' }} alt="Your alt text" />
      <div style={{ width: "100%", height: 540, background: 'rgba(64, 64, 64, 0)' }}>
        <div style={{ width: "80%", height: 111, left: "10%", top: '10%', position: 'absolute', textAlign: 'center', lineHeight: '70%' ,color: '#B1E1FF', fontSize: "450%", fontFamily: 'inter', fontStyle: "bold", fontWeight: '700', wordWrap: 'break-word' }}>Welcome to Turbulence</div>
        <div style={{ width: "80%", height: 42, left: "10%", top: "18%", position: 'absolute', textAlign: 'center', lineHeight: '70%' ,color: '#D6D6D6', fontSize: 48, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' }}>Your Digital Safety Guideline</div>
        <div style={{ width: "45%", height: 320, left:"26%", top: "30%", position: 'absolute', textAlign: 'center',lineHeight: 1 , color: '#C6DAE8' ,fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Whether you're a seasoned pilot or just starting your journey, we're here to address the unique safety challenges of single prop aviation, covering everything from weather-related risks to emergency procedures. We provide expert insights, checklists, and essential resources to ensure your safety is a top priority. Stay informed, join our community, and make safety your constant companion in the skies. Welcome to Turbulence, where aviation safety takes flight.</div>
      </div>
    </div>
  </div>
    

		
	);
};

export default Home;
