import Styles from '../../styles/components/perks/abilities.module.scss';
import { AbilitiesCards } from '../../data';

const Abilities = () => {
    return (
        <div className={Styles.bodyAbilities}>
            <span className={Styles.Title}>abilities</span>
            <p className={Styles.Description}>I have developed a diverse skill set throughout my career, allowing me to tackle a wide range of projects</p>
            <div className={Styles.cards}>
                {AbilitiesCards.map((card, index) => (
                    <div key={index} className={Styles.card}>
                        <div className={Styles.imageWrapper}>
                            <img src={card.image} alt={`${card.text} icon`} className={Styles.image} />
                        </div>
                        <div className={Styles.content}>
                            <span className={Styles.framework}>{card.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Abilities;
