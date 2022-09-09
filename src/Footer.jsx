

function Footer() {

  var date = new Date()
  return (<footer className="cotainer">
<div className="row justify-content-center mt-3 mb-3 ">
      <div className="col-8">
        <h1> team member allocation app  {date.getFullYear()}</h1>
      </div>
    </div>

  </footer>)
}
export default Footer