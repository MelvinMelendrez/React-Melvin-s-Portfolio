import Styles from '../../styles/components/list/Projects.module.scss'

const AnimatedPortfolio = () => {
    return (
        <div>
            <img src="https://cdn.sanity.io/images/ohx8wpby/production/19fdc2bb0aa3b0a1faf5646cb8b7d2c8dde2ede9-1440x1520.jpg" alt="" className={Styles.image} />
            <p>Your journey through my projects in motion</p>
            <p>Framer motion, react spring and next ui animations portfolio</p>
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

export default AnimatedPortfolio