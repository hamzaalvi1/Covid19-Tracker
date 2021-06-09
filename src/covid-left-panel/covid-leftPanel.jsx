import React from 'react'
import Header from "../header/header"
import CasesDetails from "../CasesDetails/CasesDetails"
import CovidMap from "../Map/CovidMap"


const  covidLeftPanel = () => {
    return (
        <div className="app__leftPanel">
          
            <Header/>
            <CasesDetails/>
            <CovidMap/>
            
        </div>
    )
}

export default covidLeftPanel
