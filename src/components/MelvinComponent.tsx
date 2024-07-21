import Styles from '../styles/components/MelvinComponent.module.scss'

const MelvinComponent = () => {
    return (
        <div className={Styles.melvinBody}>
            <div className={Styles.image}>
                <img src="https://cdn.sanity.io/images/ohx8wpby/production/75c4c0d1be63fe27d655ec76d54407dd40080e8e-199x194.png" alt="" />
            </div>
            <span>melvin</span>
            <span>front end developer</span>
        </div>
    )
}

export default MelvinComponent