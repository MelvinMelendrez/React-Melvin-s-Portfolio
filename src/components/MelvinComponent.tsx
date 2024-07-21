import React from 'react';
import Styles from '../styles/components/MelvinComponent.module.scss';

const MelvinComponent: React.FC = () => {
    return (
        <div className={Styles.melvinBody}>
            <div className={Styles.image}>
                <img
                    src="https://cdn.sanity.io/images/ohx8wpby/production/75c4c0d1be63fe27d655ec76d54407dd40080e8e-199x194.png"
                    alt="Melvin"
                    className={Styles.profileImage}
                />
            </div>
            <span className={Styles.name}>Melvin Melendrez</span>
            <span className={Styles.title}>Front End Developer</span>
        </div>
    );
};

export default MelvinComponent;
