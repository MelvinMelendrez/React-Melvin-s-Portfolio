import { CongratulationMessage } from '.';
import Styles from '../../styles/components/perks/contactMe.module.scss'
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm("xjkbgkke");
    if (state.succeeded) {
        return <CongratulationMessage />;
    }
    return (
        <form onSubmit={handleSubmit} className={Styles.form}>
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
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}


export default ContactForm;