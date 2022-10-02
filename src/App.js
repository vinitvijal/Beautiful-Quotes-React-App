import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [Quote, setQuote] = useState({auth:'',message:''});

  useEffect(() => {
    quotesBag()
    console.log('Onload')
  }, []);


    const quotesBag = async () => {
        const res = await fetch('https://api.quotable.io/random')
        const data =  await res.json()
        console.log(data)
        setQuote({auth:data.author,message:data.content})

    }
  return (
    
    <>   
    <header>Quotes - Code Vinu</header>
      <div className="App">
        <div className="backg"></div>
        <h1>{Quote.message} ~ {Quote.auth}</h1>
      </div>
    </>

      
      
  );
}

export default App;
