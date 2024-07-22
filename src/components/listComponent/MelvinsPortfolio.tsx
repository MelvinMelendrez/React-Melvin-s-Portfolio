import { tecnologiesAuthmap } from '../../data'
import Styles from '../../styles/components/list/Projects.module.scss'

const Authmap = () => {
  return (
    <div className={Styles.bodyModal}>
      <div className={Styles.header}>
        <img src="https://cdn.sanity.io/images/ohx8wpby/production/b73769b0cb7658d56ca16e1ab80918726c513dcb-1440x777.png" alt="" className={Styles.image} />
        <div>
          <p>Imagine having a secret map on your phone where no one can know your exact location. Our app allows you to explore with complete confidentiality and peace of mind. With an intuitive and sleek interface, you can navigate without the worry of accidentally sharing your whereabouts. Experience freedom and privacy like never before!</p>
          <p>This project integrates Firebase for secure login and registration with Mapbox for interactive map visualization. It offers a seamless authentication experience and advanced mapping features, ideal for building scalable and secure applications.</p>
          <button>live</button>
          <button>github</button>
        </div>
      </div>
      <div className={Styles.footer}>

        <div className={Styles.framework}>
          <span className={Styles.tecnologiesTitle}>framework</span>
          <div className={Styles.frameworkContainer}>
            <div className={Styles.frameworkCard}>
              <img src='https://cdn.sanity.io/images/ohx8wpby/production/34be54263e18fa2aea611c6b3b388b76e978e7d7-64x64.png' alt='a' className={Styles.frameworkImage} />
              <span>React</span>
            </div>
          </div>
        </div>

        <div className={Styles.tecnologies}>
          <span className={Styles.tecnologiesTitle}>technologies</span>
          <div className={Styles.tecnologiesContainer}>
            {tecnologiesAuthmap.map(({ text, image }) => (
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