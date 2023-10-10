import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";

export function EditVideo()
{
    const [videos, setVideos] = useState([{VideoId:0, Title:'', Url:'', Likes:0, Dislikes:0, Views:0, CategoryId:0}]);
    const [categories, setCategories] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            VideoId:videos[0].VideoId,
            Title:videos[0].Title,
            Url:videos[0].Url,
            Likes:videos[0].Likes, 
            Dislikes:videos[0].Dislikes,
            Views:videos[0].Views,
            CategoryId:videos[0].CategoryId
        },
        onSubmit: (values) =>{
            axios({
                method:'put',
                url: `http://127.0.0.1:5000/updatevideo/${params.id}`,
                data: values
            })
            alert("Video Updated");
            navigate("/admin-home");
        },
        enableReinitialize: true
    })


    function LoadCategories(){
        axios({
            method:'get',
            url: 'http://127.0.0.1:5000/categories'
        })
        .then((response)=>{
            response.data.unshift({CategoryId:-1, CategoryName:'Choose Category'});
            setCategories(response.data);
        })
    }
    function GetVideo(){
        axios({
            method: 'get',
            url: `http://127.0.0.1:5000/videos/${params.id}`
        })
        .then((response)=>{
            setVideos(response.data);
        })
    }


    useEffect(()=>{
        LoadCategories();
        GetVideo();
    },[]);
    return(
        <div>
            <h3>Edit Video Details</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Video Id</dt>
                    <dd><input type="number" value={formik.values.VideoId} onChange={formik.handleChange} name="VideoId"/></dd>
                    <dt>Title</dt>
                    <dd><input type="text" value={formik.values.Title} onChange={formik.handleChange} name="Title"/></dd>
                    <dt>Url</dt>
                    <dd><input type="text" value={formik.values.Url} onChange={formik.handleChange} name="Url"/></dd>
                    <dt>Likes</dt>
                    <dd><input type="number" value={formik.values.Likes} onChange={formik.handleChange} name="Likes" /></dd>
                    <dt>Dislikes</dt>
                    <dd><input type="number" value={formik.values.Dislikes} onChange={formik.handleChange} name="Dislikes" /></dd>
                    <dt>Views</dt>
                    <dd><input type="number" value={formik.values.Views} onChange={formik.handleChange} name="Views" /></dd>
                    <dt>Category</dt>
                    <dd>
                        <select onChange={formik.handleChange} value={formik.values.CategoryId} name="CategoryId">
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
                <button className="btn btn-primary">Update Video</button>
            </form>
            <p>
                <Link to="/admin-home">Back to Home</Link>
            </p>
        </div>
    )
}