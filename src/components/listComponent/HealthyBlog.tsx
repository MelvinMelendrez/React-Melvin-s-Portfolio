import Styles from '../../styles/components/list/Projects.module.scss'

const HealthyBlog = () => {
    return (
        <div>
            <img src="https://cdn.sanity.io/images/ohx8wpby/production/7f7a2f05037be61fb6538c0b96769b70fec544ed-1439x759.png" alt="" className={Styles.image} />
            <p>If you want to be healthy, follow this blog. Here you're going to find articles for you to have better health</p>
            <p>responsive full stack blog</p>
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

export default HealthyBlog