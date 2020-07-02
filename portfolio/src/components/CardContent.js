import React, {Component} from 'react';

import Card from './Card/index';

const projects = [{
    id: 1,
    title: "Unique Password",
    image: require("../Assets/Images/key.svg"),
    description: "An easy to use app to quickly create a secure password",
    live: "https://ryanhun7er.github.io/passwordgenerator/",
  }, 
  {
  id: 2,
  title: "Quiz Time!",
  image: require("../Assets/Images/quiz.svg"),
  description: "Take a quick quiz about me!",
  live: "https://ryanhun7er.github.io/quiz/",
  },
  {
  id: 3,
  title: "Daily Planner",
  image: require("../Assets/Images/study.svg"),
  "description": "https://ryanhun7er.github.io/dp/",
  live: "https://meetbetweenbuns.herokuapp.com/",
  },
  {
  id: 4,
  title: "Weather Forecast",
  image: require("../Assets/Images/rain.svg"),
  description: "Check on your local weather or weather of a city you plan to visit",
  live: "https://ryanhun7er.github.io/weather/",
  },
  {
  id: 5,
  title: "Space! Planets",
  image: require("../Assets/Images/space.svg"),
  description: "Keep your thoughts organized in one place with this NodeJs and Express application",
  live: "Application to see data about the planets in our solar system",
  },
  {
  id: 6,
  title: "Route 404",
  image: require("../Assets/Images/route.svg"),
  description: "This application allows you to track your travels ",
  live: "https://route-404.herokuapp.com/",
  },
  {
  id: 7,
  title: "VegaBurger",
  image: require("../Assets/Images/burger.svg"),
  description: "Have a little fun tracking the burgers you consume!",
  live: "https://vegaburger.herokuapp.com/",
  }
  ];

class cardContent extends Component {
    
  constructor(props) {
        super(props); this.state ={projects}
      }
      render(){
    return (
        <>
            {this.state.projects.map(project => (
              <Card
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              live={project.live}
              /> 
            ))}  
        </>
    )
}
}
export default cardContent;
