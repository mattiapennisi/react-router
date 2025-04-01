import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DefaultLayout from './layouts/DefaultLayout.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import BlogPosts from './pages/BlogPosts.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={Home} />
            <Route path='/about' Component={About} />
            <Route path='/blogposts' Component={BlogPosts} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App