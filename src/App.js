import { createContext, useState } from "react";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";

export const ThemeContext = createContext();

const App = () => {
  
  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark: isDark,
    setIsDark: setIsDark,
  }

  return (
    <ThemeContext.Provider value={value}>
      <Header />
      <Post />
    </ThemeContext.Provider>
  )
}

export default App;