import { ReactElement } from 'react';
import './Words.style.css';

interface WordsInterface {
    word: String;
}

const Words = (props: WordsInterface): ReactElement => {
    return <div className="words">{props.word}</div>;
};

export default Words;
