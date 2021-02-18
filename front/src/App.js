// import logo from './logo.svg';
// import './App.css';

function App() {
    return (
        <div className="app">
            <h1 class="title">Spyrise</h1>
            <div class="buttons">
                <div class="row1">
                    <button>Create Room</button>
                    <button>Join Room</button>
                </div>
                <div class="row2">
                    <button>How to Play</button>
                </div>
                <div class="row3">
                    <button>Quit</button>
                </div>
            </div>
            <img src="spy128.png" width={30} height={30} />
        </div>
    );
}

export default App;
