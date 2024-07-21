import Styles from '../../styles/components/list/Projects.module.scss'

const GoTravel = () => {
    return (
        <div>
            <img src="https://cdn.sanity.io/images/ohx8wpby/production/bb4499fb72f84eb6818be9593b5c972f42d34b3e-370x720.jpg" alt="" className={Styles.image} />
            <p>You're traveling, and you don't find where to eat or sleep? Search for restaurants and hotels wherever you are</p>
            <p>Application that uses react navigation, google autocomplete and displays the data obtained from an api with tailwin css</p>
            <span>tecnologies</span>
            <li>angular</li>
            <li>typscript</li>
            <li>mapbox</li>
            <li>firebase</li>
            <button>live</button>
            <button>github</button>
        </div>
    )
}

export default GoTravel