import { useEffect, useState } from 'react';
import Atropos from 'atropos/react';
import logo from './asset/logo.png';
import "./app.css";

function App() {
  const [code, setCode] = useState("xxxxxxxxxx");
  useEffect(() => {
    const url = location.href + "&";
    const code = url.split('code=')[1]?.split("&")[0];
    code && setCode(code);
  }, []);

  return <div className="app">
    <Atropos>
      <div className="card">
        <h2>米历兑换码</h2>
        <div>{code}</div>
        <img src={logo}/>
      </div>
    </Atropos>
  </div>;
}

export default App;
