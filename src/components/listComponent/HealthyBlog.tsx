import { tecnologiesHealthyBlog } from '../../data'
import Styles from '../../styles/components/list/Projects.module.scss'

const Authmap = () => {


    return (
        <div className={Styles.bodyModal}>
            <div className={Styles.header}>
                <img src="https://cdn.sanity.io/images/ohx8wpby/production/7f7a2f05037be61fb6538c0b96769b70fec544ed-1439x759.png" alt="" className={Styles.image} />
                <div>
                    <p>If you want to be healthy, follow this blog. Here, you'll find a wide range of articles designed to help you improve your health and well-being. From nutrition tips to exercise routines and mental health advice, our blog offers valuable insights and practical advice for a healthier lifestyle. Stay informed, stay motivated, and take control of your health with our expert guidance.</p>
                    <p>responsive full stack blog</p>
                    <button>live</button>
                    <button>github</button>
                </div>
            </div>
            <div className={Styles.footer}>

                <div className={Styles.framework}>
                    <span className={Styles.tecnologiesTitle}>framework</span>
                    <div className={Styles.frameworkContainer}>
                        <div className={Styles.frameworkCard}>
                            <img src='https://cdn.sanity.io/images/ohx8wpby/production/b617829af6b887556765eb9baa3cd69c205a7744-3000x1811.png' alt='a' className={Styles.frameworkImage} />
                            <span>Next</span>
                        </div>
                    </div>
                </div>

                <div className={Styles.tecnologies}>
                    <span className={Styles.tecnologiesTitle}>technologies</span>
                    <div className={Styles.tecnologiesContainer}>
                        {tecnologiesHealthyBlog.map(({ text, image }) => (
                            <div key={text} className={Styles.tecnologiCard}>
                                <img src={image} alt='a' className={Styles.TecnologiesImage} />
                                <span>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authmap