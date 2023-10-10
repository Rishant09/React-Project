import { Link, useNavigate } from "react-router-dom";
import {useFormik } from "formik";
import axios from "axios";
import { useState, useEffect } from "react";

export function AddVideo(){

    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axios({
            method:'get',
            url: 'http://127.0.0.1:5000/categories'
        })
        .then((response)=>{
            response.data.unshift({CategoryId:-1, CategoryName:'Choose Category'});
            setCategories(response.data);
        })
    },[]);

    const formik = useFormik({
        initialValues: {
            VideoId:0,
            Title:'',
            Url:'',
            Likes:0, 
            Dislikes:0,
            Views:0,
            CategoryId:0
        },
        onSubmit : (values)=>{
            axios({
                method: 'post',
                url: 'http://127.0.0.1:5000/addvideo',
                data: values
            })
            alert('Video Added Successfully..');
            navigate("/admin-home");
        }

    })

    return(
        <div>
            <h3>Add New Video</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Video Id</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="VideoId"/></dd>
                    <dt>Title</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Title"/></dd>
                    <dt>Url</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Url"/></dd>
                    <dt>Likes</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="Likes" /></dd>
                    <dt>Dislikes</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="Dislikes" /></dd>
                    <dt>Views</dt>
                    <dd><input type="number" onChange={formik.handleChange} name="Views" /></dd>
                    <dt>Category</dt>
                    <dd>
                        <select onChange={formik.handleChange} name="CategoryId">
                            {
                                categories.map(category=>
                                    <option value={category.CategoryId} key={category.CategoryId}>
                                        {category.CategoryName.toUpperCase()}
                                    </option>
                                    )
                            }
                        </select>
                    </dd>
                </dl>
                <button className="btn btn-primary">Add Video</button>
            </form>
            <p>
                <Link to="/admin-home">Back to Home</Link>
            </p>
        </div>
    )
}