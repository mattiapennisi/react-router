import { Link } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'

export default function BlogPost() {
  const [post, setPost] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const numberId = Number(id)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data)
        setIsLoaded(true)
      })
      .catch(err => {
        console.error(err)
        setIsLoaded(true)
      })
  }, [id])

  const navigateToPrevious = () => {
    if (numberId > 1) {
      navigate(`/blogposts/${numberId - 1}`)
    }
  }

  const navigateToNext = () => {
    navigate(`/blogposts/${numberId + 1}`)
  }

  return (
    <div className="container py-5">
      {
        !isLoaded ? (
          <div className='d-flex justify-content-center py-5'>
            <Quantum
              size="45"
              speed="1.75"
              color="black"
              className='py-5'
            />
          </div>
        ) : (
          <div className="row">
            <div className="col-md-8 mx-auto">
              <div className="card border-0 shadow">
                <div className="card-body p-4">
                  <h2 className="card-title fw-bold">{post.title}</h2>
                  <p className="card-text fs-5">{post.body}</p>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <div className="d-flex flex-row gap-3">
                      <button
                        className="btn btn-primary"
                        onClick={navigateToPrevious}
                        disabled={numberId <= 1}
                      >
                        Post Precedente
                      </button>
                      <button
                        className="btn btn-outline-primary"
                        onClick={() => navigate('/blogposts')}
                      >
                        Torna al Blog
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={navigateToNext}
                      >
                        Post Successivo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}