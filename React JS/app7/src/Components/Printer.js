function Printer(Props){
    return <>
        <div className="card my-3">
            <div className="card-header text-center">
                <h2>ID : {Props.data.id}</h2>
            </div>

            <div className="card-body">
                <h3 className="text-center p-3">Welcome {Props.data.fname} {Props.data.lname} to {Props.data.city}</h3>
            </div>

            <div className="card-footer">
                {
                    Props.data.marks.map((tmp)=> <span>
                        {tmp}, 
                    </span>)
                }
            </div>
        </div>
    </>
}

export default Printer;