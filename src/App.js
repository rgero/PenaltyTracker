import {ThemeProvider, CssBaseline} from "@mui/material"

import { customTheme } from './themes/customTheme';
import Header from './components/Header';
import DescriptionModal from "./components/DescriptionModal";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline/>
      <DescriptionModal/>
      <Header/>
    </ThemeProvider>
  );
}

export default App;
