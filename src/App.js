import {useState, useEffect, useRef} from 'react';

import _throttle from 'lodash/throttle';

import AnimatedName from './Components/AnimatedName';

// import nameImage from './assets/name-proper-size.png';
import arrowImage from './assets/arrow.png';
// import arrowLeftImage from './assets/arrow-left.png';
import arrowRightImage from './assets/arrow-right.png';
import diplomaImage from './assets/diploma.png';
import {ReactComponent as WideInkBottle} from './assets/wide-ink-new.svg';

import './App.scss';
import './ElementStyles.scss';
import './SpecificStyles.scss';
import './InkBottle.scss';

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

  // Ink Bottle Info
  const [inkBottleTip, setInkBottleTip] = useState(false);
  const inkBottleTipRef = useRef(inkBottleTip);
  const inkBottle = useRef(null);
  let inkBottleClasses = "ink-bottle" + (inkBottleTip ? ' bottle-tipped' : '');
  let inkBlotClasses = "ink-blot" + (inkBottleTip ? ' ink-blot-show' : '');

  // Ink Blot Info
  const [inkBlotScale, setInkBlotScale] = useState(0);
  const inkBlotSectionRef = useRef(null);
  let inkBlotScaleX = inkBlotScale * 4;
  inkBlotScaleX = inkBlotScaleX > 1 ? 1 : inkBlotScaleX;
  let inkBlotTransform = "translate(475, 5) scale(" + inkBlotScaleX + ", " + inkBlotScale + ") translate(-475, -5)";


  // const [scrollAmt, setScrollAmt] = useState(0);
  const handleInkScroll = () => {
    // let currentScrollAmount = window && window.pageYOffset;
    let windowHeight = window && window.innerHeight;

    // Ink Bottle Tip Animation
    if (!(inkBottleTipRef && inkBottleTipRef.current) && windowHeight) {
      let inkBottleClientRect = inkBottle && inkBottle.current && inkBottle.current.getBoundingClientRect();
      let inkBottleTop = inkBottleClientRect && inkBottleClientRect.top;
      
      if (inkBottleTop && ((windowHeight * 0.4) > inkBottleTop)) {
        setInkBottleTip(true);
        inkBottleTipRef.current = true;
      }
    }

    if (inkBottleTipRef && inkBottleTipRef.current && inkBlotSectionRef && inkBlotSectionRef.current) {
      let sectionClientRect = inkBlotSectionRef.current.getBoundingClientRect();
      let sectionHeight = sectionClientRect && sectionClientRect.height;
      let sectionTop = sectionClientRect && sectionClientRect.top;
      let visibleBlotBottom = windowHeight - 200;
      let scrollAmt = (sectionTop - visibleBlotBottom) * -1;
      if (0 > scrollAmt) {
        scrollAmt = 0;
      } else if (sectionHeight < scrollAmt) {
        scrollAmt = sectionHeight;
      }
      let blotScale = scrollAmt / sectionHeight;
      setInkBlotScale(blotScale);
    }
    
  }
  
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

  // todo: optimize css and js animations to avoid "will-change" property
  useEffect(() => {
    window.addEventListener('scroll', _throttle(handleScroll, 500), {passive: true});
    window.addEventListener('scroll', _throttle(handleInkScroll, 50), {passive: true});
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleInkScroll);
    }
  }, []);

  return (
    <div className="App">
      <div className="block-wrapper">
        <header className="block">
          <div className="element">
            <AnimatedName />
          </div>
          <div className="element">
            <h1>Welcome to my portfolio page!</h1>
            <p>I am a passionate programmer with an eye for visual design and a love of learning new skills.</p>
          </div>
        </header>
      </div>
      <div className="block-wrapper mobile-only">
        <section className="block">
          <h2>Small Screen Notice</h2>
          <div className="element">
            <h3 className="element-head">The best experience will be on a larger screen.</h3>
            <div className="element-content">
              <p>This page does support mobile viewing, but due to the nature of the content, the most dynamic and easy-to-read experience will be on a larger screen.</p>
            </div>
          </div>
        </section>
      </div>
      <div className="block-wrapper has-ink-spill" ref={inkBlotSectionRef}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1200" className={inkBlotClasses} preserveAspectRatio="none">
          <defs>
            <radialGradient id="ink-spread-gradient" cx="0.5" cy="0.5" r="0.55">
              <stop offset="80%" stopColor="white"/>
              <stop offset="100%" stopColor="black"/>
            </radialGradient>
          </defs>
          <mask id="ink-blot-mask">
            <path className="ink-blot-expand" d="M1577.4.2c.6,198.5-40.4,234.6-108.7,403.2-99.7,247.4-198.2,568.4-351.6,735.1-129.9,141.1-444.5,159.1-633,159.1-377.5,0-658.6-181.8-805.7-545.6-377.7-722-378-777.5,0-1499.6,147.1-363.7,428.2-545.6,805.7-545.6,188.5,0,503.1,18,633,159.1C1270.5-967.3,1369-646.3,1468.7-399,1536.6-230.7,1577.1-197.3,1577.4.2Z" fill="url(#ink-spread-gradient)" transform={inkBlotTransform}/>
          </mask>
          <rect className="ink-blot-bg ink-blot-bg-mobile" x="10" y="5" width="880" height="1190" rx="300" ry="20" mask="url(#ink-blot-mask)"/>
          <path className="ink-blot-bg ink-blot-bg-desktop" d="M799.1,1189c-82.1,0-65.2-12.5-153.1-13-25.9-.1-37.2,20-118,22-94.5,2.4-259-11.4-275-15-81-18-118,4-177,4s-69-17.7-67-73,14-66,15-152S14,939,12,753-2,548,4,487s12-58,13-131S0,285.3,0,219.2,58,41,142.2,40C384,37,420,5,474,3,538,.6,590,29,738,36A882.4,882.4,0,0,1,851.2,49C867.1,49,899,60,899,77.8,899,156,872.4,188,877,254c4,57,10.9,104.5,13,225,1.3,72.8-6.3,110.5-10.7,236.2S893,1046.3,892,1101.1,881.3,1189,799.1,1189Z" mask="url(#ink-blot-mask)"/>
        </svg>
        <WideInkBottle className={inkBottleClasses} ref={inkBottle} />
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
      </div>
      <div className="block-wrapper">
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
      </div>
      <div className="block-wrapper">
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
    </div>
  );
}

export default App;
