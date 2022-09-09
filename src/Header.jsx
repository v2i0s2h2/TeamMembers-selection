function Header ({ selectedTeam, teamMemberCount}){
  return <header className="container" >
    <div className="row justify-content-center mt-3 mb-3 ">
        <div className="col-8">

  <h2  >Team Member allocation</h2>
    <h3>  {selectedTeam} has {teamMemberCount} member </h3>
            </div>
 </div>
    
  </header>
}
export default Header