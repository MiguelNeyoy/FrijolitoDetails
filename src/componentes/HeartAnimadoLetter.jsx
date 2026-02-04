import { memo } from 'react';
import healthRed from '../assets/healthRed.svg';
import '../styles/HeartAnimationLetter.css';

const HeartAnimadoLetter = memo(() => {
    return (
        <img className='icon-heart' src={healthRed} alt="heart" />
    );
});

HeartAnimadoLetter.displayName = 'HeartAnimadoLetter';

export default HeartAnimadoLetter;