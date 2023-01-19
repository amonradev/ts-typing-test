import { ReactElement } from 'react';
import Words from '../../components/Words/Words';
import './App.styles.css';

const App: React.FC = (): ReactElement => {
    const wordsContent: Array<String> = [
        'Teste',
        'Teste',
        'Teste',
        'Teste',
        'Teste',
        'Teste',
        'Teste',
        'Teste',
        'Teste',
        'Teste'
    ];

    return (
        <div className="container">
            <div className="containerContent">
                {wordsContent.map(word => (
                    <Words word={word} />
                ))}
            </div>
        </div>
    );
};

export default App;
