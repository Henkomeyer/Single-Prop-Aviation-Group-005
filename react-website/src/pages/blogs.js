import React from 'react';
import "./css/blog.css"


const Blogs = () => {
		return (
			<div className='top'>
<div class="row">
  <div class="content">
    <div class="card">
      <h2>Pre-flight Checklists</h2>
      <h5>A quick explaination of the different types of checklists used before take-off.</h5>
      <div class="img">
      <image src='react-website\src\pages\images\flight-checklist.jpg'></image>
      </div>
      
      <p>Pre-flight safety and equipment checks are crucial for pilots to perform before each flight.
       One of the methods by which they do this is by completing checklists. Checklists are a list of items 
       or tasks that need to be completed before performing a specific task, in this case flying and safely maintaining an aeroplane.  </p>
       <br></br>
       <p>There have been various checklist devices that provide their own advantages and disadvantages. Some of these devices are paper, scroll, mechanical, computer, and vocal checklists.
        The most used checklist out of these devices is the paper checklist, 
       which consists of the following sections: External Electric & Pneumatic Source- Start, Before Start, After Start, Taxi, Delayed Engine Start, Before Take-off, Climb, In-Range.  </p>
       <br></br>
       <p>
       In addition to these normal checklists, there are also expanded and abnormal checklists that are used by flight crews. 
       The abnormal checklist is used during emergencies by the crew to attempt to revert the situation back to normal whereas the expanded checklist is used for training purposes.
       </p>
    </div>
    <div class="card">
      <h2>TITLE HEADING</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <div class="img">
      <image></image>
      </div>
	  <div>
      <p>Some text..</p>
	  </div>
    </div>
  </div>

</div>

<div class="footer">
  <h2>Footer</h2>
</div>
	</div>	
	);
	
};

export default Blogs;
