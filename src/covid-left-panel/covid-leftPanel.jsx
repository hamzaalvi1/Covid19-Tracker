import React from 'react'
import Header from "../header/header"
import CasesDetails from "../CasesDetails/CasesDetails"
import CovidMap from "../Map/CovidMap"
import SecondMap from "../Map/secondMap"


const  covidLeftPanel = () => {
    return (
        <div className="app__leftPanel">
          
            <Header/>
            <CasesDetails/>
            {/* <CovidMap/> */}
            <SecondMap/>
            
        </div>
    )
}

export default covidLeftPanel
