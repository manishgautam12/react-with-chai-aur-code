import { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider} from './contexts/theme';
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';



function App() {
  const [themeMode,setThemeMode]=useState("light")

  const lightTheme=()=>{
    setThemeMode("light")
  }

  const darkTheme=()=>{
    setThemeMode("dark")
  }

  // actual change in theme
  // useEffect(()=>{
  //  document.querySelector('html').classList.remove("light","dark")
  //  document.querySelector('html').classList.add(themeMode)
  // },[themeMode])


  return (
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="App">
        <div>
          <div>
            <ThemeBtn />
          </div>
          <div>
          <Card />
          </div>
        </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
