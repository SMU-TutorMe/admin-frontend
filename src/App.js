
import React from 'react';
import Requests from './pages/Requests';
import Students from './pages/Students';
import Courses from './pages/Courses';
function App() {
  const [showing,setShowing] = React.useState("");
  function handleRequests(){
    setShowing(prevShowing => "requests")
  }
  function handleStudents(){
    setShowing(prevShowing => "students")
  }
  function handleCourses(){
    setShowing(prevShowing => "courses")
  }

  return(
    <div>
      <nav className='navbar'>
        <a className='navbar-item' onClick={handleRequests}>Requests</a>
        <a className='navbar-item' onClick={handleStudents}>Students</a>
        <a className='navbar-item' onClick={handleCourses}>Courses</a>
      </nav>
      {showing==="requests" && <Requests />}
      {showing==="students" && <Students />}
      {showing==="courses" && <Courses />}

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

<form class="example" action="action_page.php">
  <input type="text" placeholder="Search.." name="search"/>
  <button type="submit"><i class="fa fa-search"></i></button>
</form>
 
      
    </div>
    
    
  )
}

export default App;
