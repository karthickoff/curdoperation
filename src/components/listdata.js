import { useEffect, useState } from 'react';
import Logout from './logout';

function ListData() { 
    var [name,setName]=useState('');    
    const [newarr,setNewArr]=useState([]);
    var totatl=[]; 
    const auth=localStorage.getItem('Authentication'); 
    
    const handleOnchange =(e) =>{
      
        setName(e.target.value)
    }
    const addUser =() =>{  
        console.log("name",name);
        setNewArr([...newarr,name])
        // newArr.push("01");
        setName('')    
    }  
    console.log(newarr); 
    const deleteItem =(e) =>{
        console.log("dele index",e) 
        for(var i=0;i<newarr.length;i++){
            if(newarr[i]!=newarr[e]){
                totatl.push(newarr[i])
            }
        } 
        setNewArr(totatl);

    }
    return( 
        <div> 
            <Logout/>
            <h3>Enter user Name</h3>
           <div className="input-group mb-3">
                <input type="text" name='username' value={name} className="form-control" placeholder="Enter username" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={handleOnchange}style={{width:"50%"}} />
                <div class="input-group-append">
                    <button className="btn btn-outline-dark" type="button" id="button-addon2" onClick={addUser}>Add</button>
                </div>
            </div>  
         
            <div>
                <div><p>Name List :</p></div>
            <div>{newarr.map((entry,index) =>
          <div className='container'> <span>{index+1} </span>{entry} <span> <button type="button" name={index} class="btn  btn-sm" onClick={ () =>deleteItem(index)}><img   src="https://img.icons8.com/windows/50/000000/macos-close.png"/></button> </span></div>
        )}
        </div>
            </div>
        </div>
    )
} 
export default ListData; 
