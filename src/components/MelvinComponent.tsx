import Styles from '../styles/components/MelvinComponent.module.scss'

const MelvinComponent = () => {
    return (
        <div className={Styles.melvinBody}>
            <div className={Styles.image}>
                image
            </div>
            <span>melvin</span>
            <span>front end developer</span>
        </div>
    )
}

export default MelvinComponent