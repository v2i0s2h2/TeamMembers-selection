import { useState, useContext } from 'react';
// import DataContext from './context/DataContext';
// in this conponent we will use only these three variable
// employees = array of 12 objects, 
// selectedTeam = it is a variable, it can be only 1 values a or b or c  or d 
// setTeam = it is a function which can change selectedTeam variable name and its value  
// ex if selectedTeam is A and its value is employee id= 1,2,3 .we can change it like selectesTeam is b and its value is employee id = 2,3,5 , now selectedteam is teamB

const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

  // GroupedTeamMembers is a component render when someone click on teams on navbar
  // GroupedTeamMembers default display variable groupedEmployees

  // by using employees, selectedTeam, setTeam we are going to make a variable groupedEmployees and a function setGroupedData , this function can change variable as we understand above
 
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());
  
  // see variable groupedEmployees contain a function name groupTeamMembers() this function will return an array, so finally the variable groupedEmployees is a array of 4 objects 
console.log(groupedEmployees)
  /* you can see it return array containing 4 objects each object has three keys 
collapsed = boolean,
members = array containing employees data,
team = string
(4) [{…}, {…}, {…}, {…}]
0: Object
collapsed: false
members: Array(3)
team: "TeamA"
__proto__: Object
1: Object
collapsed: false
members: Array(3)
team: "TeamB"
__proto__: Object
2: Object
collapsed: true
members: Array(3)
team: "TeamC"
__proto__: Object
3: Object
collapsed: true
members: Array(3)
team: "TeamD"

*/
  function groupTeamMembers() {
    var teams = [];

    var teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
    var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true };
    teams.push(teamA);

    var teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
    var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true };
    teams.push(teamB);

    var teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
    var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true };
    teams.push(teamC);

    var teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
    var teamD = { team: 'TeamD', members: teamDMembers, collapsed: selectedTeam === 'TeamD' ? false : true };
    teams.push(teamD);

    return teams;
  
  }
  
  // in the function below I am going to change variable groupedEmployee

  // when you click on "h4"  the function below will call, if you changed  variable groupedEmployees and then click it will update
  
  function handleTeamClick(event) {
    var newGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);
    setGroupedData(newGroupedData);
    setTeam(event.currentTarget.id);

  }

  // whatever we write in return is our dom we know we are going to display variable groupedEmployees using map , it will only display "h4" contain teamName and we add onclick in "h4" , if someone click it will diaplay a div contining "h5" members name and "p" designation

// <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}> 

  
  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
              Team Name: {item.team}
            </h4>
            <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
              <hr />
              {item.members.map((member) => {
                return (
                  <div key={member.id} className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark"><b>Full Name:</b> {member.fullName}</span>
                    </h5>
                    <p className="card-text text-dark mt-2">
                      <b>Designation:</b> {member.designation}
                    </p>
                  </div>
                );
              })}
            </div>
            <hr />
          </div>
        );
      })}
    </main>
  )
}
export default GroupedTeamMembers