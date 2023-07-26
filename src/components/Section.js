import React from 'react';

const Section = ({title, subtitle, desc}) => {
    return (
        <div className="section">
            <h2 className="section__title">{title}</h2>
            <h3 className="section__subtitle">{subtitle}</h3>
            <p className="section__desc">{desc}</p>
        </div>
    );
};

export default Section;