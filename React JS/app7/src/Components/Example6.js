import { Button } from "react-bootstrap";
function Example6(){
    const data = [
        {id:1, fname:"Viraj", lname:"Bhatti", city:"Rajkot"},
        {id:2, fname:"Devarshi", lname:"Tahakar", city:"Rajkot"},
        {id:3, fname:"Viraj", lname:"Bhatti", city:"Rajkot"},
        {id:4, fname:"Devarshi", lname:"Tahakar", city:"Rajkot"},
        {id:5, fname:"Viraj", lname:"Bhatti", city:"Rajkot"},
        {id:6, fname:"Devarshi", lname:"Tahakar", city:"Rajkot"},
        {id:7, fname:"Viraj", lname:"Bhatti", city:"Rajkot"},
        {id:8, fname:"Devarshi", lname:"Tahakar", city:"Rajkot"},
        {id:9, fname:"Viraj", lname:"Bhatti", city:"Rajkot"},
        {id:10, fname:"Devarshi", lname:"Tahakar", city:"Rajkot"},
        {id:11, fname:"Viraj", lname:"Bhatti", city:"Rajkot"},
        {id:12, fname:"Devarshi", lname:"Tahakar", city:"Rajkot"},
        {id:13, fname:"Viraj", lname:"Bhatti", city:"Rajkot"},
        {id:14, fname:"Devarshi", lname:"Tahakar", city:"Rajkot"},
    ];
    return <>
        {
            data.map((tmp) => <p>
                Welcome {tmp.fname} {tmp.lname} to {tmp.city} your id is {tmp.id}
            </p>)
        }
    </>
}

export default Example6;