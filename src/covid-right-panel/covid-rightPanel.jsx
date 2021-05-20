import React from 'react'
import {RightMainCard,MainHeading,CasesTable,TableRow,TableData} from "../styleComponents/styledComponents"
import LineChart from "../Chart/Chart"

const  covidRightPanel = () => {
    return (
        <div className="app__right__panel">
             <RightMainCard>
             <MainHeading>
                 World Wide Cases
             </MainHeading>
             <CasesTable className = "cases__table">
              <TableRow>
                  <TableData>
                   USA
                  </TableData>
                  <TableData>
                   34,500
                  </TableData>
              </TableRow>
              <TableRow>
                  <TableData>
                   Paksitan
                  </TableData>
                  <TableData>
                   25,000
                  </TableData>
              </TableRow>
              <TableRow>
                  <TableData>
                   India
                  </TableData>
                  <TableData>
                   55,000
                  </TableData>
              </TableRow>
              <TableRow>
                  <TableData>
                   USA
                  </TableData>
                  <TableData>
                   34,500
                  </TableData>
              </TableRow>
              <TableRow>
                  <TableData>
                   Paksitan
                  </TableData>
                  <TableData>
                   25,000
                  </TableData>
              </TableRow>
              <TableRow>
                  <TableData>
                   India
                  </TableData>
                  <TableData>
                   55,000
                  </TableData>
              </TableRow>
              <TableRow>
                  <TableData>
                   USA
                  </TableData>
                  <TableData>
                   34,500
                  </TableData>
              </TableRow>
              <TableRow>
                  <TableData>
                   Paksitan
                  </TableData>
                  <TableData>
                   25,000
                  </TableData>
              </TableRow>
              <TableRow>
                  <TableData>
                   India
                  </TableData>
                  <TableData>
                   55,000
                  </TableData>
              </TableRow>
              <TableRow>
                  <TableData>
                   USA
                  </TableData>
                  <TableData>
                   34,500
                  </TableData>
              </TableRow>
              <TableRow>
                  <TableData>
                   Paksitan
                  </TableData>
                  <TableData>
                   25,000
                  </TableData>
              </TableRow>
              <TableRow>
                  <TableData>
                   India
                  </TableData>
                  <TableData>
                   55,000
                  </TableData>
              </TableRow>

             </CasesTable>
              <LineChart/>
             

            </RightMainCard>
        </div>
    )
}

export default covidRightPanel
