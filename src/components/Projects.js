import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ehr.jpg";
import projImg2 from "../assets/img/ecell.png";
import projImg3 from "../assets/img/conso.png";
import projImg4 from "../assets/img/data1.png";
import projImg5 from "../assets/img/data2.png";
import projImg6 from "../assets/img/Data3.png";
import projImg7 from "../assets/img/rearm.png";
import projImg8 from "../assets/img/Atliq.jpg";
import projImg9 from "../assets/img/Codex.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg11 from "../assets/img/BrandX.png";
import 'animate.css';
import projImg10 from "../assets/img/Grapevine.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Cell Official Website",
      description: "Developed the Front-End of the E-Cell Website",
      imgUrl: projImg2,
      webUrl:"https://www.ecellvnit.org/",
    },
    {
      title: "NIT Raipur CodeUtsav- EHR Block Chain",
      description: "Electronic Health Record System using Block-Chain, Developed front-End of EHR System and connected front-end and backend of the website,Finalists of CodeUtsav", 
      imgUrl: projImg1,
      webUrl:"https://github.com/aryanndwi123/blockchain-eht-ehr"
    },
    {
      title: "Consortium Website",
      description: "Developed Front-End of the Consortium website",
      imgUrl: projImg3,
      webUrl:"https://consortium.ecellvnit.org/"
    },
    // {
    //   title: "Jugaad",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];
  const Data_projects = [
    
    {
      title: "Business Analysis for Atliq Hardwares.",
      description: "Analyzed and interpreted 10 ad hoc business requests, providing valuable insights for the company using MySQL, PowerBI and Canva",
      imgUrl: projImg8,
      webUrl:"https://www.canva.com/design/DAFo5P6v5m4/uFO825PGs3MKuQM1ISR1RQ/edit?utm_content=DAFo5P6v5m4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      title: "Marketing Data Analysis -Codex.",
      description: "Utilized SQL for comprehensive data analysis, deriving valuable insights to drive actionable outcomes using MySQL, Power BI and Canva",
      imgUrl: projImg9,
      webUrl:"https://www.canva.com/design/DAFo5J8PTWU/ZwpXkgKtD6YV4B2p9GjIqg/edit?utm_content=DAFo5J8PTWU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      title: "Maven Market Buisness Analysis",
      description: "Created an interactive dashboard using PowerBI,used Data Analysis Expressions", 
      imgUrl: projImg4,
      webUrl:"https://drive.google.com/file/d/1mF0f_SRw1RoyMyhioGZr4UoGQbaDV4Zz/view?usp=sharing"
    },
    {
      title: "Spotify Top 50 songs Analysis",
      description: "Analyzed and made a report of various parameters influencing popularity of songs",
      imgUrl: projImg5,
      webUrl:"https://drive.google.com/file/d/1atI1BdKI67fXmWHr2Ps1aVANr-i_d-AX/view?usp=sharing"
    },
    {
      title: "Sales Analysis report of TechnoEdge Company",
      description: "Created a Sales report of TechoEdge Company",
      imgUrl: projImg6,
      webUrl:"https://drive.google.com/file/d/1hDqxXRhRBVOrf0vODu7rVkAIYBX8H1O2/view?usp=sharing"
    },
    
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];
  const Case_projects = [
    {
      title: "Healthcoco",
      description: "Devised a go-to-market strategy for their vertical named BrandX, focusing on dentists in USA",
      imgUrl: projImg11,
      webUrl:"https://www.canva.com/design/DAFxUtCbYeg/zAYAfc3Wx5GsdJ6y14PfrQ/edit?utm_content=DAFxUtCbYeg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },   
    {
      title: "Launching Job Portal Feature on Grapevine- Product Challenge",
      description: "Design & Development",
      imgUrl: projImg10,
      webUrl:"https://www.canva.com/design/DAFo6u5feTY/NmjgDjqYyRb98HqrhmQwVg/edit?utm_content=DAFo6u5feTY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    {
      title: "Re-Arm",
      description: "Ideation Project Advancing in Entrepreneurship, Open Course.", 
      imgUrl: projImg7,
      webUrl:"https://pitch.com/public/286ac6a2-abdd-485d-a773-13f71c70479c"
    }
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Product Management</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Business Analytics</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Web D Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          Case_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          Data_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
