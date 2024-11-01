import styles from './Login.module.scss';

export function Login() {
    return (
        <div className={styles.loginContainer}>
            <h2>Login</h2>
            <form className={styles.loginForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName" className={styles.label}>First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        className={styles.input} 
                        placeholder="Enter your first name"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName" className={styles.label}>Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName" 
                        className={styles.input} 
                        placeholder="Enter your last name"
                    />
                </div>
                <div className={styles.buttonGroup}>
                    <button type="button" className={styles.signUpBtn}>Sign Up</button>
                    <button type="submit" className={styles.submitBtn}>Submit</button>
                </div>
            </form>
        </div>
    );
}