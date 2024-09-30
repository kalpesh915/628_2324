import Printer from "./Printer";
function Example9() {
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
        {
            data.map((tmp) => <Printer data={tmp}></Printer>)
        }
    </>
  );
}

export default Example9;
