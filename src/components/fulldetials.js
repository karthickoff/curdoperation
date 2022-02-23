import Logout from "./logout";
export default function FullDetials(){ 
    const newData =JSON.parse(localStorage.getItem('user_detials')); 
    console.log("--------data get in local storage---------",newData);
    const fullList=[];
for(var i=0;i<newData.length;i++){
    fullList.push(
    <tr>
          <th scope="row">{newData[i].id}</th>
          <td>{newData[i].name}</td>
          <td>{newData[i].email}</td>
          <td>{newData[i].gender}</td> 
          <td>{newData[i].status}</td>
        </tr>
    )
    } 
    return(
        <div >  
        <Logout/>
        <div className="container">
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
            {fullList}
            </tbody>
        </table> 
        </div>
       

        </div>
    )
}