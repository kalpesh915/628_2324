import { useEffect, useState } from "react";

function Students(){

    const APIURL = "http://localhost:3000/students";

    let [sid, setSid] = useState(0);
    let [userdata, setUserdata] = useState([]);
    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    let [email, setEmail] = useState("");
    let [phone, setPhone] = useState("");
    let [gender, setGender] = useState("");
    let [action, setAction] = useState(true);
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(true);

    function handleForm(event){
        event.preventDefault();
        setLoading(true);
        if(action){
            // code for add new record
            fetch(APIURL,{
                method:"post",
                headers:{
                    "accept":"Application/json",
                    "content-type":"Application/json"
                },body: JSON.stringify({fname, lname, email, phone, gender})
            }).then((response)=>{
                response.json().then((result)=>{
                    loadData();
                    resetForm();
                })
            })
        }else{
            // code for update
        }
    }

    useEffect(()=>{
        loadData();
    }, []);

    function loadData(){
        fetch(APIURL).then((response)=>{
            response.json().then((result)=>{
                setUserdata(result);
                setLoading(false);
            });
        });
    }

    function resetForm(){
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        setGender("");
        setSid("");
        setAction(true);
    }
    
    function deleteData(userid){
        // setLoading(true);
        //alert(userid);
        if(window.confirm("Are you sure to delete this data with ID "+userid+" ??")){
            fetch(APIURL+"/"+userid,{
                method:"delete"
            }).then((response)=>{
                response.json().then((result)=>{                    
                    loadData();
                })
            })
        }
    }

    return <>
        <div className="container-fluid">
            <h1 className="bg-primary text-white p-4 text-center">Student API Example</h1>
            <div className="row">
                <div className="col-md-3">
                    <form onSubmit={handleForm}>
                        <div className="my-2 form-floating">
                            <input type="text" name="fname" id="fname" required className="form-control" placeholder="Enter First Name" onInput={(e)=>setFname(e.target.value)} value={fname}></input>
                            <label htmlFor="fname" className="form-label">Enter First Name</label>
                        </div>

                        <div className="my-2 form-floating">
                            <input type="text" name="lname" id="lname" required className="form-control" placeholder="Enter Last Name" onInput={(e)=>setLname(e.target.value)} value={lname}></input>
                            <label htmlFor="lname" className="form-label">Enter Last Name</label>
                        </div>

                        <div className="my-2 form-floating">
                            <input type="email" name="email" id="email" required className="form-control" placeholder="Enter Email Name" onInput={(e)=>setEmail(e.target.value)} value={email}></input>
                            <label htmlFor="email" className="form-label">Enter Email Name</label>
                        </div>

                        <div className="my-2 form-floating">
                            <input type="text" name="phone" id="phone" required className="form-control" placeholder="Enter Phone Number" onInput={(e)=>setPhone(e.target.value)} value={phone} pattern="[0-9]{10,15}"></input>
                            <label htmlFor="phone" className="form-label">Enter Phone Number</label>
                        </div>

                        <div className="my-2 form-floating">
                            <select name="gender" id="gender" required className="form-select" placeholder="Select Gender" onInput={(e)=>setGender(e.target.value)} value={gender}>
                                <option></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <label htmlFor="gender" className="form-label">Select Gender</label>
                        </div>

                        <div className="my-2">
                            {
                                action ? <>
                                    <input type="submit" value="Add New Data" className="btn btn-primary"></input>
                                    <input type="reset" value="Reset" className="mx-2 btn btn-danger"></input>
                                </> : <>
                                <input type="submit" value="Update Data" className="btn btn-primary"></input>
                                <input type="reset" value="Reset" className="mx-2 btn btn-danger" onClick={()=>{}}></input></>
                            }
                        </div>
                    </form>
                </div>

                <div className="col-md-9">
                    <div className="table-responsive">
                        {
                            // Loading Data Code
                            loading ? <><span className="spinner-border  spinner-border-sm"></span> Loading...</> : ""
                        }
                        <table className="table table-hover table-striped">
                            <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>EMail</th>
                                    <th>Phone</th>
                                    <th>Gender</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userdata.map((user, index)=><tr id={index}>
                                        <td>{user.id}</td>
                                        <td>{user.fname}</td>
                                        <td>{user.lname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.gender}</td>
                                        <td>
                                            <button className="btn btn-danger" onClick={()=>deleteData(user.id)}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                            <button className="btn btn-primary mx-2">
                                                <i className="fa fa-pen"></i>
                                            </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Students;