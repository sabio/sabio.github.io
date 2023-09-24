import React, { useEffect, useState } from "react";
import './index.scss';
import experienceJson from "../../assets/docs/experiencia_es";
import educationJson from "../../assets/docs/educacion_es";
import certificationsJson from "../../assets/docs/certificaciones_es";
import otherActivitiesJson from "../../assets/docs/otrasActividades_es";
import { FormattedMessage } from 'react-intl'; 


function Experience() {
    let [isOpaque, setIsOpaque] = useState(false);

    useEffect(() => {
        setTimeout(()=>setIsOpaque(true), 50);
    }, []);
    
    let classForContainer = isOpaque ? "experience-container" : "experience-container opacity-zero";


    const experienceView = experienceJson.map(item => {
        return (
            <div className="experience-position">
                <h4>{item.position} - {item.company}</h4>
                <p className="fromTo"><FormattedMessage id="app.from" />: {item.from} <br /> <FormattedMessage id="app.to" />: {item.to}</p>
                {item.tasks.map(task => (
                    <>
                        <p className="experience-position-short-description">
                            {task.description}
                        </p>
                        {task.details && (
                            <ul>
                                {task.details.map(detail => (
                                    <li>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </>
                ))}
            </div>
        );
    });

    const educationView = educationJson.map(item => (
        <div className="experience-position">
            <h4>
                {item.course} - {item.school}
            </h4>
            <p className="fromTo">
                <FormattedMessage id="app.from" />: {item.from}
                <br />
                <FormattedMessage id="app.to" />: {item.to}
            </p>
        </div>
    ));
    
    const certificationsView = certificationsJson.map(item => 
        <div className="experience-certification">
            <h4>{item.code} - {item.name}</h4>
            <p className="fromTo"><FormattedMessage id="app.date" />: {item.date}</p>
        </div>
    );
    
    const otherActvitiesView = otherActivitiesJson.map(item => 
        <div className="experience-other-activities">
            <p>
                {item.description}
                <br />
                <a href={item.url} target="_blank">
                    <FormattedMessage id="app.visitWebsite" />
                </a>
            </p>
        </div>
    );

    return(
        <section id="experience-section">
            <div className={classForContainer}>
                <h2>
                    <FormattedMessage id="app.experience.and.education" />
                </h2>
                <p className="experience-first-paragraph">
                    <FormattedMessage id="app.eduandexp1" /><a href="dist/docs/CVEsp.pdf" target="_blank" rel="noopener noreferrer"><FormattedMessage id="app.here" /></a><FormattedMessage id="app.eduandexp2" /><a href="dist/docs/CVEng.pdf" target="_blank" rel="noopener noreferrer"><FormattedMessage id="app.here" /></a>.
                </p>

                <h3>
                    <FormattedMessage id="app.experience" />
                </h3>
                {experienceView}

                <h3>
                    <FormattedMessage id="app.education" />
                </h3>
                {educationView}


                <h3>
                    <FormattedMessage id="app.certifications" />
                </h3>
                {certificationsView}

                <h3>
                    <FormattedMessage id="app.otheractivities" />
                </h3>
                {otherActvitiesView}
            </div>
        </section>
    );

}


export default Experience;