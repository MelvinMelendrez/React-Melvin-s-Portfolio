import Styles from '../../styles/components/perks/skills.module.scss'
import { SkillCards } from '../../data';


const Skills = () => {

    return (
        <div className={Styles.bodySkills}>
            <span className={Styles.Title}>my skills</span>
            <p>I have developed a diverse skill set throughout my career, allowing me to tackle a wide range of projects</p>
            <div className={Styles.cards}>
                {SkillCards.map((card, index) => (
                    <div key={index} className={Styles.card}>
                        <img src={card.image} alt={`${card.text} icon`} className={Styles.skillIcon} />
                        <span>{card.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
