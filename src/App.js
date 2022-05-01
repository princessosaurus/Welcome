import {useState, useEffect, useRef} from 'react';

import _throttle from 'lodash/throttle';

import AnimatedName from './Components/AnimatedName';

// import nameImage from './assets/name-proper-size.png';
import arrowImage from './assets/arrow.png';
// import arrowLeftImage from './assets/arrow-left.png';
import arrowRightImage from './assets/arrow-right.png';
import diplomaImage from './assets/diploma.png';

import './App.scss';
import './ElementStyles.scss';
import './SpecificStyles.scss';

function App() {

  const detailClass = 'detail-image';

  // Disney Detail Info
  const [animDisneyDetail, setAnimDisneyDetail] = useState(false);
  const animDisneyDetailRef = useRef(animDisneyDetail);
  const disneyDetail = useRef(null);
  let disneyDetailClasses = detailClass + (animDisneyDetail ? ' active-animation' : '');

  // Prev Jobs Detail Info
  const [animPrevJobsDetail, setAnimPrevJobsDetail] = useState(false);
  const animPrevJobsDetailRef = useRef(animPrevJobsDetail);
  const prevJobsDetail = useRef(null);
  let prevJobsDetailClasses = detailClass + (animPrevJobsDetail ? ' active-animation' : '');

  // Education Detail Info
  const [animEducationDetail, setAnimEducationDetail] = useState(false);
  const animEducationDetailRef = useRef(animEducationDetail);
  const educationDetail = useRef(null);
  let educationDetailClasses = detailClass + (animEducationDetail ? ' active-animation' : '');

  // Skills Detail Info
  const [animSkillsDetail, setAnimSkillsDetail] = useState(false);
  const animSkillsDetailRef = useRef(animSkillsDetail);
  const skillsDetail = useRef(null);
  let skillsDetailClasses = detailClass + (animSkillsDetail ? ' active-animation' : '');

  // const [scrollAmt, setScrollAmt] = useState(0);
  const handleScroll = () => {
    // let currentScrollAmount = window && window.pageYOffset;
    let windowHeight = window && window.innerHeight;
    
    // Disney Detail Animation
    if (!(animDisneyDetailRef && animDisneyDetailRef.current) && windowHeight) {
      let disneyDetailClientRect = disneyDetail && disneyDetail.current && disneyDetail.current.getBoundingClientRect();
      let disneyDetailTop = disneyDetailClientRect && disneyDetailClientRect.top;
      
      if (disneyDetailTop && ((windowHeight / 2) > disneyDetailTop)) {
        setAnimDisneyDetail(true);
        animDisneyDetailRef.current = true;
      }
    }

    // Prev Jobs Animation
    if (!(animPrevJobsDetailRef && animPrevJobsDetailRef.current) && windowHeight) {
      let prevJobsDetailClientRect = prevJobsDetail && prevJobsDetail.current && prevJobsDetail.current.getBoundingClientRect();
      let prevJobsDetailTop = prevJobsDetailClientRect && prevJobsDetailClientRect.top;
      
      if (prevJobsDetailTop && ((windowHeight / 2) > prevJobsDetailTop)) {
        setAnimPrevJobsDetail(true);
        animPrevJobsDetailRef.current = true;
      }
    }

    // Education Animation
    if (!(animEducationDetailRef && animEducationDetailRef.current) && windowHeight) {
      let educationDetailClientRect = educationDetail && educationDetail.current && educationDetail.current.getBoundingClientRect();
      let educationDetailTop = educationDetailClientRect && educationDetailClientRect.top;
      
      if (educationDetailTop && ((windowHeight / 2) > educationDetailTop)) {
        setAnimEducationDetail(true);
        animEducationDetailRef.current = true;
      }
    }

    // Skills Animation
    if (!(animSkillsDetailRef && animSkillsDetailRef.current) && windowHeight) {
      let skillsDetailClientRect = skillsDetail && skillsDetail.current && skillsDetail.current.getBoundingClientRect();
      let skillsDetailTop = skillsDetailClientRect && skillsDetailClientRect.top;
      
      if (skillsDetailTop && ((windowHeight / 2) > skillsDetailTop)) {
        setAnimSkillsDetail(true);
        animSkillsDetailRef.current = true;
      }
    }



    // let currentScrollAmt = window.pageYOffset;
    // setScrollAmt(currentScrollAmt);
    
  }

  useEffect(() => {
    window.addEventListener('scroll', _throttle(handleScroll, 500), {passive: true});
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="App">
      <header className="block">
        <div className="element">
          <AnimatedName />
        </div>
        <div className="element">
          <h1>Welcome to my portfolio page!</h1>
          <p>I am a passionate programmer with an eye for visual design and a love of learning new skills.</p>
        </div>
      </header>
      <section className="block mobile-only">
        <h2>Small Screen Notice</h2>
        <div className="element">
          <h3 className="element-head">The best experience will be on a larger screen.</h3>
          <div className="element-content">
            <p>This page does support mobile viewing, but due to the nature of the content, the most dynamic and easy-to-read experience will be on a larger screen.</p>
          </div>
        </div>
      </section>
      <section className="block">
        <h2>Work Experience</h2>
        <div className="element element-has-sub">
          <h3 className="element-head">The Walt Disney Company</h3>
          <h5 className="element-date">July 2015–Present</h5>
          <div className="element-content">
            <div className="element-sub-wrapper">
              <div className="element element-sub">
                <h3 className="element-head">Sr. Web Developer</h3>
                <h4 className="element-subhead">DCCR, Corporate</h4>
                <h5 className="element-date">August 2019–Present</h5>
                <div className="element-content">
                  <ul>
                    <li>
                      Construct full-stack projects using customized technologies to fit the unique needs of each client
                      <ul>
                        <li>Guide the creation of design systems and use them to build modular web applications backed by AWS systems for widespread public viewing (ex. <a href="https://d23expo.com/" target="_blank" rel="noopener noreferrer">D23Expo.com</a> and <a href="https://socialresponsibility.disney.com/" target="_blank" rel="noopener noreferrer">socialresponsibility.disney.com</a>)</li>
                        <li>Collaborate with design/UX to build accessible sites and applications (ex. A fully accessible virtual escape room)</li>
                        <li>Build extensible and modular tools for future iteration: a tool originally created so that employees could create cards to be sent to emergency workers was used numerous times with new features and appearances</li>
                        <li>Maintained and updated pre-existing sites, including implementing AWS functionalities, APIs, and SSO</li>
                      </ul>
                    </li>
                    <li>Lead software supervisor/consultant on large tech collaborations with other teams (ex. <a href="https://d23.com/" target="_blank" rel="noopener noreferrer">d23.com</a> redesign)</li>
                    <li>
                      Foster my interest in innovation and learning to stay sharp as the group’s sole software engineer:
                      <ul>
                        <li>Multitask many diverse projects requiring differing skill sets and the ability to pivot due to changes in direction and prioritization (5-10 projects at once amounting to over one hundred projects on this team)</li>
                        <li>Communicate technical information to non-technical parties to inform timelines, budget, and implementation</li>
                        <li>Anticipate the team’s needs when setting engineering direction and maintaining best practices</li>
                      </ul>
                    </li>
                    <li>Interface with prominent clients to develop critical communications and newsletters, emails from head executives, and live events of all types and audience sizes (ex. Reimagine Tomorrow)</li>
                    <li>Collaborate to hire and mentor multiple web development interns and a web developer</li>
                  </ul>
                </div>
              </div>
              <div className="element element-sub">
                <h3 className="element-head">Software Engineer</h3>
                <h3 className="element-head">Associate Software Engineer</h3>
                <h4 className="element-subhead">Matterhorn, DCPI/DTCI</h4>
                <h5 className="element-date">March 2016–August 2019</h5>
                <div className="element-content">
                  <ul>
                    <li>
                      Researched and learned emerging technologies to integrate into original products
                      <ul>
                        <li>Ideated highly extensible scroll reveal experience which I then created, helped design, and release</li>
                      </ul>
                    </li>
                    <li>
                      Collaborated and offered input in multiple disciplines to bring projects to production
                      <ul>
                        <li>Worked closely with design and product on multiple site redesigns, user interactibles, and new experiences</li>
                        <li>Integrated and optimized use with external technologies such as Google AMP</li>
                        <li>Ex. Shoppable blogs, Disney Yourself Avatar Creator, <a href="https://www.readriordan.com/" target="_blank" rel="noopener noreferrer">readriordan.com</a>, <a href="https://dmedmedia.disney.com/" target="_blank" rel="noopener noreferrer">dtcimedia.disney.com</a>, <a href="https://www.disney.com/" target="_blank" rel="noopener noreferrer">Disney.com</a>, and <a href="https://www.starwars.com/" target="_blank" rel="noopener noreferrer">StarWars.com</a></li>
                      </ul>
                    </li>
                    <li>Involved in leadership roles to maintain excellence in code health, accessibility, and documentation</li>
                  </ul>
                </div>
              </div>
              <div className="element element-sub">
                <h3 className="element-head">Web Development Intern</h3>
                <h4 className="element-subhead">Matterhorn, DCPI/DTCI</h4>
                <h5 className="element-date">July 2015–March 2016</h5>
                <div className="element-content">
                  <ul>
                    <li>Adapted the UI for Matterhorn Core (a structured repository) for efficient usage and consistency</li>
                    <li>Programed new features for WordPress and implemented the redesign of select Disney blogs</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="element element-sub">
              <h3 className="element-head">Participation and Giving Back</h3>
              <div className="element-content">
                <ul>
                  <li>
                    Passion for mentorship and tech evangelism
                    <ul>
                      <li>Mentor for Disney’s Code Rosie program</li>
                      <li>Tech mentor: Warriors Who Code Challenge</li>
                      <li>Taught an Intro to Electronics Class</li>
                      <li>Disney’s Women & Tech committee member (former)</li>
                      <li>Stanford Society of Women Engineers Evening with Industry Panelist</li>
                      <li>Disney Tech Rep. at Stanford Tree Hacks & Cal Tech Hack Days</li>
                    </ul>
                  </li>
                  <li>Leader of Makers at Disney, a group of over 650 Disney employees exploring new technologies</li>
                  <li>Crisis Management-Group leader, Building area leader, crisis response champion (former)</li>
                  <li>
                    Disney Hack days: 
                    <ul>
                      <li>Code teaching game for young children</li>
                      <li>Created in-store interactions (winner)</li>
                      <li>AR iPhone app (explored for continued development)</li>
                      <li>Bot battles (runner up)</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <img src={arrowImage} alt="" className={disneyDetailClasses} id="disney-detail-1" ref={disneyDetail} />
              <img src={arrowImage} alt="" className={disneyDetailClasses} id="disney-detail-2" />
            </div>
          </div>
        </div>
        <div className="element">
          <h3 className="element-head">Ops Analysis and Technology Intern</h3>
          <h4 className="element-subhead">Fox Home Entertainment</h4>
          <h5 className="element-date">February 2015–April 2015</h5>
          <div className="element-content">
            <ul>
              <li>Database manipulation and creation for internal, organizational purposes</li>
              <li>Front-end development of user-interface with database</li>
              <li>Creation of web-based reporting tool with data organization streamlined for swift use in global sales</li>
            </ul>
          </div>
        </div>
        <div className="element">
          <h3 className="element-head">Graphic Design and Web Development Intern</h3>
          <h4 className="element-subhead">Pepperdine University</h4>
          <h5 className="element-date">August 2013–February 2015</h5>
          <div className="element-content">
            <ul>
              <li>Extensive print and web design for events, the Pepperdine Magazine, and the university website</li>
              <li>PHP and HTML coding to update the Pepperdine University website</li>
            </ul>
          </div>
        </div>
        <div className="element">
          <h3 className="element-head">Previous Jobs:</h3>
          <div className="element-content">
            <ul>
              <li>Graphic Design Intern–JJ&A</li>
              <li>Intern–A52</li>
              <li>Waitress</li>
            </ul>
          </div>
          <img src={arrowRightImage} alt="" className={prevJobsDetailClasses} id="prev-jobs-detail" ref={prevJobsDetail} />
        </div>
      </section>
      <section className="block">
        <h2>Education</h2>
        <div className="element">
          <h3 className="element-head">Pepperdine University</h3>
          <h4 className="element-subhead">Major: Computer Science/Mathematics</h4>
          <h4 className="element-subhead">Minor: Multimedia Design</h4>
          <h4 className="element-subhead">GPA 3.84, Magna Cum Laude</h4>
          <h5 className="element-date">August 2011–May 2015</h5>
          <div className="element-content">
            <ul>
              <li>Awards: Regents Scholarship (4 year, academic, $104,000) & Litton Industries Endowed CS Scholarship</li>
              <li>Activities: Resident Advisor, Research Position, Pepperdine Colleges Against Cancer Committee Chair</li>
            </ul>
          </div>
          <img src={diplomaImage} alt="" className={educationDetailClasses} id="education-detail" ref={educationDetail} />
        </div>
      </section>
      <section className="block">
        <h2>Skills</h2>
        <div className="element">
          <div className="element-content">
            <ul>
              <li><span style={{fontWeight:700}}>Software:</span> AWS, React, JavaScript, JQuery, JSON, NodeJS, CSS/SASS, DynamoDB, Grunt, PHP, HTML, HAML, Mustache, WordPress, Git, GitLab, GitHub, Jenkins, Confluence, Agile Development, JIRA, Slack, Homebrew, Backbone, Ruby on Rails, C++, Java, Object- Oriented Programming, Data Structures, Arduino, Python, SQL, MongoDB; Experience with Go, Docker, Swift, Xcode (give me a language; I’ll learn it)</li>
              <li><span style={{fontWeight:700}}>Design:</span> Proficient in UX/UI Design, Photoshop, Illustrator, InDesign, Figma, Sketch, Invision, Keynote</li>
              <li><span style={{fontWeight:700}}>Interests:</span> Communication, Wearable Technology, 3D Modeling/Printing, Triathlete, Golf, Disney Cast Choir, Sewing, Crocheting, Wedding Coordinator, Former Ski Patroller, Winter Park Mountain Host</li>
              <li><span style={{fontWeight:700}}>I do things. And I make things. And they come out cool.</span></li>
            </ul>
          </div>
          <img src={arrowImage} alt="" className={skillsDetailClasses} id="skills-detail-1" ref={skillsDetail} />
          <img src={arrowImage} alt="" className={skillsDetailClasses} id="skills-detail-2" />
          <img src={arrowImage} alt="" className={skillsDetailClasses} id="skills-detail-3" />
          <img src={arrowImage} alt="" className={skillsDetailClasses} id="skills-detail-4" />
        </div>
      </section>
    </div>
  );
}

export default App;
