import './App.css';
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
function App() {
   // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries
 
   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
     apiKey: "AIzaSyDxrcMlHF9mllhOFMVLFnz-B7WOSDosj5k",
     authDomain: "quotesvinu.firebaseapp.com",
     projectId: "quotesvinu",
     storageBucket: "quotesvinu.appspot.com",
     messagingSenderId: "286825011458",
     appId: "1:286825011458:web:e97263afcfac1697330a1b",
     measurementId: "G-W2Q85R7SY8"
   };
 
   // Initialize Firebase
   const app = initializeApp(firebaseConfig);
   const analytics = getAnalytics(app);
   console.log(analytics)

  const [Quote, setQuote] = useState({auth:'',message:''});

  useEffect(() => {

    quotesBag()
    console.log('Onload')
  }, []);


    const quotesBag = async () => {
        const res = await fetch('https://api.quotable.io/random')
        const data =  await res.json()
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
