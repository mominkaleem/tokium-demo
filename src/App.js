import logo from "./logo.svg";
import "./App.css";
import { Lockscreen } from "@tokium.co/tokiumwrapper";
import "@tokium.co/tokiumwrapper/dist/styles.css";

function App() {
  return (
    <div className="App">
        <Lockscreen style={{ width: '100%', height: '100%' }}>
          <header className="App-header">
            <p>Royalty gated content😎</p>
        </header>
      </Lockscreen>
    </div>
  )
}


export default App;
