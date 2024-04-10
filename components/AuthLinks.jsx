import Link from 'next/link'
import styles from './styles/authLinks.module.css'

const AuthLinks = () => {
  
  const status = 'notauthenticated'
  
  return (
    <>
      {status === 'notauthenticated' ?
      (<Link href='/login'>Login</Link>)
    : (
    <>
    <Link href='/register'>Register</Link>
    <span className={styles.link}>Logout</span>
    </>
    )}
    </>
  )
}

export default AuthLinks