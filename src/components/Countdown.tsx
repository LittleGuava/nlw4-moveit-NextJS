import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true)
    }

    function pauseAndResetCountdown() {
        setIsActive(false)
        clearTimeout(countdownTimeout)
        setTime(0.1 * 60)
    }

    function resetCountdown() {
        pauseAndResetCountdown()
        startCountdown()
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time == 0) {
            setHasFinished(true)
            setIsActive(false)
        }
    }, [isActive, time])

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>


            {
                //isso aqui é um if then lul, que tipo de linguagem precisa de colchete para comentar
            }

            { hasFinished ? (
                <button
                    disabled
                    type="button"
                    className={styles.startCountdownButton}
                    onClick={resetCountdown}
                >
                    Ciclo Terminado
                </button>
            ) : ( <>
                { isActive ? (
                    <button
                        type="button"
                        className={`${styles.startCountdownButton} ${styles.startCountdownButtonActive}`}
                        onClick={pauseAndResetCountdown}
                    >
                        Abandonar Ciclo
                    </button>
                ) : (
                        <button type="button" className={styles.startCountdownButton} onClick={startCountdown}>
                            Iniciar um ciclo
                        </button>
                    )
                }</>
            )} 
        </div >
    );
}