import {useState} from "react";
import axios from "axios";
import Link from "next/link";

export default function FormAdd(){
    const [product, setProduct] = useState({});
    const handleAdd= (e)=>{
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit= (e)=>{

        axios.post('http://localhost:3001/products', product).then(() =>
        {console.log("add success");
            }
        )

    }



    return (
        <div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           onChange={handleAdd}
                           placeholder="Name"
                           name="name"
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">price</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                           name="price"
                           onChange={handleAdd } placeholder="price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">stock</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                           name="stock"
                           onChange={ handleAdd } placeholder="price"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1"
                           name="description"
                           onChange={ handleAdd} placeholder="price"/>
                </div>
                <Link passHef href="/products">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </Link>
            </form>
        </div>
    )
}