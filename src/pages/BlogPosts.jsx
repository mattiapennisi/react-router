import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'

export default function BlogPosts() {

    const [posts, setPosts] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setIsLoaded(true)
            })
            .catch(err => {
                console.error(err)
                setIsLoaded(true)
            })
    }, [])

    return (
        <>
            <main className="container py-5">
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h1 className="fw-bold">Blog</h1>
                    </div>
                </div>

                {
                    !isLoaded ? (
                        <div className='d-flex justify-content-center py-5'>
                            <Quantum
                                size="45"
                                speed="1.75"
                                color="black" className='py-5'
                            />
                        </div>
                    ) : (
                        <div className="row g-4">
                            {posts.map(post => (
                                <div className="col-md-4" key={post.id}>
                                    <div className="card h-100 border-0 shadow-sm">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                            </div>
                                            <h5 className="card-title">{post.title}</h5>
                                            <p className="card-text">{post.body}</p>
                                            <Link to={`/blogposts/${post.id}`}>
                                                <button className="btn btn-primary">Apri post</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }
            </main>
        </>
    )
}