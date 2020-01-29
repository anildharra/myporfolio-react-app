import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="img/my1-eclipse.png"
                alt="avatar"
                style={{height: '100px'}}
                 />
            </div>

            <h2 style={{paddingTop: '0.2em'}}>Kumar Anil</h2>
            <h4 style={{color: 'grey'}}>Technical Consultant</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
            <p>Highlights</p>
<ul>
<li>Known for writing efficient, maintainable and reusable code that preserves privacy and security.</li>
<li>Proficient in object-oriented design, problem solving, complexity analysis, and debugging.</li>
<li>Expert in the interaction between eLearning automation Tool development.</li>
<li>Identifies best practices for the design, development and implementation of learning content while demonstrating creativity, flexibility and innovation in course design.</li>
<li>Regarded as a self-motivated and well organized team player.</li>
<li>Provided oversight and mentorship to a team of developers.</li>
<li>Proficient in Communications, teamwork, organization, sense of urgency and leadership.</li>
<li>Exceptional written, verbal, critical thinking, problem solving, and interpersonal communication skills.</li>
</ul>
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>3/104 Dharam Vir Colony Gharaunda Karnal Haryana PIN 132114</p>
            <h5>Phone</h5>
            <p>+919646179101</p>
            <h5>Email</h5>
            <p>anilishu2006@gmail.com</p>
            <h5>Web</h5>
            <p>ramsonstech.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2004}
              endYear={2006}
              schoolName="Kurukshetra University Kurukshetra"
              schoolDescription="M.sc Computer Science"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={75}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
