import './App.css';
import Weather from './Weather';


export default function App() {
  return (
    <div className="App">
      <div className='container'>
    
      <Weather defaultCity="Uzhhorod"/>
      <footer>
        This project was coded by Oksana Yuriychuk and is {" "}
      <a href='https://github.com/OksanaYur/week-5-react' 
      target="_blank"
      rel="noreferrer">
        open-sourced on GitHub</a> and <a href='https://flourishing-cajeta-328a3e.netlify.app/' 
      target="_blank"
      rel="noreferrer">
        hosted on Netlify</a>
        </footer>  
        </div> 
        </div>
   );
}


