import "../styles/userinfo.css";
import React, { useState } from "react"; 
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css"; 
import { Link } from "react-router-dom"; 
import Logout from "./logout"; 

export default function Userinfo() {
    const [date, setDate] = useState(new Date()); 
    const [name,setName]  = useState("") 
    const [age,setAge]    = useState("")
    const [gender,setGender] =useState("Male")   
    const [primarylanguage,setPrimarylanguage]=useState(false); 
    const [secondarylanguage,setSecondarylanguage]= useState(false); 
    const [optionallanguage,setOptionallanguage] =useState(false); 
    const [status,setStatus] =useState(false);

    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened"); 
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
    const saveData = () =>{
        if(parseInt(age)<18){
            alert("age Must be greater than 18");
        }
        else{

        
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
        console.log(userData);  
        localStorage.setItem('personal-info',JSON.stringify(userData))
        alert("Data Has Been Added Successfully ")
    }
        console.log("name",name," age",age,parseInt(age)," gender ",gender,"status ",status);
        // console.log("primary lang",primarylanguage,"sec lang",secondarylanguage,"optio ",optionallanguage)
    }
    return(
        <div> 
            <Logout/>
            <h2> Enter user Information</h2> 
            <div className="userinfoarea">
            <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" name="username" aria-describedby="emailHelp" placeholder="Enter Name" onChange={handleOnchange} value={name}/>
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
    <select name="gender" value={gender}  onChange={handleOnchange}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select>
  </div>
  

  </div> 
 <div>
  <label for="exampleInputEmail1">languages known </label>  
  <div> 
      <div>
      <input type="checkbox" id="topping" name="primarylanguage" value={primarylanguage} onChange={handleOnchange}/>English

      </div>
      <div>
      <input type="checkbox" id="topping" name="secondarylanguage" value={secondarylanguage} onChange={handleOnchange} />Tamil

      </div> 
      <div>
      <input type="checkbox" id="topping" name="optionallanguage" value={optionallanguage}  onChange={handleOnchange}/>Telugu

      </div>

  </div>

 </div>
 <div>
     <label>Status</label> 
     <div>
     <label className="switch">
            <input type="checkbox" name="status" onChange={handleOnchange} value={status}/>
            <span className="slider round"></span>
</label>
     </div>
 </div>

 
</form> 
<div className="btn-area">
<button className="btn btn-primary" onClick={saveData}>save</button> 
<Link to="/edituserinfo">
<button className="btn btn-primary" >Edit</button></Link>
</div>
</div> 


</div>
    )
} 
