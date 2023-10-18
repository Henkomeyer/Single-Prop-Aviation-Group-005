import React, { useState } from 'react';
import "./css/FAQ.css";
import Logo from './images/Airplane Icon.png';


const Faq = () => {
  const faqData = [
    {
      question: "How often should I perform maintenance on my single prop airplane?",
      answer: "Regular maintenance is crucial for aviation safety. Follow the manufacturer's guidelines and conduct routine inspections. Most single prop airplanes require thorough checks before each flight and scheduled maintenance intervals."
    },
    {
      question: "What are the key pre-flight checks for single prop airplanes?",
      answer: "Before every flight, ensure you check fuel levels, control surfaces, engine performance, and conduct a walk-around inspection. Verify that all systems are functioning correctly to enhance the safety of your flight."
    },
    {
      question: "How does weather affect the safety of single prop flights?",
      answer: "Weather conditions play a significant role in aviation safety. Stay informed about the forecast, and avoid flying in adverse conditions such as thunderstorms, strong winds, or low visibility. Always prioritize safety over the urgency to reach your destination."
    },
    {
      question: "Are there specific training requirements for flying single prop airplanes?",
      answer: "Yes, proper training is essential. Pilots should undergo specific training for single prop airplanes, including understanding the aircraft's limitations, emergency procedures, and handling different weather conditions. Regular proficiency training is recommended."
    },
    {
      question: "What should I do in case of an emergency during a single prop flight?",
      answer: "Stay calm and follow emergency procedures outlined in your training. Aviate, navigate, and communicate should be your priority. Knowing how to handle emergency situations, such as engine failure or unexpected weather changes, is critical for ensuring safety."
    },
    {
      question: "Is there a recommended checklist for pre-flight planning?",
      answer: "Yes, pre-flight planning is vital. Use a checklist that covers weather briefing, route planning, fuel calculations, weight and balance considerations, and an assessment of your personal readiness. Thorough pre-flight planning enhances overall safety."
    },
    {
      question: "How can I enhance communication with air traffic control for improved safety?",
      answer: "Clear and effective communication is crucial. Use proper radio phraseology, follow ATC instructions promptly, and always be aware of the airspace around you. Effective communication ensures that you're aware of other traffic and potential hazards, enhancing overall safety."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    
        <div>
        <div className="faq-container">
            {faqData.map((faq, index) => (
          <div key={index} className={`faq ${openIndex === index ? 'open' : ''}`}>
                <div className="faq-question" onClick={() => handleToggle(index)}>
                {faq.question}
                <img src={Logo} alt="Logo" className="icon"/>
                </div>
                <div className="faq-answer-container">
              {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          </div>
        ))}
      </div>

        </div>
      
  );
};

export default Faq;

