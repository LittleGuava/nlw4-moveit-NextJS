
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src='https://avatars.githubusercontent.com/u/52166187?s=460&u=1ffcb013eb57854acfb7f4e5a75d4604d0fdecd7&v=4' alt='Perfil' />

            <div>
                <strong>Fábio Nunes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1</p>
            </div>
        </div>
    )
}