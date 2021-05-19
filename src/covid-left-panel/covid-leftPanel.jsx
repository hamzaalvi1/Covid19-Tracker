import React from 'react'
import Header from "../header/header"
import CasesDetails from "../CasesDetails/CasesDetails"


const  covidLeftPanel = () => {
    return (
        <div className="app__leftPanel">
          
            <Header/>
            <CasesDetails/>
          
        </div>
    )
}

export default covidLeftPanel
