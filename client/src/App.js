import { Box,makeStyles } from '@material-ui/core';
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import Article from './components/Article';
import './App.css';

const useStyle=makeStyles({
   info:{
     marginTop:"110px",
     margin: '0 auto',
     width:"59%", 
   }
})
function App() {
  const classes=useStyle();
  return (
    <Box>
      <Header />
      <Box className={classes.info}>
      <InfoHeader/>
      <Article/>
    </Box>
    </Box>
  );
}

export default App;
