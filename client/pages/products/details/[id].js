import DetailProduct from "../../../components/details";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Detail(){

    return (
        <div className="container">
            <DetailProduct/>
        </div>
    )
}