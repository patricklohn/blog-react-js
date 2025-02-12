import {useState, useEffect} from 'react'
import blogFetch from '../axios/config'
import { useParams } from "react-router-dom"
import "./Posts.css";

const Posts = () => {
    const [post, setPost] = useState({})
    const {id} = useParams()


    const getPost = async() =>{
        try {
            const response = await blogFetch.get(`/posts/${id}`)
            const data = response.data

            setPost(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() =>{
        getPost()
    }, [])

  return (
    <div className='post-container'>
      {!post.title ?(
        <p>Carregando...</p>
      ):(
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
      )}
    </div>
  )
}

export default Posts
