import { allTeacher } from "./allTeacher";
import Teacher from "./teacher";


const TeacherList=()=>{
    return(
       <>
       <div className='App'>

            {

                allTeacher.map((element,index)=>{
                
                    return <Teacher {...element} key={index}/>

                })
            }

       </div>
       </>
    )
}

export default TeacherList;