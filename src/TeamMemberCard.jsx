// this component has all functionality ,this conponent will return what we want to return in TeamMember.jsk , in order to make it simple we made this component  , are you getting this if i didn't made three component [Teams,TeamMember,TeamMemberCard ] , code will not look good in Employees component

// we abstract responsibility into functional component

import dog from './images/dog.jpg';
import fog from './images/fog.jpg';


const TeamMemberCard =({employee,selectedTeam,handleEmployeeCardClick})=>{
  return(
     <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick} >


            {(employee.gender === 'male') ? <img src={fog} className="card-img-top" /> : <img src={dog} className="card-img-top" />}


            <div className="card-body" >
              <h5 className="card-title" > fullName:{employee.fullName}</h5>

              <p className="card-text" > <b>designation</b>:{employee.designation}</p>

            </div>
          </div>
         
  )
}
export default TeamMemberCard