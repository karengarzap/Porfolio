import React from 'react';
import './about.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Aboutme() {
  return (
    <div className="aboutpagebackground">
      <h3 className="aboutmetext">Nice to meet you!</h3>
      <p className="aboutdetails">
        I am a mexican creative director and project manager specialized in new media, transmedia, and immersive storytelling.
        I am an aspiring UX/UI engineer, currently learning Front-End development, UI design, and UX. I'd love to help facilitate the work between creatives and developers in the IT world.
      </p>
      <Container>
        <Row>
          <Col md={6}>
            <div className="textbackground">
              <h2>SKILLS</h2>
              <h3>Front-End</h3>
              <ul className="skilllist">
                <li>HTML</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
              <h3>Tools</h3>
              <ul className="skilllist">
                <li>Figma</li>
                <li>VS code</li>
                <li>GitHub/Git</li>
                <li>Wordpress</li>
                <li>Spark AR</li>
                <li>XD</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
              </ul>
              <h3>Productivity</h3>
              <ul className="skilllist">
                <li>Salck</li>
                <li>Click Up</li>
                <li>Trello</li>
                <li>GSuit</li>
              </ul>
              <h3>Other</h3>
              <ul className="skilllist">
                <li>Wireframing</li>
                <li>Design thinking</li>
                <li>Atomic design</li>
                <li>Ideation</li>
                <li>Userflows</li>
                <li>Gamification</li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <div className="stacked-wrapper">
              <div className="textbackground stacked">
                <h2>STRENGTHS</h2>
                <ul className="skilllist">
                  <li>Digital native</li>
                  <li>Fast learner</li>
                  <li>Growth Mindset</li>
                  <li>Time management</li>
                  <li>Leadership</li>
                  <li>Communication</li>
                  <li>Critical thinking</li>
                  <li>Digital savvy</li>
                  <li>Creative</li>
                  <li>Autonomous</li>
                  <li>Collaboration</li>
                  <li>Adaptability</li>
                  <li>Team Integration</li>
                  <li>Open-mindedness</li>
                  <li>Problem solving</li>
                  <li>Accountability</li>
                  <li>Professionalism</li>
                  <li>Collaboration</li>
                  <li>Approachability</li>
                </ul>
              </div>
              <div className="textbackground stacked">
                <h2>INTERESTS</h2>
                <ul className="skilllist">
                  <li>Technology</li>
                  <li>Design</li>
                  <li>Innovation</li>
                  <li>Music</li>
                  <li>Cinema</li>
                  <li>Traveling</li>
                  <li>Learning</li>
                  <li>New media</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
