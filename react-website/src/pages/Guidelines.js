import React from 'react';
import './css/Guidelines.css'; 

const SafetyChallenges = () => {
    return (
        <section id="safety-challenges" className="guideline-section">
            <h2>Safety Challenges</h2>
            <ul className="guideline-list">
                <li className="guideline-item">
                    <span className="description">Adverse Weather Conditions:</span><br />
                    <span className="explanation"> Thunderstorms, turbulence, and low visibility are among the adverse weather conditions that single prop aircraft are more vulnerable to.One of the biggest challenges for pilots is to navigate through unstable conditions safely.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Limited Redundancy Systems:</span><br />
                    <span className="explanation"> Single prop airplanes often have limited redundancy in critical systems. In the event of a mechanical failure, pilots have fewer backup systems compared to larger aircraft, posing a safety challenge.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Pilot Workload Management:</span><br />
                    <span className="explanation">Pilots operating single-prop airplanes are responsible for managing a number of tasks, such as system monitoring, navigation, and communication. The challenge lies in effective workload management to avoid distractions and errors.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Limited Instrumentation:</span><br />
                    <span className="explanation"> A single prop aircraft might have very little advanced instrumentation. Pilots must rely on basic instruments, which can be challenging during low visibility or instrument flight conditions.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Air Traffic Congestion:</span><br />
                    <span className="explanation"> In areas with high air traffic, single prop airplanes face challenges in navigating congested airspace. The danger of mid-air collisions increases when an aircraft is in close proximity to another aircraft, requiring careful situational awareness.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Short Runway Operations:</span><br />
                    <span className="explanation"> Single prop airplanes often operate from shorter runways, especially in remote or uncontrolled airports. Pilots must manage takeoffs and landings within the constraints of limited runway lengths.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Lack of Engine Redundancy:</span><br />
                    <span className="explanation">Engine failure is a critical safety challenge for single prop airplanes, as they typically have a single engine. Pilots must be prepared to handle emergency situations and execute forced landings.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Terrain and Obstacle Awareness:</span><br />
                    <span className="explanation"> Operating in diverse landscapes, single prop airplanes face challenges related to terrain and obstacle awareness. Pilots must navigate safely, considering factors such as mountains, towers, powerlines, and other obstacles.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Communication Challenges:</span><br />
                    <span className="explanation"> In areas with limited radio coverage, communication challenges can arise. Pilots must adapt to varying communication conditions and ensure effective coordination with air traffic control.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Training and Proficiency:</span><br />
                    <span className="explanation"> Maintaining a high level of training and proficiency is a continuous challenge for pilots of single prop airplanes. Staying updated on the latest procedures and technologies is crucial for safe operations.</span>
                </li>
            </ul>
        </section>
    );
};

const Recommendations = () => {
    return (
        <section id="recommendations" className="guideline-section">
            <h2>Recommendations</h2>
            <ul className="guideline-list">
                <li className="guideline-item">
                    <span className="description">Improved Weather Monitoring:</span><br />
                    <span className="explanation">To give pilots accurate and timely information in real time, weather monitoring systems should be updated and improved on a regular basis. This includes weather radar, sophisticated forecasting tools, and prompt updates on conditions that change.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Advanced Engine Health Monitoring:</span><br />
                    <span className="explanation">Implement systems that offer comprehensive diagnostics and prognostics for engines. This lowers the possibility of in-flight engine failures by enabling the early detection of possible problems.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Establish Ongoing Pilot Training Programs:</span><br />
                    <span className="explanation">Establish thorough and ongoing pilot training programs that address a variety of scenarios, such as emergency protocols, stormy conditions, and sophisticated navigational techniques.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Integrated Traffic Collision Avoidance Systems (TCAS):</span><br />
                    <span className="explanation">To improve collision avoidance capabilities, equip single-prop airplanes with integrated traffic collision avoidance systems (TCAS). By giving real-time information about neighboring aircraft, this technology lowers the possibility of mid-air collisions.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Upgraded Communication Systems:</span><br />
                    <span className="explanation">To guarantee dependable and clear communication between pilots and air traffic control, upgrade communication systems. This includes advances in radio protocols and technology.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Automated Preflight Checklists:</span><br />
                    <span className="explanation">To help pilots perform comprehensive preflight checks, develop and implement automated preflight checklist systems. This raises general safety and minimizes the possibility of oversight.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Improved Emergency Response Training:</span><br />
                    <span className="explanation">Train pilots in advanced emergency response techniques to manage a variety of scenarios, such as engine failures, instrument malfunctions, and communication issues.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Weight and Balance Monitoring:</span><br />
                    <span className="explanation">To make sure that aircraft are loaded within safe operating limits, implement weight and balance monitoring systems in place. This helps to maintain stable flight characteristics and reduces the risk of accidents caused by improper loading.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Constant Aircraft Maintenance Monitoring:</span><br />
                    <span className="explanation">Combine systems that offer real-time information on the state of crucial parts with continuous aircraft maintenance monitoring. This proactive strategy makes timely maintenance interventions possible.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Enhanced Runway Condition Monitoring:</span><br />
                    <span className="explanation">Enhance systems for monitoring the condition of runways in order to give precise and current information about the state of the runways, including any ice, snow, or standing water. After that, during takeoff and landing, pilots can make well-informed decisions.</span>
                </li>
            </ul>
        </section>
    );
};

const GuidelinesSection = () => {
    return (
        <section id="guidelines" className="guideline-section">
            <h2>Guidelines</h2>
            <ul className="guideline-list">
                <li className="guideline-item">
                    <span className="description">Pre-Flight Inspection Protocol:</span><br />
                    <span className="explanation">Conduct a comprehensive pre-flight inspection following a checklist.<br></br>Verify the integrity of control surfaces, engine components, and fuel systems.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Weather Monitoring and Decision-Making:</span><br />
                    <span className="explanation">Regularly check weather forecasts and updates before each flight.<br></br>Establish clear decision-making criteria for adverse weather conditions.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Emergency Procedures Training:</span><br />
                    <span className="explanation">Provide thorough training on emergency procedures, including engine failure and forced landings.<br></br>Conduct regular proficiency training to ensure pilots are well-prepared.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Runway Length Assessment:</span><br />
                    <span className="explanation">Assess the available runway length and consider aircraft performance characteristics.<br></br>Implement techniques for short field takeoffs and landings as necessary.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Communication Protocols:</span><br />
                    <span className="explanation">Follow proper radio phraseology and communication protocols with air traffic control.<br></br>Address communication challenges with alternative methods in areas with limited coverage.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Terrain Awareness and Avoidance:</span><br />
                    <span className="explanation">Emphasize the importance of terrain and obstacle awareness during flight planning.<br></br>Utilize terrain awareness technology to enhance situational awareness.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Redundancy Systems Utilization:</span><br />
                    <span className="explanation">Understand the limitations of single prop airplanes' systems.<br></br>Implement strategies for managing the limited redundancy effectively.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Continuous Training and Proficiency:</span><br />
                    <span className="explanation">Encourage continuous training and proficiency development for pilots.<br></br>Stay updated on advancements in aviation technology and safety procedures.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Flight Planning and Navigation:</span><br />
                    <span className="explanation">Develop a thorough pre-flight planning process, considering route, fuel, and weather.<br></br>Use advanced navigation tools to enhance route efficiency and safety.</span>
                </li>
                <li className="guideline-item">
                    <span className="description">Collaboration with Air Traffic Control:</span><br />
                    <span className="explanation">Foster effective collaboration with air traffic control for improved communication.<br></br>Seek clearances and follow instructions promptly, enhancing overall safety.</span>
                </li>
            </ul>
        </section>
    );
};

const Guidelines = () => {
    return (
        <div className="guidelines-container">
            <SafetyChallenges />
            <Recommendations />
            <GuidelinesSection />
        </div>
    );
};

export default Guidelines;
