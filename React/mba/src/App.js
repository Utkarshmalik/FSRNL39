import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { createContext, useState } from 'react';



export const ThemeContext = createContext();


function App() {

  const [theme, setTheme] = useState("dark");

  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme}} >
       <AppRoutes/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
