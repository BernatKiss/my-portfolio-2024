import React from "react";
import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss'
import { DiApple, DiAndroid } from 'react-icons/di'
import { FaDev, FaDatabase } from 'react-icons/fa'


const personDetails = [
    {
        label: 'Name',
        value: 'Kiss Bernát'
    },
    {
        label: 'Age',
        value: '29'
    },
    {
        label: 'Country',
        value: 'Hungary'
    },
    {
        label: 'Email',
        value: 'kbernat941008@gmail.com'
    },
    {
        label: 'Contact No',
        value: '+36204115547'
    }
]

const jobSummary = 'I am a passionate and dedicated Front-End Developer with a solid foundation built from completing the Coursera Meta Front-End Developer course. Over the past year, I have honed my skills in HTML, CSS, JavaScript, TypeScript, and React.js. As a beginner in the field, I am eager to apply my knowledge and continuously improve my expertise. I enjoy collaborating with colleagues and am always ready to embrace new challenges. My enthusiasm for learning and growth makes me a valuable team player who is committed to delivering high-quality work.'

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText='About Me'
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="about__content">
                <div className="about__content__personalWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(-900px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                    >

                        <h3>Front End Developer</h3>
                        <p>{jobSummary}</p>

                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(500px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Information</h3>
                        <ul>
                            {
                                personDetails.map((item, i) => (
                                    <li key={i}>
                                        <span className="label">{item.label}</span>
                                        <span className="value">{item.value}</span>
                                    </li>
                                )
                                )
                            }
                        </ul>
                    </Animate>
                </div>

                <div className="about__content__servicesWrapper">
                    <Animate
                        play
                        duration={1.5}
                        delay={1}
                        start={{
                            transform: "translateX(600px)"
                        }}
                        end={{
                            transform: "translateX(0px)"
                        }}
                    >
                        <div className="about__content__servicesWrapper__innerContent">
                            <div>
                                <FaDev size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                            <div>
                                <DiApple size={60} color="var(--yellow-theme-main-color)" />
                            </div>
                        </div>
                    </Animate>
                </div>



            </div>
        </section>
    )
}
export default About