import "../styles/userinfo.css";
import React, { useEffect, useState } from "react"; 
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css"; 
import { Link } from "react-router-dom"; 
import { useHistory } from 'react-router-dom';
import Logout from "./logout"; 

export default function Userinfo() {
   
    const existingUser=localStorage.getItem('currentuserEmail');  
    var infoList=JSON.parse(localStorage.getItem('personal-info')); 
    console.log(infoList);  
    var existingResut={};
    infoList.map((data) =>{
        if(data.usermail==existingUser){
            existingResut=data;
           console.log(data); 
        }
    }) 
    console.log("------------result----------",existingResut);

    const existingUserData=existingResut.info;  
    // console.log(existingUserData.date_of_birth);
    const history = useHistory();
    // const d=new Date(existingUserData.date_of_birth?existingUserData.date_of_birth:"") ; 
    const [date, setDate] = useState(existingUserData?new Date(existingUserData.date_of_birth):new Date()); 
    const [name,setName]  = useState(existingUserData?existingUserData.name:"") 
    const [age,setAge]    = useState(existingUserData?existingUserData.age:"")
    const [gender,setGender] =useState(existingUserData?existingUserData.Gender:"Male")   
    const [primarylanguage,setPrimarylanguage]=useState(existingUserData?existingUserData.primary_language:false) 
    const [secondarylanguage,setSecondarylanguage]= useState(existingUserData?existingUserData.secondary_language:false) 
    const [optionallanguage,setOptionallanguage] =useState(existingUserData?existingUserData.optional_language:false)
    const [status,setStatus] =useState(existingUserData?existingUserData.status:false); 
    const [edit,setEdit] =useState(false); 
    const [email,setEmail] =useState(existingUserData?existingUserData.email:"");   
    console.log("dateeeee-",date)
    // const dupDate=date;
    // const dupDate = (date).toString().split('T')[0]; 
    // console.log("--------dupDate---------",dupDate);
    useEffect(() =>{
        
        // existingUser ? alert("user exits"):alert("New user"); 
        if(existingUser){
            // alert(existingUser)  
            // setPrimarylanguage(existingUserData.primary_language);
            //  setStatus(existingUserData.status) 
            // setEdit(true)
        } 
        else{
            alert("New user")
        }
        

    },[])

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
            case 'email' :
                setEmail(e.target.value); 
                break
            case 'status':
                    setStatus(!status);   
                    console.log(status,"inside the switch");
                    break


        } 

    } 
    const saveData = () =>{
        if(parseInt(age)<18){
            alert("age Must be greater than 18");
        }
        else{

        const personDetialslist=localStorage.getItem('personal-info')? JSON.parse(localStorage.getItem('personal-info')):[]; 

        const userData={ 
            usermail:email,  
            info:{
            "name":name,
            "email":email,
            "age":parseInt(age), 
            "Gender":gender, 
            "status":status , 
            "primary_language":primarylanguage,
            "secondary_language":secondarylanguage,
            "optional_language":optionallanguage,
            "date_of_birth":date.toString()
            }
        } 
        if(Object.keys(existingResut).length!==0){
            console.log("------------existingResut-----------",existingResut);
            console.log(" perosns list ",personDetialslist); 
            var newPersonList=personDetialslist.map((data) =>{
                if(data.usermail==existingUser){
                    return userData
                } 
                else{
                    return data
                }
            }) 
            alert("person list updated")
            localStorage.setItem('personal-info',JSON.stringify(newPersonList))


        } 
        else{
        alert("new Data Has Been Added Successfully ") 
        personDetialslist.push(userData); 
        localStorage.setItem('personal-info',JSON.stringify(personDetialslist))


        }
    } 
     history.push('/userinfo');
        // console.log("name",name," age",age,parseInt(age)," gender ",gender,"status ",status);
        // console.log("primary lang",primarylanguage,"sec lang",secondarylanguage,"optio ",optionallanguage)
    }
    const editData = () =>{
        setEdit(true);
    }
    return(
        <div> 
            <Logout/>
            <h2> Enter user Information</h2> 
            <div className="userinfoarea">
            <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    {edit ?
    <input type="text" className="form-control" name="username" aria-describedby="emailHelp" placeholder="Enter Name" onChange={handleOnchange} value={name} />
    :<p>{name}</p>}
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    {edit  ?<input type="text" className="form-control" name="email" aria-describedby="emailHelp" placeholder="Enter Email" onChange={handleOnchange} value={email}/>:<p>{email}</p>}
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Age</label>
    {edit ?<input type="text" className="form-control" name="age" aria-describedby="emailHelp" placeholder="Enter Age" onChange={handleOnchange} value={age}/>:<p>{age}</p>}
  </div>
  <div >
    <label for="exampleInputEmail1">Date Of Birth</label>
    {edit ? <DatePicker
      selected={date}
      onChange={(date) => setDate(date)}
      onCalendarClose={handleCalendarClose}
      onCalendarOpen={handleCalendarOpen}
      maxDate={new Date()}
    />:<p>{date.toString()}</p>}
  </div> 
  <div className="form-group"> 
  <label for="">Gender </label> 
  <div>  {edit ?
    <select name="gender" value={gender}  onChange={handleOnchange}>
        
        <option value="Male">Male</option>
        <option value="Female">Female</option>
    </select>:<p>{gender}</p>}
  </div>
  

  </div> 
 <div>
  <label for="exampleInputEmail1">languages known  {primarylanguage}</label>  
  {edit?
  <div> 
      <div> 
          {primarylanguage?<input type="checkbox" id="topping" name="primarylanguage" value={primarylanguage} onChange={handleOnchange} checked/>:<input type="checkbox" id="topping" name="primarylanguage" value={primarylanguage} onChange={handleOnchange}/>}<span>English</span>
      

      </div>
      <div> 
          {secondarylanguage ? <input type="checkbox" id="topping" name="secondarylanguage" value={secondarylanguage} onChange={handleOnchange} checked /> : <input type="checkbox" id="topping" name="secondarylanguage" value={secondarylanguage} onChange={handleOnchange} />} <span>Tamil</span>
     

      </div> 
      <div>
          {optionallanguage ?  <input type="checkbox" id="topping" name="optionallanguage" value={optionallanguage}  onChange={handleOnchange} checked/> :
            <input type="checkbox" id="topping" name="optionallanguage" value={optionallanguage}  onChange={handleOnchange}/>
          }<span>Telugu</span> 
      </div>

  </div>:
  <p>{primarylanguage?"English":""}  {secondarylanguage? "Tamil":""} {optionallanguage?"telugu":""}</p>}

 </div>
 <div>
     <label>Status</label> 
     {edit?
     <div>
     <label className="switch">
            
        {status ?<input type="checkbox" name="status" onChange={handleOnchange} checked />: <input type="checkbox" name="status" onChange={handleOnchange}/> }
            <span className="slider round"></span>
</label>
     </div>:<p>{status?"active":"Inactive"}</p>}
 </div>

 
</form> 
<div className="btn-area">
<button className="btn btn-primary" onClick={saveData}>save</button> 
{/* <Link to="/edituserinfo"> */}
<button className="btn btn-primary"  onClick={editData}>Edit</button>
{/* </Link> */}
</div>
</div> 


</div>
    )
} 
