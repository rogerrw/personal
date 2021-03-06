import React from 'react';
import Experience from '../components/Experience';
import Project from '../components/Project';

const text = require('../text');

export default class Portfolio extends React.Component {
  render() {
    return (
      <div id="portfolio">
        <h2 className="section-title">-Portfolio-</h2>

        <Experience
            imageSrc={text.DBMI_LOGO}
            title={text.DBMI_TITLE}
            organization={text.DBMI_ORGANIZATION}
            description={text.DBMI_DESCRIPTION}
            skills={text.DBMI_SKILLS}
            location={text.DBMI_LOCATION}
            startDate={text.DBMI_START_DATE}
            endDate={text.DBMI_END_DATE}
            link={text.DBMI_LINK}
        />

        <Experience
            imageSrc={text.MOOVWEB_LOGO}
            title={text.MOOVWEB_TITLE}
            organization={text.MOOVWEB_ORGANIZATION}
            description={text.MOOVWEB_DESCRIPTION}
            skills={text.MOOVWEB_SKILLS}
            location={text.MOOVWEB_LOCATION}
            startDate={text.MOOVWEB_START_DATE}
            endDate={text.MOOVWEB_END_DATE}
            link={text.MOOVWEB_LINK}
        />

        <Experience
            imageSrc={text.IEAS_LOGO}
            title={text.IEAS_TITLE}
            organization={text.IEAS_ORGANIZATION}
            description={text.IEAS_DESCRIPTION}
            skills={text.IEAS_SKILLS}
            location={text.IEAS_LOCATION}
            startDate={text.IEAS_START_DATE}
            endDate={text.IEAS_END_DATE}
            link={text.IEAS_LINK}
        />

        <Experience
            imageSrc={text.SAP_LOGO}
            title={text.SAP_TITLE}
            organization={text.SAP_ORGANIZATION}
            description={text.SAP_DESCRIPTION}
            skills={text.SAP_SKILLS}
            location={text.SAP_LOCATION}
            startDate={text.SAP_START_DATE}
            endDate={text.SAP_END_DATE}
            link={text.SAP_LINK}
        />


        <h3 className="section-title">-Other Projects-</h3>

        <Project
            name={text.MEMORIZE_NAME}
            description={text.MEMORIZE_DESCRIPTION}
            skills={text.MEMORIZE_SKILLS}
        />
        <Project
            name={text.PERSONAL_NAME}
            description={text.PERSONAL_DESCRIPTION}
            skills={text.PERSONAL_SKILLS}
        />
        <Project
            name={text.CALAPPS_NAME}
            description={text.CALAPPS_DESCRIPTION}
            skills={text.CALAPPS_SKILLS}
        />
      </div>
    );
  }
}
