import React from 'react';
import '../css/style.css';

export default function About() {
    return (
        

  <div classname="container">
    <div classname="section-title text-center center">
      <h2>About Me</h2>
      <hr>
    </div>
    <div classname="row">
      <div classname="col-md-12 text-center"><img src="./NewPort/img/about.jpg" classname="img-responsive"></div>
      <div classname="col-md-8 col-md-offset-2">
        <div classname="about-text">
          <p>By day, I am the Director of Enterprise Technology at The Bakery Cos. By night, I am a student in the Vanderbilt Coding Bootcamp. I am based in Nashville, TN. I got into coding because I love technology and I love building things from scratch. As an artist, I have an eye for design. As a perfectionist, I feel like my work is never done. I have a strong work ethic and I am sure you will be happy with my web development skills. Contact me today and let's get to work!
          </p>
          <p classname="text-center"><a classname="button" href="Assets/Files/Profile.pdf"><img src="Assets/Images/dl.png" id="logo2" width="1" height="1" alt="download logo"><br></a>Download My Resume</p>
        </div>
      </div>
    </div>
  </div>
</div>

)
    
}