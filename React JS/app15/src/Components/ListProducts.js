import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListProducts(){
    const APIURL = "https://dummyjson.com/products";

    let[products, setProducts] = useState([]);

    function loadAddProducts(){
        fetch(APIURL).then((response)=>{
            response.json().then((result)=>{
                setProducts(result.products);
            })
        })
    }

    useEffect(()=>{
        loadAddProducts();
    }, []);

    return <>
        <div className="container-fluid">
            <h1 className="bg-primary text-center text-white p-2">List of Products</h1>

            <div className="row">
                {
                    products.map((product, key)=> <div className="col-md-3 card my-2" key={key}>
                        <div className="card-header">
                            <h3>{product.title}</h3>
                        </div>

                        <div className="card-body">
                            <img src={product.thumbnail} className="w-100"></img>
                        </div>

                        <div className="card-footer">
                            <div className="row">
                                <div className="col-md-6">
                                    $ {product.price}
                                </div>
                                <div className="col-md-6">
                                    <Link className="btn btn-primary" to={"/viewproduct/"+product.id}>Know More</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    </>
}

export default ListProducts;