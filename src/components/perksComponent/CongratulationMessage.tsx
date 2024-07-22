import styles from '../../styles/components/perks/CongratulationMessage.module.scss';

const CongratulationMessage = () => {
    return (
        <div className={styles.messageContainer}>
            <div className={styles.messageText}>Congratulations! Your message has been sent successfully.</div>
        </div>
    );
}

export default CongratulationMessage;
