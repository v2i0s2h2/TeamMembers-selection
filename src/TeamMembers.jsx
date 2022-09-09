// component for Employees.jsx in this component we return all employee using  TeamMemberCard component

import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({employees,selectedTeam,handleEmployeeCardClick}) => {

  return (
    employees.map((employee) => (
      <TeamMemberCard  employee={employee} selectedTeam={selectedTeam} handleEmployeeCardClick={handleEmployeeCardClick} />
    ))
  )
}

export default TeamMembers
