import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";
import Link from "next/link";

export default function Update(){
    const route = useRouter()
    const [product, setProduct] = useState({});
    console.log(route.query.id)
    useEffect(()=>{
        const product = axios.get(`http://localhost:3001/products/${route.query.id}`).then((response)=>
            setProduct(response.data)
        )
    }, [])
    const handleAdd= (e)=>{
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit= (id) =>{

        axios.put(`http://localhost:3001/products/${id}`, product).then(() =>
            {console.log("update success");
            }
        )

    }
    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Name"
                           name="name" defaultValue={product.name}
                           onChange={handleAdd }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">price</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                           name="price"
                           defaultValue={product.price}
                           onChange={handleAdd }
                           placeholder="price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">stock</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                           name="stock"
                           defaultValue={product.stock}
                           onChange={handleAdd }
                           placeholder="price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">describe</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                           name="describe"
                           defaultValue={product.description}
                           onChange={handleAdd }
                           placeholder="price"/>
                </div>
                <Link passHef href="/products">
                    <button type="submit" className="btn btn-primary" onClick={()=>handleSubmit(product.id)}>Submit</button>
                </Link>
            </form>
        </div>
    )
}