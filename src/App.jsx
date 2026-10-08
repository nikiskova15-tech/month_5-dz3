import Favorites from "./components/Favorites"
import cls from "./App.module.scss"
import { useThemeStore } from "./zustandStore/useThemeStore";
import Header from "./components/Header";

function App() {

  const { theme } = useThemeStore();
  
  return (
    <div className={theme === 'light' ? cls.light : cls.dark} >
      <Header />
      <Favorites />
    </div>
  )
}

export default App
