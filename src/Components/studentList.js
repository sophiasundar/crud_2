import { allStudent } from "./allStudents";
import Student from "./students";


const StudentList=()=>{
    return(
       <>
        <div className='App'>

            {
                allStudent.map((element,index)=>{

                  return <Student {...element} key={index}/>

                })
            }

        </div>
      </>
    )
}

export default StudentList;

