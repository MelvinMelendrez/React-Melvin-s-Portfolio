import { useState } from 'react';
import Styles from '../styles/components/perksComponent.module.scss';
import { tags } from '../data';

const PerksComponent: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('skills');

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

export default PerksComponent;
