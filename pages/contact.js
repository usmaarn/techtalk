import styles from '/styles/form.module.scss';
import Main from "@/components/layouts/Main";

export default function Contact() {
    return (
        <Main className="grid md:grid-cols-2 gap-10 lg:gap-24 m-5 lg:m-24">
            <h3 className="text-3xl md:col-span-2">Get In Touch</h3>

            <div className="place-self-center">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <form action="" className="flex items-start flex-col gap-2">
                <input className={styles.input} type="text" placeholder="Full Name"/>
                <input className={styles.input} type="text" placeholder="Email Address"/>
                <input className={styles.input} type="text" placeholder="Title"/>
                <textarea className={styles.input} name="" id="" cols="30" rows="10"
                          placeholder="Message"/>
                <button className={styles.button}>Send Message</button>
            </form>
        </Main>
    )
}