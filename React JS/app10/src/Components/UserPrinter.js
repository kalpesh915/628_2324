import { useParams } from "react-router-dom";

function UserPrinter(){
    let {id} = useParams();
    let {fname} = useParams();
    let {lname} = useParams();
    let {city} = useParams();
    return <>
        <h1>Welcome User {fname} {lname} to {city}</h1>
        <p>Your id is {id}</p>
    </>
}

export default UserPrinter;