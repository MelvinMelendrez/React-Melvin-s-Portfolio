import { CongratulationMessage } from '.';
import Styles from '../../styles/components/perks/contactMe.module.scss'
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm("xjkbgkke");
    if (state.succeeded) {
        return <CongratulationMessage />;
    }
    return (
        <div className={Styles.ContactMeBody}>
            <div className={Styles.buttons}>
                <button onClick={() => window.open('https://github.com/MelvinMelendrez', "_blank")}>
                    github
                </button>
                <button onClick={() => window.open('https://www.linkedin.com/in/melvinmelendrez/', "_blank")}>
                    linkedin
                </button>
            </div>

            <form onSubmit={handleSubmit} className={Styles.form1}>
                <label htmlFor="email">
                    email address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <label>massage</label>
                <textarea
                    id="message"
                    name="message"
                    className={Styles.textarea}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting} className={Styles.submitButton}>
                    Submit
                </button>
            </form>
        </div>
    );
}


export default ContactForm;