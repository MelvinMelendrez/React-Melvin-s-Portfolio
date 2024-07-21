import { useState } from 'react';
import Styles from '../styles/components/Perks.module.scss';
import Education from './perks/Education';
import Experience from './perks/Experience';
import Skills from './perks/Skills';

interface Tag {
    text: string;
    component: JSX.Element;
}

const tags: Tag[] = [
    { text: 'education', component: <Education /> },
    { text: 'skills', component: <Skills /> },
    { text: 'experience', component: <Experience /> },
];

const Perks = () => {
    const [activeTab, setActiveTab] = useState<string>('education');

    const handleTabClick = (tabText: string) => {
        setActiveTab(tabText);
    };

    return (
        <div className={Styles.perksBody}>
            <div className={Styles.tabsContainer}>
                {tags.map((tag, index) => (
                    <button
                        key={index}
                        className={activeTab === tag.text ? Styles.activeTab : Styles.tab}
                        onClick={() => handleTabClick(tag.text)}
                    >
                        {tag.text}
                    </button>
                ))}
            </div>
            <div className={Styles.contentContainer}>
                {tags.find(tag => tag.text === activeTab)?.component}
            </div>
        </div>
    );
};

export default Perks;
