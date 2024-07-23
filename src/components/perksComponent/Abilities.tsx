import Styles from '../../styles/components/perks/abilities.module.scss';
import { AbilitiesCards } from '../../data';

const Abilities: React.FC = () => {
    return (
        <div className={Styles.bodyAbilities}>
            <div className={Styles.cards}>
                <span className={Styles.Title}>abilities</span>
                <div className={Styles.cardsContainer}>
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
        </div>
    );
}

export default Abilities;
