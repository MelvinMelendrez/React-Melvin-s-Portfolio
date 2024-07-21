import Styles from '../../styles/components/list/Projects.module.scss'

const Portfolio = () => {
    return (
        <div>
            <img src="https://cdn.sanity.io/images/ohx8wpby/production/12284ecf9dc8f40d15c63481550d07b9e4fd6325-1229x787.png" alt="" className={Styles.image} />
            <p>My coding journey</p>
            <p>React full stack portfolio with high order components, framer motion animation with sanity backend</p>
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

export default Portfolio