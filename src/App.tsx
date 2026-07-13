import{BrowserRouter, Routes, Route,useParams} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import PageNotFound from './PageNotFound'
import Layout from './Layout'
function User() {
  const {id} = useParams()
  return <div>
    <h1>User id is: {id}</h1>
    </div>
}
function App() {
  return (
    <BrowserRouter>
     <Routes>
    <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/user/:id" element={<User />} />
  </Route>
  <Route path="*" element={<PageNotFound />} />
</Routes>
    </BrowserRouter>
  )
}

export default App;
