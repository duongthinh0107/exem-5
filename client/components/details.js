import {useRouter} from "next/router";
import axios from "axios";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function DetailProduct(){
    const route = useRouter();
    const [product, setProduct] = useState({})
    console.log(route.query.id)
    useEffect(()=>{
        axios.get(`http://localhost:3001/products/${route.query.id}`).then(result => setProduct(result.data))
    },[])
    console.log(product);
    return(
        <div>
            <Link passHef href="/products">
                <button className="btn btn-primary">List</button>
            </Link>
            <h1>Detail Product</h1>
            <p>Name Product: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <hr/>
            <h4>Description</h4>
            <p>{product.description}</p>
        </div>
    )
}