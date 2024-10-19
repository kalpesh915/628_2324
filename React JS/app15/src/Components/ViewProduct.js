import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ViewProduct() {
    const { id } = useParams();
    const APIURL = "https://dummyjson.com/products/" + id;

    let [productData, setProductData] = useState({});
    let [tags, setTags] = useState([]);
    let [dimensions, setDimensions] = useState({});
    let [reviews, setReviews] = useState([]);
    let [meta, setMeta] = useState({});

    function getProductDetails() {
        fetch(APIURL).then((response) => {
            response.json().then((result) => {
                setProductData(result);
                setTags(result.tags);
                setDimensions(result.dimensions);
                setReviews(result.reviews);
                setMeta(result.meta);
            })
        });
    }

    useEffect(() => {
        getProductDetails();
    });

    return <>
        <div className="container-fluid">
            <h1 className="bg-primary text-white p-3 text-center">Product Details</h1>

            <div className="row mt-5 p-5">
                <div className="col-md-6">
                    <img src={productData.thumbnail} className="w-100"></img>
                </div>
                <div className="col-md-6">
                    <h1>{productData.title}</h1>
                    <hr />
                    <p><b>Description</b> : {productData.description}</p>
                    <p><b>Category</b> : {productData.category}</p>
                    <p><b>Price</b> : {productData.price}</p>
                    <p><b>Discount</b> : {productData.discountPercentage}</p>
                    <p><b>Rating</b> : {productData.rating}</p>
                    <p><b>Stock</b> : {productData.stock}</p>
                    <p><b>Tags</b> : {tags[0]} / {tags[1]}</p>
                    <p><b>Dimensions</b> : {dimensions.height} X {dimensions.width} X {dimensions.depth}</p>
                    <p><b>Warranty Information</b> : {productData.warrantyInformation}</p>
                    <p><b>Shipping Information</b> : {productData.shippingInformation}</p>
                    <p><b>Availability Status</b> : {productData.availabilityStatus}</p>
                </div>
                <div className="my-3">
                    <div className="row">
                        {
                            reviews.map((review) => <div className="col-md-4 card">
                                <div className="card-header">
                                    <p>{review.reviewerName} ({review.reviewerEmail})</p>
                                </div>
                                <div className="card-body">
                                    <p>{review.date}</p>
                                    <p>{review.comment}</p>

                                </div>

                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ViewProduct;