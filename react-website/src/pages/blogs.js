import React from 'react';
import "./css/blog.css";
import Video from './images/history.mp4';

const Blogs = () => {
  return (
    <div className='top'>
      <div className="row">
        <div className="content">
          <div className="card">
            <h2>Pre-flight Checklists</h2>
            <h5>A quick explanation of the different types of checklists used before take-off.</h5>
            <div className="img">
            <image src='react-website\src\pages\images\flight-checklist.jpg'></image>
            </div>
            <p>Pre-flight safety and equipment checks are crucial for pilots to perform before each flight.
              One of the methods by which they do this is by completing checklists. Checklists are a list of items
              or tasks that need to be completed before performing a specific task, in this case flying and safely maintaining an airplane.</p>
            <br />
            <p>There have been various checklist devices that provide their own advantages and disadvantages. Some of these devices are paper, scroll, mechanical, computer, and vocal checklists.
              The most used checklist out of these devices is the paper checklist,
              which consists of the following sections: External Electric & Pneumatic Source- Start, Before Start, After Start, Taxi, Delayed Engine Start, Before Take-off, Climb, In-Range.</p>
            <br />
            <p>
              In addition to these normal checklists, there are also expanded and abnormal checklists that are used by flight crews.
              The abnormal checklist is used during emergencies by the crew to attempt to revert the situation back to normal whereas the expanded checklist is used for training purposes.
            </p>
          </div>
          <div className="card">
            <h2>Human Factors</h2>
            <h5>Human factors and their role in aviation accidents</h5>
            <div className="img">
            <image src='' alt="Human Factors"></image>
            </div>
            <div>
              <p>
                <h5>Human Error</h5>
                It is believed that roughly 75-80% of aircraft accidents are related to human error or human performance issues.
                That's why human error is usually the starting point in aircraft mishaps rather than the end point. Human error though does not solve the problem but rather indicates where the problem came from, but it is also important not to blame human error as the sole problem as things like design flaws,
                lack of proper training or incorrect procedures can all lead to pilots making mistakes.
              </p> <br />
              <p>
                <h5>Age</h5>
                Older pilots are more likely to do better at landing aircraft in visibility that is not good compared to that of younger pilots.
                In studies done the age, gender, and experience of pilots were analyzed to see if any of those three things have a connection with aviation accidents. In the studies it was found that age and gender alone are not a cause and that whatever age or gender the pilot is does not lead to accidents.
                The significant impact that was found is related to the pilot's experience, with pilots that have less experience having a bigger chance of making errors that lead to accidents. It was revealed that male pilots over the age of 60 and with a lot of experience have a higher risk of errors that could lead to accidents.
              </p> <br />
              <p>
                <h5>Fatigue</h5>
                A study done on pilot training investigated fatigue. Pilots were asked questions and had to agree or disagree. The data captured resulted in revealing that many pilots were struggling with fatigue,
                results showed that pilots agreed to questions related to making mistakes or overlooking mistakes.
                A high level of neutral answers was recorded on some questions that indicate that pilots could not say with certainty that they did not make mistakes which probably indicates that they were not at full focus when doing their training.
                When asked what contributed to their fatigue it is unanimous that long working days and not enough sleep was the main influence, with health and age being the least influence.
              </p> <br />
              <p>
                <h5>Situational awareness</h5>
                Situation Awareness (SA) is a crucial factor in effective decision-making, especially in the dynamic flight environment. A study was conducted to determine the most common errors related to situational awareness. The study made use of the Aviation Safety Reporting System (ASRS) database and its data related to situational awareness.
                Three categories were created for the study being Level 1 (failure to correctly perceive the information), Level 2 (failure to comprehend the situation), or Level 3 (failure to project the situation into the future). The study indicated that 76.3% of the time the error fell in level 1, 20.3% in level 2 and only 3.4% of the time in level 3.
                So, the results indicate that most of the time errors related to situational awareness are a result of relevant data not being available to the pilot.
              </p>
            </div>
          </div>
          <div className="card">
            <h2>Best Practices</h2>
            <h5>Best practices to ensure safe operations in single-prop aviation.</h5>
            <div className="img">
            <image src='' alt="Best Practices"></image>
            </div>
            <div>
              <p>
                <h5>Comprehensive Pre-flight Inspections</h5>
                For a single-prop aircraft, a comprehensive pre-flight inspection is a fundamental component of aviation safety. Pilots carefully go over control surfaces, engine parts, and fuel systems using a checklist.
                This procedure is essential for spotting and fixing possible problems prior to takeoff, guaranteeing that the aircraft is operating at peak efficiency.
                Pre-flight inspection diligence is a proactive measure that lowers the likelihood of in-flight malfunctions or failures significantly, improving pilot and passenger safety overall.
              </p> <br />
              <p>
                <h5>Continuous Training and Proficiency</h5>
                Responsible controlling of a single-prop airplane requires a dedication to ongoing training and proficiency development.
                Pilots need to keep up with the latest developments in aviation technology and safety protocols.
                Pilots are kept prepared for a range of situations through frequent training sessions and proficiency exams, which cover everything from emergency procedures to using sophisticated navigational aids.
                A culture of safety in aviation is fostered by this proactive approach, which not only improves the pilot's abilities but also gives passengers a sense of confidence.
              </p> <br />
              <p>
                <h5>Terrain Awareness and Avoidance</h5>
                Emphasizing terrain and obstacle awareness is crucial for the safe operation of single-prop airplanes.
                Pilots must complete extensive training in order to comprehend the significance of terrain considerations when planning flights.
                Pilots can reduce the likelihood of collisions with obstacles by improving their situational awareness through the use of advanced terrain awareness technology.
                This best practice serves as an example of a proactive approach to safety, in which pilots receive real-time terrain information in addition to training and equipment.
              </p> <br />
              <p>
                <h5>Communication Protocols</h5>
                In aviation, good communication is essential, and pilots of single-prop aircraft need to comply with the correct radio phraseology and communication protocols.
                This urged procedure guarantees precise and clear communication with air traffic control, particularly in places with limited coverage.
                Pilots contribute to the overall safety of airspace by avoiding misunderstandings and enabling seamless coordination by adhering to established communication protocols.
                An essential component of a safe and well-run flight is effective and clear communication.
              </p>
              <p>
                <h5>Flight Planning and Navigation</h5>
                Thorough pre-flight planning, including route analysis, fuel considerations, and weather assessments, is a foundational best practice.
                Pilots of single-prop aircraft use sophisticated navigational aids to improve route efficiency and safety during the flight.
                The risk posed by unexpected weather or route deviations is reduced by this careful planning.
                An example of a commitment to making the most of the resources at hand for safer and more effective single-prop airplane operations is the integration of technology into navigation.
              </p>
            </div>
          </div>
          <div className="card">
            <div id="video-section">
              <div className="video-container">
                <video width="320" height="240" controls poster={`./images/video-poster.jpg`}>
                  <source src={Video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Blogs;
