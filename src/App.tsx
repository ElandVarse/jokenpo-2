import './App.scss';
import '@src/styles/global.scss';

import Button from '@components/Button/index';
import InnerScreen from '@components/innerScreen';

function App() {
    return (
        <div className="app">
            <header className="soundExit"></header>

            <main className="screenDisplay">
                <InnerScreen />     
            </main>

            <footer className="row">
                <Button btnType="playerForm" imgName={'rockPlayer'}   />
                <Button btnType="playerForm" imgName={'paperPlayer'}  />
                <Button btnType="playerForm" imgName={'scissorPlayer'}/>
            </footer>
        </div>
    )
}

export default App
