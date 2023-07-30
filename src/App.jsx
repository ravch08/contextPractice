import { createContext, useCallback, useMemo, useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';

export const AppContext = createContext();

function App() {

  const [darkTheme, setDarkTheme] = useState(false);
  const [user, setUser] = useState({ name: 'Vikrant', email: 'vikrant99@gmail.com' })


  const userHandler = useCallback(() => {
    setUser({
      name: 'Ravi',
      email: 'ravi09@gmail.com'
    });
  }, [])

  const themeHandler = useCallback(() => {
    setDarkTheme((prev) => !prev);
  }, [])

  const value = useMemo(() => ({ user, darkTheme, themeHandler, userHandler }), [user, darkTheme, themeHandler, userHandler]);

  return (
    <AppContext.Provider value={value}>
      <div className={darkTheme ? "darkTheme" : "lightTheme"}>
        <Header />
        <About />
      </div>
    </AppContext.Provider>
  )
}

export default App
