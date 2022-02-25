import { useState } from "react";
import Logout from "./logout"; 
import uparrow from "../images/uparrow.png"; 
import downarrow from "../images/downarrow.png";
import "../styles/fulldetials.css";
export default function FullDetials(){  
    const newData =JSON.parse(localStorage.getItem('user_detials'));  
    const [searchval ,setSearchval] = useState('');  
    const [sorttype,setSorttype] =useState('asc'); 
    const [sortcol,setSortcol] =useState('name'); 
    const [gender,setGender] =useState('All');
    const [status,setStatus] =useState('all');
    const [detials,setDetials]=useState([]); 

    const fullList=[];   
    let result=[];
    
    const handleSearch = (e) =>{
        setSearchval(e.target.value);
        
    } 
    const handleSort  =(e,col) =>{
        // alert("change  to "+e+" "+col); 
        setSorttype(e) 
        setSortcol(col)
        
    } 
    console.log(" new data ",newData);  
    const sortedData = newData.sort((a,b) =>{
        const isReversed =(sorttype==='asc')? 1 : -1;   
        if(sortcol==="name"){
            return isReversed* (a.name.localeCompare(b.name))

        } 
        else{
        return isReversed* (a.email.localeCompare(b.email))

        }

    }) 
 
    // handleonchange 
    const handleOnchange = (e) =>{
        console.log("--handleOnchange--",e.target.value,e.target.id);
        if(e.target.id=="gender"){
            setGender(e.target.value);
            // sortedData=sortedData.filter((data) =>{
            //     // console.log("----++",data);
            //     if(data.gender == gender.toLocaleLowerCase()){ 
            //         console.log("---++---",gender,data);
            //         return data
            //     }
            // })
            // .map((val,key) =>{ 
            //     // console.log("--val-",val.id);
            //     newList.push(
            //         <tr key={key}>
            //         <th scope="row">{val.id}</th>
            //         <td>{val.name} </td>
            //         <td>{val.email}</td>
            //         <td>{val.gender}</td> 
            //         <td>{val.status}</td>
            //       </tr>
            //    )
               
            // }
            // )
        } 
        else{
            setStatus(e.target.value);
        }

    } 
    if(newData){
       const updateData=sortedData.filter((val) =>{
        if(searchval==" "){
            return val
        } 
        else if(val.name.toLowerCase().includes(searchval.toLocaleLowerCase())){
            return val
        }
    }); 
    console.log("---upadated data ",updateData);
    const updatedGenderdata=updateData.map((val,key) =>{ 
        if(val.gender==gender.toLocaleLowerCase()){ 
       return val;

    } 
    else if(gender.toLocaleLowerCase()=="all"){ 
 
       return val;

    }
       
    }
    )
    console.log("-------------updatedGenderdata--------------",updatedGenderdata); 
    updatedGenderdata.map((val,key) =>{ 
        if(val!=undefined){
        if(val.status==status){
            fullList.push(
            <tr key={key}>
            <th scope="row">{val.id}</th>
            <td>{val.name} </td>
            <td>{val.email}</td>
            <td>{val.gender}</td> 
            <td>{val.status}</td>
          </tr>
       )
        } 
        else if(status==="all"){
            fullList.push(
                <tr key={key}>
                <th scope="row">{val.id}</th>
                <td>{val.name} </td>
                <td>{val.email}</td>
                <td>{val.gender}</td> 
                <td>{val.status}</td>
              </tr>
           )
        } 
    }
    })
}
else{
    fullList.push(
        <div>
            <p>No data found</p>
        </div>
    )
} 

//for gender ...  
// .filter((val) =>{
//         if(gender=="All"){ 
//             return val
//         } 
//         else if(val.gender.includes(gender)){
//             console.log("-------for gender ==----",val.gender);
//             return val
//         } 
//     })
// **************  loop
// for(var i=0;i<newData.length;i++){
//     fullList.push(
//     <tr>
//           <th scope="row">{newData[i].id}</th>
//           <td>{newData[i].name}</td>
//           <td>{newData[i].email}</td>
//           <td>{newData[i].gender}</td> 
//           <td>{newData[i].status}</td>
//         </tr>
//     )
//     } 
    return(
        <div >  
        <Logout/>
        <div className="container">  
        <p>Search By Name:</p>
        <input type="text" placeholder="search " value={searchval} onChange={ (e) => handleSearch(e)} className="search-box"/>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name {sorttype==="asc" ? <img src={downarrow} onClick ={(e) => handleSort('desc','name')}/> :<img src={uparrow}  onClick ={(e) => handleSort('asc','name')}/> } </th>
                <th scope="col">Email{sorttype=="asc" ?  <img src={downarrow} onClick ={(e) => handleSort('desc','email')}/>: <img src={uparrow}  onClick ={(e) => handleSort('asc','email')}/> }</th>
                <th scope="col">Gender  
                <select id="gender" value={gender}  onChange={handleOnchange} className="gender-select">
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>

                </select></th> 
                <th scope="col">Status 
                <select id="status" value={status} onChange={handleOnchange} className="status-select">
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="inactive">InActive</option>

                </select></th>
                </tr>
            </thead>
            <tbody>
           {fullList.length==0? 
            <div  className="noData">
            <h3> No Data to display</h3></div>
               :fullList}

            </tbody>
        </table> 
        </div>
       

        </div>
    )
}