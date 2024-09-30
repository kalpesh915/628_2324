import { Button } from "react-bootstrap";
function Example8() {
  const data = [
    { id: 1, fname: "Viraj", lname: "Bhatti", city: "Rajkot", marks: [11, 22, 33] },
    { id: 2, fname: "Devarshi", lname: "Tahakar", city: "Rajkot", marks: [11, 22, 33] },
    { id: 3, fname: "Viraj", lname: "Bhatti", city: "Rajkot", marks: [11, 22, 33] },
    { id: 4, fname: "Devarshi", lname: "Tahakar", city: "Rajkot", marks: [11, 22, 33] },
    { id: 5, fname: "Viraj", lname: "Bhatti", city: "Rajkot", marks: [11, 22, 33] },
    { id: 6, fname: "Devarshi", lname: "Tahakar", city: "Rajkot", marks: [11, 22, 33] },
    { id: 7, fname: "Viraj", lname: "Bhatti", city: "Rajkot", marks: [11, 22, 33] },
    { id: 8, fname: "Devarshi", lname: "Tahakar", city: "Rajkot", marks: [11, 22, 33] },
    { id: 9, fname: "Viraj", lname: "Bhatti", city: "Rajkot", marks: [11, 22, 33] },
    { id: 10, fname: "Devarshi", lname: "Tahakar", city: "Rajkot", marks: [11, 22, 33] },
    { id: 11, fname: "Viraj", lname: "Bhatti", city: "Rajkot", marks: [11, 22, 33] },
    { id: 12, fname: "Devarshi", lname: "Tahakar", city: "Rajkot", marks: [11, 22, 33] },
    { id: 13, fname: "Viraj", lname: "Bhatti", city: "Rajkot", marks: [11, 22, 33] },
    { id: 14, fname: "Devarshi", lname: "Tahakar", city: "Rajkot", marks: [11, 22, 33] },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="table-responsive">
          <table className="table table-hover table-striped">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>City</th>
                <th>Marks</th>
              </tr>
            </thead>

            <tbody>
              {data.map((tmp, key) => (
                <tr key={key}>
                    {/* <td>{key}</td> */}
                    <td>{tmp.id}</td>
                    <td>{tmp.fname}</td>
                    <td>{tmp.lname}</td>
                    <td>{tmp.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Example8;
