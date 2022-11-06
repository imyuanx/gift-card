import { useEffect, useState } from 'react';
import Atropos from 'atropos/react';
import queryString from 'query-string';
import { decodeParams, encodeParams } from './common/encodeParams';
import logo from './asset/logo.png';
import "./app.css";

interface params {
  code: string,
  title: string,
}

function App() {
  const [code, setCode] = useState("xxxxxxxxxx");
  const [title, setTitle] = useState("米历兑换码");
  const [url, setUrl] = useState("");
  useEffect(() => {
    const parsed = queryString.parse(location.search);
    const cipherParams = parsed?.p;

    if (parsed.code || parsed.title) {
      const p = JSON.stringify({code: parsed.code, title: parsed.title});
      const params = encodeParams(p);
      setUrl(`${location.origin}/?p=` + encodeURIComponent(params));
      return ;
    }

    if (typeof cipherParams !== 'string' || !cipherParams) {
      return ;
    }

    let params = decodeParams(cipherParams);
    try {
      let paramsObj = JSON.parse(params) as params;
      const code = paramsObj.code;
      const title = paramsObj.title;
      code && setCode(code);
      title && setTitle(title);
    } catch(e) {
      alert('解析失败！');
    }
  }, []);

  return <div className="app">
    {
      url ? <div>{url}</div> : <Atropos innerClassName='card-radius'>
        <div className="card card-radius">
          <h2>{title}</h2>
          <div>{code}</div>
          <img src={logo}/>
        </div>
      </Atropos>
    }
  </div>;
}

export default App;
