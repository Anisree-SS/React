import cars from "./data"
function App() {

  const [honda,tesla]=cars;
  const {coloursByPopularity:[hondaTopColour,hondaMidColour],speedStats:{topSpeed :hondaTopSpeed,zeroToSixty:hondazeroToSixty}}=honda;
  const {coloursByPopularity:[teslaTopColour,teslaMidColour],speedStats:{topSpeed :teslaTopSpeed,zeroToSixty:teslazeroToSixty}}=tesla;
  return (
      <>
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Top Speed</th>
              <th>Top Colour</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{tesla.model}</td>
              <td>{teslaTopSpeed}</td>
              <td>{teslaTopColour}</td>
            </tr>
            <tr>
              <td>{honda.model}</td>
              <td>{hondaTopSpeed}</td>
              <td>{hondaTopColour}</td>
            </tr>
          </tbody>
        </table>
      </>
  )
}
export default App
