
import './App.css';
import NotFound from './Components/notFound';
import StudentList from './Components/studentList';
import TeacherList from './Components/teacherList';



function App() {
  return (
    <div className="App">
       
       <TeacherList/>
       <StudentList/>
       <NotFound/>
       
    </div>
  );
}

export default App;
