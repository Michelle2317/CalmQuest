import styles from './CreateProfile.module.css';
import Image from 'next/image';
import ButtonPrimary from '../ButtonPrimary';

export default function CreateProfile() {
        const nextClick = () => {
                if (currentScreen < 4) {
                  setCurrentScreen(currentScreen + 1);
                }
        };

        return (
                <>
                        
                </>
        )
}