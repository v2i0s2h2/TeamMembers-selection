// component used in Employees component , we prop variable or function we needed for its behavior 

function Teams({selectedTeam,handleTeamSelectionChange}){
  return(
     <select className="form-select form-select-lg" id="teams" value={selectedTeam} onChange={handleTeamSelectionChange} >
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>

  )
}
export default Teams