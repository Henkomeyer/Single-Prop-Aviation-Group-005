import React from 'react';
import BackImage from './images/backGround.svg';

const Home = () => {
  return (

    <div style={{ width: "100%", height: 2080, background: 'white' }}>
      <div style={{ width: "100%", height: 1080, position: 'relative', background: 'linear-gradient(0deg, rgba(196.56, 196.56, 196.56, 0.15) 0%, rgba(196.56, 196.56, 196.56, 0.15) 100%)' }}>
        <img src={BackImage} style={{ width: '100%', height: "130%", position: 'absolute' }} alt="Your alt text" />
        <div style={{ width: "100%", height: 540, background: 'rgba(64, 64, 64, 0)' }}>
          <div style={{ width: "80%", height: 111, left: "10%", top: '10%', position: 'absolute', textAlign: 'center', lineHeight: '70%', color: '#B1E1FF', fontSize: "450%", fontFamily: 'inter', fontStyle: "bold", fontWeight: '700', wordWrap: 'break-word' }}>Welcome to Turbulence</div>
          <div style={{ width: "80%", height: 42, left: "10%", top: "18%", position: 'absolute', textAlign: 'center', lineHeight: '70%', color: '#D6D6D6', fontSize: 48, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word' }}>Your Digital Safety Guideline</div>
          <div style={{ width: "45%", height: 320, left: "26%", top: "30%", position: 'absolute', textAlign: 'center', lineHeight: 1, color: '#C6DAE8', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Whether you're a seasoned pilot or just starting your journey, we're here to address the unique safety challenges of single prop aviation, covering everything from weather-related risks to emergency procedures. We provide expert insights, checklists, and essential resources to ensure your safety is a top priority. Stay informed, join our community, and make safety your constant companion in the skies. Welcome to Turbulence, where aviation safety takes flight.</div>
        </div>
      </div>
      {/* Offer */}

      <div style={{ width: "100%", height: 1080, background: 'white', position: "relative" }}>
        <div style={{ width: "92%", height: 454, top: 342, position: 'absolute', background: 'white', marginLeft: '4%', boxShadow: '23px 22px 70px rgba(0, 0, 0, 0.20)', borderRadius: 30, overflow: 'hidden', border: '1px rgba(255, 255, 255, 0.10) solid' }}>
          <div style={{ width: "100%", height: 370, left: "3%", top: 40, position: 'absolute' }}>
            <div style={{ width: "100%", height: 135, left: 143, top: 0, position: 'absolute' }}>
              <div style={{ width: 120, height: 135, left: 0, top: 0, position: 'absolute', background: '#fff', textAlign: "center", paddingTop: '4%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3D7EA4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>              </div>
            </div>
            <div style={{ width: 395, height: 158, left: 10, top: 185, position: 'absolute', textAlign: 'center' }}>
              <span style={{ color: 'black', fontSize: 36, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word' }}>Interactive Learning<br /></span>
              <span style={{ color: 'black', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>Aviation-based quiz to test knowledge.</span>
            </div>
          </div>
          <div style={{ height: 370, paddingBottom: 27, paddingLeft: 10, paddingRight: 10, left: "39%", top: 42, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 50.52, display: 'inline-flex' }}>
            <div style={{ width: 137.60, height: 134.48, background: '#fff', textAlign: 'center', paddingTop: '12%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3D7EA4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
            <div style={{ width: 395, height: 158, textAlign: 'center' }}>
              <span style={{ color: 'black', fontSize: 36, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word' }}>Guidelines<br /></span>
              <span style={{ color: 'black', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>Informative guidelines to learn and demonstrate.</span>
            </div>
          </div>
          <div style={{ width: 415, height: 370, left: "74%", top: 42, position: 'absolute' }}>
            <div style={{ width: 395, height: 158, left: 10, top: 185, position: 'absolute', textAlign: 'center' }}>
              <span style={{ color: 'black', fontSize: 36, fontFamily: 'Montserrat', fontWeight: '700', wordWrap: 'break-word' }}>Support<br /></span>
              <span style={{ color: 'black', fontSize: 32, fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word' }}>Support in the form of FAQ and contact form.</span>
            </div>
            <div style={{ width: 126.32, height: 118, left: '34%', top: 14, position: 'absolute', background: '#fff',textAlign: 'center',paddingTop: '10%' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#3D7EA4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>            </div>
          </div>
        </div>
        <div style={{ width: '100%', height: 118, paddingTop: 17, paddingLeft: 6, justifyContent: 'center', paddingRight: 15, top: 114, position: 'absolute', background: 'white', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
          <div style={{ width: '100%', height: 101, textAlign: 'center' }}>
            <span style={{ color: '#3D7EA4', fontSize: 85, fontFamily: 'Mukta', fontWeight: '700', wordWrap: 'break-word' }}>What we </span>
            <span style={{ color: 'black', fontSize: 85, fontFamily: 'Mukta', fontWeight: '700', wordWrap: 'break-word' }}>Offer</span>
          </div>
        </div>
      </div>

    </div>




  );
};

export default Home;
