import { useEffect, useState } from "react"; 
import { Link } from "react-router-dom";
export default function Userdetials(){ 
    const [data,Setdata]=useState([]);
    useEffect(()=>{
        const url="https://gorest.co.in/public/v2/users"; 
        const fetchData = async () => {
            try {
              const response = await fetch(url);
              const info = await response.json(); 
                localStorage.setItem("user_detials", JSON.stringify(info));
          
               Setdata(info)
            //   console.log(data);
            } catch (error) {
              console.log("error", error);
            }
          };
      
          fetchData();
    },[]); 

console.log("------------data---",data);  
const newList=[];
if(data.length==0){ 
    newList.push( 
        <div>
            <h2 style={{textAlign:"center"}}>no data to display</h2> 
        </div>
    )
} 
else{
for(var i=0;i<5;i++){
newList.push(
<tr>
      <th scope="row">{data[i].id}</th>
      <td>{data[i].name}</td>
      <td>{data[i].email}</td>
      <td>{data[i].gender}</td> 
      <td>{data[i].status}</td>
    </tr>
)
} 
} 

    return(
        <div>
          <h3>List of data </h3>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Gender</th> 
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
  {newList}
  </tbody>
</table> 
<div>
    <Link to='fulluserdata' className="btn btn-warning">View More</Link>
</div>

        </div>
    )
}