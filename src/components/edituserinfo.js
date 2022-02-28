import React, { useState } from "react"; 
import "../styles/edituserinfo.css";
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";
import Logout from "./logout"; 

export default function Editinfo()
{ 
    const userInfo=JSON.parse( localStorage.getItem('personal-info'));  
    console.log(userInfo.date_of_birth); 
    const d=new Date(userInfo.date_of_birth) 
    console.log("-----------d---------",d);
    const [date, setDate] = useState(d);  
    const [name,setName]  = useState(userInfo.name);
    const [age,setAge]  =useState(userInfo.age); 
    const [gender,setGender] = useState(userInfo.Gender);
    const [primarylanguage,setPrimarylanguage]=useState(userInfo.primary_language); 
    const [secondarylanguage,setSecondarylanguage]= useState(userInfo.secondary_language); 
    const [optionallanguage,setOptionallanguage] =useState(userInfo.optional_language); 
    const [status,setStatus] =useState(userInfo.status);
console.log(status," check box ");


const handleOnchange = (e) =>{
    console.log(e.target.checked);
    console.log(e.target.name,e.target.value);


    switch(e.target.name) { 
        case 'username': 
                setName(e.target.value) 
                break 
        case 'age' :
                setAge(e.target.value) 
                break 
        case 'gender': 
                setGender(e.target.value)
                break 
        case 'primarylanguage':
            setPrimarylanguage(!primarylanguage); 
            break 
        case 'secondarylanguage':
            setSecondarylanguage(!secondarylanguage); 
            break; 
        case 'optionallanguage': 
            setOptionallanguage(!optionallanguage); 
            break 
        case 'status':
                setStatus(!status); 
                break


    } 

}
const handleOnsubmit =() =>{
    const userData={
        "name":name,
        "age":parseInt(age), 
        "Gender":gender, 
        "status":status , 
        "primary_language":primarylanguage,
        "secondary_language":secondarylanguage,
        "optional_language":optionallanguage,
        "date_of_birth":date
    } 
    console.log(userData,"edit");  
    localStorage.setItem('personal-info',JSON.stringify(userData))
}
    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened"); 
    console.log(userInfo);
    return(
        <div>
            <Logout/>
            <h3>Edit the personal info here </h3> 
            <div className="edit-area">
 
            <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" name="username" aria-describedby="emailHelp" placeholder="Enter Name" onChange={handleOnchange} value={name} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Age</label>
                        <input type="text" className="form-control" name="age" aria-describedby="emailHelp" placeholder="Enter Age" onChange={handleOnchange} value={age}/>
                    </div>
                    <div >
                        <label for="exampleInputEmail1">Date Of Birth</label>
                        <DatePicker
                        selected={date}
                        onChange={(date) => setDate(date)}
                        onCalendarClose={handleCalendarClose}
                        onCalendarOpen={handleCalendarOpen}
                        />
                    </div> 
                        <div className="form-group"> 
                        <label for="">Gender </label> 
                        <div>
                            <select name="gender"  onChange={handleOnchange} value={gender}>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        

                        </div> 
                        <div>
                        <label for="exampleInputEmail1">languages known </label>  
                        <div>
                            <div>
                                 <input type="checkbox" id="topping" name="primarylanguage" value={primarylanguage}  defaultChecked={primarylanguage} onChange={handleOnchange}/>English
                            </div>
                            <div>
                                 <input type="checkbox" id="topping" name="secondarylanguage" value={secondarylanguage}  defaultChecked={secondarylanguage} onChange={handleOnchange} />Tamil

                            </div>
                            <div>
                                 <input type="checkbox" id="topping" name="optionallanguage" value={optionallanguage}  defaultChecked={optionallanguage}  onChange={handleOnchange}/>Telugu

                            </div>

                        </div>

                        </div>
                            <div>
                                <label>Status</label> 
                                <div>
                                <label className="switch">
                                        <input type="checkbox" name="status" onChange={handleOnchange} value={status}  defaultChecked={status}/>
                                        <span className="slider round"></span>
                            </label>
                                </div>
                            </div>
                            <div className="submit-btn">
                                <button className="btn btn-secondary" onClick={handleOnsubmit} >submit</button>
                            </div>

 
            </form>  
            </div>
           
        </div>
    )
}