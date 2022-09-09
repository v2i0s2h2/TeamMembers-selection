
import Teams from './Teams'
import TeamMembers from './TeamMembers'

// we don't need to give any reference of parent to get its properties , it happens because of destructring , because of it we can set objects properties or array elements as a variable

function Employees({ selectedTeam, employees, handleEmployeeCardClick, handleTeamSelectionChange }) {

  // all dom is inside this return 
  // we return main component containing two component Teams and TeamMembers, both wrapped inside div in order to design it  

  
  return (
    <main className="container" >
      
      <div className="row justify-content-center mt-3 mb-3 ">
        <div className="col-6">
         
          <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />

        </div>
      </div>
     
      
      <div className="row justify-content-center mt-3 mb-3 ">
        <div className="col-8">
          <div className="card-collection" >


            <TeamMembers employees={employees} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick} />


          </div>
        </div>
      </div>

    </main>
  )
}
export default Employees