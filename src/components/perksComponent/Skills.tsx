import Styles from '../../styles/components/perks/skills.module.scss'
import { SkillCards } from '../../data';


const Skills: React.FC = () => {

    return (
        <div className={Styles.bodySkills}>
            <div className={Styles.cards}>
                <span className={Styles.Title}>skills</span>
                <div className={Styles.cardsContainer}>
                    {SkillCards.map((card, index) => (
                        <div key={index} className={Styles.card}>
                            <img src={card.image} alt={`${card.text} icon`} className={Styles.skillIcon} />
                            <span>{card.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;
