import { Button } from "react-bootstrap";
function Example7() {
  const data = [
    { id: 1, fname: "Viraj", lname: "Bhatti", city: "Rajkot" },
    { id: 2, fname: "Devarshi", lname: "Tahakar", city: "Rajkot" },
    { id: 3, fname: "Viraj", lname: "Bhatti", city: "Rajkot" },
    { id: 4, fname: "Devarshi", lname: "Tahakar", city: "Rajkot" },
    { id: 5, fname: "Viraj", lname: "Bhatti", city: "Rajkot" },
    { id: 6, fname: "Devarshi", lname: "Tahakar", city: "Rajkot" },
    { id: 7, fname: "Viraj", lname: "Bhatti", city: "Rajkot" },
    { id: 8, fname: "Devarshi", lname: "Tahakar", city: "Rajkot" },
    { id: 9, fname: "Viraj", lname: "Bhatti", city: "Rajkot" },
    { id: 10, fname: "Devarshi", lname: "Tahakar", city: "Rajkot" },
    { id: 11, fname: "Viraj", lname: "Bhatti", city: "Rajkot" },
    { id: 12, fname: "Devarshi", lname: "Tahakar", city: "Rajkot" },
    { id: 13, fname: "Viraj", lname: "Bhatti", city: "Rajkot" },
    { id: 14, fname: "Devarshi", lname: "Tahakar", city: "Rajkot" },
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

export default Example7;
