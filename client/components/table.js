import {useEffect, useState} from "react";
import axios from 'axios';
import Link from "next/link";

export default function TableProduct() {
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/products').then(response => {
            setProducts(response.data);
        });
    }, [status])

    const handleDelete = (id) => {
        let choice = confirm('Are you sure you want to delete this item?');
        if (choice) {
            axios.delete(`http://localhost:3001/products/${id}`).then(response => {
                setStatus(response.data)
            });
        }
    }

    return (
        <div>
            <h1>List of products</h1>
            <Link passHef href="/products/addProduct">
                <button className="btn btn-secondary">Add Products</button>
            </Link>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {products.map((product, index) => (

                        <tr key={product.id} className="lol">
                            <Link passHef href={`/products/details/${product.id}`} key={index} >
                                <td>{product.name}</td>
                            </Link>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>

                            <td>{index + 1}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
                                <Link passHef href={`/products/${product.id}`}>
                                    <span className="btn btn-primary">Update</span>
                                </Link>


                            </td>
                        </tr>


                ))}
                </tbody>
            </table>
        </div>
    )
}