import './App.css';

const employee ={
  Name: "Jahnavi",
  EmployeeID:"00011145",
  Appointment:"14:40(01-Sep-2021)",
  Email:"jahnavi@gmail.com",
  Phone:"123456789",
  profileImg:'https://www.w3schools.com/howto/img_avatar.png',
}

function App() {
  return (
    <div className="container">
      <div className="header">
        <div>
      <div className="content-block">
      <label className="tagnames">{employee.Name}</label>
    </div>
    <div>
      <label className='content-block'>{employee.EmployeeID}</label>
    </div>
    </div>
    <div>
      <button className="button-main">Print</button>
    </div>
    </div>
    <div className="contentmain1">
    <div className="content-block">
      <p className='tagnames'>Appointment <label className="labels">{employee.Appointment}</label></p>
      
    </div>
    <div className="content-block">
      <p className='tagnames'>Email <label className="labels">{employee.Email}</label></p>
      
      
      </div>
      <div className="content-block">
      <p class='tagnames'>Phone <label class="labels">{employee.Phone}</label></p>
      
      
    </div>
    </div>
    <div className="statusMain1">
    <div className="status-main">
      <h3>Status</h3>
      <p>In Progress</p>
    </div>
    <div className="status-main">
      <h3>Door</h3>
      <p>Mark</p>
    </div>
    <div className="status-main">
      <h3>Time</h3>
      <p>14:40(01-Sep-2021)</p>
    </div>
    </div>
    <div class="imgtagmain">
      <div><input type= "checkbox" name= "nm" value= "val"/><img src={employee.profileImg} class="imgtag" alt=''/></div>
    <div> <h3>Jahnavi</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p></div>
   
    </div>
    </div>
  );
}

export default App;
