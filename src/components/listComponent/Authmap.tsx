import Styles from '../../styles/components/list/Projects.module.scss'

const Authmap = () => {
    return (
        <div>
            <img src="https://cdn.sanity.io/images/ohx8wpby/production/223b4126281cddbe28215abe090e5931903adfb9-1437x1503.jpg" alt="" className={Styles.image} />
            <p>Nobody has to know where you are; here is your secret map on your phone</p>
            <p>login and register page with firebase and mapbox</p>
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

export default Authmap