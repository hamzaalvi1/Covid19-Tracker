import './App.css';
import {FlexWrapper} from "./styleComponents/styledComponents"
import CovidLeftPanel from "./covid-left-panel/covid-leftPanel"
import CovidRightPanel from "./covid-right-panel/covid-rightPanel"


function App() {
  return (
    <div className="App">
       <FlexWrapper> 
      <CovidLeftPanel/>
      <CovidRightPanel/>
      </FlexWrapper>

      
    </div>
  );
}

export default App;
