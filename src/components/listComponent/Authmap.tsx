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
                <img src="https://cdn.sanity.io/images/ohx8wpby/production/223b4126281cddbe28215abe090e5931903adfb9-1437x1503.jpg" alt="" className={Styles.image} />
                <div>
                    <p>Nobody has to know where you are; here is your secret map on your phone</p>
                    <p>login and register page with firebase and mapbox</p>
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