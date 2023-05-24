import React from 'react';
import './resume.css';

export default function Resume() {
  return (
    <section className="resume-wrapper">
    <div className="resume">
      <div className="resume-container">
        <div className="resume-header">
            <h1>WELCOME TO MY RESUME</h1>
        </div>
        <div className="resume-section">
          <h2>Content Manager</h2>
          <h3>Now Creatives</h3>
          <h4>March 2022 - Now</h4>
          <ul className="respo"> 
            <li>Work with content creators with over 1.5M followers.</li>
            <li>Review up to 10+ videos per month with due diligence, attention
             to detail, content knowledge, and focus on the storyline/flow.
            Ensuring to realize the clients' editing requirements.</li>
            <li>Work alongside a growing international team to identify and
            seize creative opportunities and improve the efficiency of innovative
            operations. As well as areas of improvement in editors'
            creative and technical skills with the goal of helping the team
            grow and develop.</li>
             <li>Assign activities and tasks to team members and ensure their
            completion on time, within budget, and with the required quality
            standards aligned with the creators' vision.</li>
            <li>Manage client relationships and constantly updating the clients'
            styling guide.</li>
            <li>Track and documents the editing outcomes against a set of KPIs
            per reviewed video.</li>
            </ul>

          <h2>Video Editor and content producer</h2>
          <h3>Freelance</h3>
          <h4>October 2021 - August 2022</h4>
          <ul className="respo"> 
            <li>Worked with international clients and national brands.</li>
            <li>Pitched and produced video content.</li>
            <li>Edited different kinds of media such as podcasts, corporate, Amazon products, and educational videos.</li>
          </ul>

          <h2>Social Media Manager</h2>
          <h3>SAE Institute Mexico</h3>
          <h4>October 2021 - February 2022</h4>
          <ul className="respo"> 
             <li>Created and curated content across 4 social media channels ensuring a cohesive online brand identity.</li>
             <li> Pitched, develop, and produced short video content.</li>
            <li>Collaborated with the sales department to design organic and paid media campaigns.</li>
            <li>Stayed on top of relevant trends and topics of the creativev industries.</li>
            <li>Coordinated the different departments to complete content-making on time and with the required quality.</li>
          </ul>

          <h2>Marketing intern</h2>
          <h3>SAE Institute Mexico</h3>
          <h4>September 2018 - October 2021</h4>
          <ul className="respo"> 
            <li>Created an email marketing strategy on Mailchimp, as well as designed the mails.</li>
            <li>Updated and organized 5+ databases with over 20 thousand users in total.</li>
            <li>Managed Wordpress content, and looked for bugs or needed improvements.</li>
            <li>Assisted the design department, and social media manager.</li>
          </ul>

        </div>

        <div className="resume-section">
          <h2>Education</h2>
          <h3>Bachelor’s degree in Transmedia Communications</h3>
          <h4>SAE Institute Mexico</h4>
          <p>2018 - 2021</p>
          <h3>JavaScript Course</h3>
          <h4>Code First Girls</h4>
          <p>2023</p>
          <h3>Meta Front-End Developer Professional Certificate</h3>
          <h4>Coursera</h4>
          <p>2023 - current</p>
          <h3>UI Design Course</h3>
          <h4>EBAC Mexico</h4>
          <p>2023 - current</p>
          <h2 className="margintop">Languages</h2>
          <h3>Spanish</h3>
          <p>Native</p>
          <h3>English</h3>
          <p>Bilingual</p>
        </div>

      </div>
    </div>
    </section>
  );
}
