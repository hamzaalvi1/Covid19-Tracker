import './App.css';
import {FlexWrapper} from "./styleComponents/styledComponents"
import CovidLeftPanel from "./covid-left-panel/covid-leftPanel"
import CovidRightPanel from "./covid-right-panel/covid-rightPanel"
import {CovidProvider} from "./CovidContext/GlobalState"
function App() {
  return (
    <CovidProvider>
    <div className="App">

       <FlexWrapper> 
      <CovidLeftPanel/>
      <CovidRightPanel/>
      </FlexWrapper>

      
    </div>
    </CovidProvider>
  );
}

export default App;
