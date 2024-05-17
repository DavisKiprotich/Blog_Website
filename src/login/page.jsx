import styles from '../../'

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>Sign in with Google</div>
            <div className={styles.socialButton}>Sign in with Instagram</div>
            <div className={styles.socialButton}>Sign in with X</div>
            <div className={styles.socialButton}>Sign in with Facebook</div>
        </div>
    </div>
  )
}

export default LoginPage