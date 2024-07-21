import Styles from '../../styles/components/list/Projects.module.scss'

const Authmap = () => {
    const tecnologies = [
        { text: 'Angular', image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg' },
        { text: 'typscript', image: 'https://cdn.iconscout.com/icon/free/png-512/typescript-1-1175078.png' },
        { text: 'mapbox', image: 'https://cdn.icon-icons.com/icons2/2248/PNG/512/mapbox_icon_138401.png' },
        { text: 'firebase', image: 'https://cdn.iconscout.com/icon/free/png-512/firebase-1-282796.png' },
    ]

    return (
        <div className={Styles.bodyModal}>
            <div className={Styles.header}>
                <img src="https://cdn.sanity.io/images/ohx8wpby/production/12284ecf9dc8f40d15c63481550d07b9e4fd6325-1229x787.png" alt="" className={Styles.image} />
                <div>
                    <p>My coding journey</p>
                    <p>React full stack portfolio with high order components, framer motion animation with sanity backend</p>
                    <button>live</button>
                    <button>github</button>
                </div>
            </div>
            <span className={Styles.tecnologiesTitle}>tecnologies</span>
            <div className={Styles.tecnologiesContainer}>
                {tecnologies.map(({ text, image }) => (
                    <div key={text} className={Styles.tecnologiCard}>
                        <img src={image} alt='a' className={Styles.TecnologiesImage} />
                        <span>{text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Authmap