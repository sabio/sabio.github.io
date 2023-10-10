import React, { useEffect, useState } from "react";
import './index.scss';
import useLanguage from "../../state/language";

import experienceJsonEs from "../../assets/docs/experiencia_es";
import educationJsonEs from "../../assets/docs/educacion_es";
import certificationsJsonEs from "../../assets/docs/certificaciones_es";
import otherActivitiesJsonEs from "../../assets/docs/otrasActividades_es";
import experienceJsonEn from "../../assets/docs/experiencia_en";
import educationJsonEn from "../../assets/docs/educacion_en";
import certificationsJsonEn from "../../assets/docs/certificaciones_en";
import otherActivitiesJsonEn from "../../assets/docs/otrasActividades_en";

import cvIngles from '../../assets/docs/CVEng.pdf'
import cvEspanol from '../../assets/docs/CVEsp.pdf'
import { FormattedMessage } from 'react-intl'; 


const jsons = {}
jsons['experienceJson_es'] = experienceJsonEs
jsons['educationJson_es'] = educationJsonEs
jsons['certificationsJson_es'] = certificationsJsonEs
jsons['otherActivitiesJson_es'] = otherActivitiesJsonEs
jsons['experienceJson_en'] = experienceJsonEn
jsons['educationJson_en'] = educationJsonEn
jsons['certificationsJson_en'] = certificationsJsonEn
jsons['otherActivitiesJson_en'] = otherActivitiesJsonEn


function Experience() {
    let [isOpaque, setIsOpaque] = useState(false);
    const { language } = useLanguage(); 

    useEffect(() => {
        setTimeout(()=>setIsOpaque(true), 50);
    }, []);
    
    let classForContainer = isOpaque ? "experience-container" : "experience-container opacity-zero";


    const experienceView = jsons['experienceJson_'+language].map(item => {
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

    const educationView = jsons['educationJson_'+language].map(item => (
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
    
    const certificationsView = jsons['certificationsJson_'+language].map(item => 
        <div className="experience-certification">
            <h4>{item.code} - {item.name}</h4>
            <p className="fromTo"><FormattedMessage id="app.date" />: {item.date}</p>
        </div>
    );
    
    const otherActvitiesView = jsons['otherActivitiesJson_'+language].map(item => 
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
                    <FormattedMessage id="app.eduandexp1" /><a href={cvEspanol} target="_blank" rel="noopener noreferrer"><FormattedMessage id="app.here" /></a><FormattedMessage id="app.eduandexp2" /><a href={cvIngles} target="_blank" rel="noopener noreferrer"><FormattedMessage id="app.here" /></a>.
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