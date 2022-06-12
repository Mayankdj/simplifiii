import React, { useState } from "react";
import axios from "axios";

function PostF() {
    const url = "https://mockrestapi.herokuapp.com/api/employee"
    const [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        age: ""
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            id: parseInt(data._id),
            name: data.name,
            email: data.email,
            phone: data.phone,
            address: data.address,
            country: data.country,
            age: data.age,
            //Action:data.Action
        })
            .then(res => {
                console.log(res.data)
            })
    }

    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (
        <div>
            <h2>Add an Employee</h2>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e) => handle(e)} id="id" value={data.id}
                    type="text"
                    name="id"
                    required="required"
                    placeholder="Enter id..."
                ></input>
                <input onChange={(e) => handle(e)} id="name" value={data.name}
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Enter a name..."
                ></input>
                <input onChange={(e) => handle(e)} id="email" value={data.email}
                    type="email"
                    name="email"
                    required="required"
                    placeholder="Enter an email..."
                ></input>
                <input onChange={(e) => handle(e)} id="phone" value={data.phone}
                    type="tel"
                    name="phone number"
                    required="required"
                    placeholder="Enter a phone number..."
                ></input>
                <input onChange={(e) => handle(e)} id="address" value={data.address}
                    type="text"
                    name="address"
                    required="required"
                    placeholder="Enter a address..."
                ></input>
                <input onChange={(e) => handle(e)} id="country" value={data.country}
                    type="text"
                    name="country"
                    required="required"
                    placeholder="Enter the country name..."
                ></input>
                <input onChange={(e) => handle(e)} id="age" value={data.age}
                    type="number"
                    name="age"
                    required="required"
                    placeholder="Enter the age..."
                ></input>
                <button>Submit</button>
            </form>
        </div>
    );
}
export default PostF