import styles from "@/styles/form.module.scss";

export const InputBox = (props) => {
    return(
        <div className={styles.inputBox + ' ' + props.className}>
            <label htmlFor="" className={styles.label}>{props.label}</label>
            {props.children}
            <InvalidInput error={props.error} />
        </div>
    )
}

export const Input = (props) => {
    return(
        <InputBox label={props.label}>
            <input {...props} className={styles.input + ' ' + props.className} />
        </InputBox>
    )
}

export const TextArea = (props) => {
    return(
        <InputBox label={props.label}>
            <textarea {...props} className={styles.input + ' ' + props.className} />
        </InputBox>
    )
}

export const InvalidInput = ({error, className}) => {
    return error ?
        <span className={styles.error + ' ' + className}>{error}</span>
        : null;
}

export const Form = (props) => {
    return(
        <form {...props} className={styles.form + ' ' + props.className}>
            {props.children}
        </form>
    )
}

export const Button = (props) => {
    return(
        <button {...props} className={styles.button + ' ' + props.className}>
            {props.children}
        </button>
    )
}