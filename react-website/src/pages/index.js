import React from 'react';

const Home = () => {
	return (
		
			
    <div>
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
   <link rel="stylesheet" href="/styles.css" />

 
    <script
      src="https://kit.fontawesome.com/dea05e00a8.js"
      crossorigin="anonymous"
    ></script>
    <style>
      
    </style>
  </head>
  
  <body>
    {/* <header>
      <a href="" class="logo animation-rotate">Skeet-it</a>
      <nav>
        <div class="nav-links" id="navLinks">
          <i class="fa fa-times" id="closeIcon"></i>
          <ul id="navItems">
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <i class="fa fa-bars" id="menuBar"></i>
      </nav>
      <nav>
        <ul class="nav-bar">
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header> */}
    <section class="headline-section">
      <h1>
        I’m Aeroplane, <br />
        Glad to see you!
      </h1>
      <p class="move-text">
        I’m a software developer! I can help you build a product, feature or
        website. Look through some of my work and experience! If you like what
        you see and have a project you need coded, don’t hesitate to contact me.
      </p>
      <p class="animation-slide">Ready for Take-Off</p>
      <ul class="header-icons">
        <li>
          <a href="https://twitter.com/shaquillendunda"
            ><img src="images/twitter.svg" alt="Twitter Icon"
          /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/shaquille-ndunda-b13a95107/"
            ><img src="images/linkedinicon.svg" alt="LinkedIn Icon"
          /></a>
        </li>
        <li>
          <a href=""><img src="images/m-logo.svg" alt="M Logo Icon" /></a>
        </li>
        <li>
          <a href="https://github.com/shaqdeff"
            ><img src="images/github.svg" alt="GitHub Icon"
          /></a>
        </li>
        <li>
          <a href=""
            ><img src="images/peace-sign.svg" alt="Peace Sign Icon"
          /></a>
        </li>
      </ul>
    </section>


    <div id="portfolio" class="works"></div>

   
    <article class="modal" id="modal">
      <div class="modal-header">
        <h2 class="title"></h2>
        <div class="subtitle">
          <h3>CANOPY</h3>
          <img src="images/counter.svg" alt="Counter icon" />
          <h3 class="light-text">Back End Dev</h3>
          <img src="images/counter.svg" alt="Counter icon" />
          <h3 class="light-text">2015</h3>
        </div>
        <button data-close-button class="close-btn" type="button">
          &times;
        </button>
      </div>
      <div class="modal-body">
        <img src="images/popup-tonic.svg" class="modal-img" alt="" />
        <div class="modal-desc">
          <p></p>
          <ul class="modal-categories"></ul>
        </div>
      </div>
      <div class="modal-buttons">
        <button class="modal-btn live-btn" type="button">
          See Live
          <img class="btn-img" src="images/btn-Icon-live.svg" alt="" />
        </button>
        <button class="modal-btn code-btn" type="button">
          See Code
          <img class="btn-img" src="images/btn-icon-source.svg" alt="" />
        </button>
      </div>
    </article>
    <div id="overlay"></div>

  
    <section id="about" class="about-section">
      <div class="about-items">
        <h2>
          About <br />
          Myself
        </h2>
        <p class="para-mobile">
          I’m a software developer! <br />
          I can help you build a product, feature or website. Look through some
          of my work and experience! If you like what you see and
          <br />
          have a project you need coded, <br />
          don’t hesitate to contact me.
        </p>
        <p class="para-desk text-scale">
          I’m a software developer! I can help you build a product, feature or
          website. Look through some of my work and experience! If you like what
          you see and have a project you need coded, don’t hesitate to contact
          me.
        </p>
        <p>LET'S CONNECT</p>
        <ul class="icon-list">
          <li>
            <a href="https://twitter.com/shaquillendunda"
              ><img src="images/twitter.svg" alt="Twitter Icon"
            /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/shaquille-ndunda-b13a95107/"
              ><img src="images/linkedinicon.svg" alt="LinkedIn Icon"
            /></a>
          </li>
          <li>
            <a href=""><img src="images/m-logo.svg" alt="M Logo Icon" /></a>
          </li>
          <li>
            <a href="https://github.com/shaqdeff"
              ><img src="images/github.svg" alt="GitHub Icon"
            /></a>
          </li>
          <li>
            <a href=""
              ><img src="images/peace-sign.svg" alt="Peace Sign Icon"
            /></a>
          </li>
        </ul>
        <button class="btn btn-about" type="button">Get my resume</button>
      </div>
      <div class="skills-container">
        <span class="language-title">
          Languages
          <i class="fa fa-angle-down"></i>
        </span>
        <ul class="language-list">
          <li><img src="images/javascript.svg" alt="" />JavaScript</li>
          <li><img src="images/html.svg" alt="" />HTML</li>
          <li><img src="images/css.svg" alt="" />CSS</li>
        </ul>
        <span class="frameworks-title">
          Frameworks
          <i class="fa fa-angle-right"></i>
        </span>
        <hr class="solid" />
        <span class="skills-title">
          Skills
          <i class="fa fa-angle-right"></i>
        </span>
        <hr class="solid" />
      </div>
    </section>

 
    <footer id="contact" class="form-container">
      <section class="contact-form">
        <h2>Contact me</h2>
        <p class="para-mobile">
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding. I’d love to help
          with it.
        </p>
        <p class="para-desk text-scale">
          If you have an application you are interested in developing, a feature
          that you need built or a project that needs coding. I’d love to help
          with it.
        </p>
        <form action="https://formspree.io/f/meqnrqjw" method="POST" id="form">
          <ul>
            <li>
              <input
                type="text"
                name="name"
                placeholder="Full name"
                required
                maxlength="30"
                id="name"
              />
            </li>
            <li>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                id="email"
              />
            </li>
            <li>
              <textarea
               placeholder="Write your message here"
                required
                maxlength="500"
                id="contact-message"
              ></textarea>
            </li>
          </ul>
          <span id="err-msg"></span>
          <button class="btn btn-contact" type="submit">Get In Touch</button>
        </form>
      </section>
    </footer>
    <script src="javascript/form.js"></script>
    <script src="javascript/menu.js"></script>
    <script src="javascript/portfolio.js"></script>
  </body>
</div>

		
	);
};

export default Home;
