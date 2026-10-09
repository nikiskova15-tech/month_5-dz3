import Favorites from "./components/Favorites"
import  "./index.scss"
import { useThemeStore } from "./zustandStore/useThemeStore";
import Header from "./components/Header";
import { useEffect } from 'react';

function App() {

  const { theme } = useThemeStore();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <Header />
      <Favorites />
    </div>
  )
}

export default App