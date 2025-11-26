
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './pages/Homepage';
import Posts from './pages/Posts';
import PostsDetails from './pages/PostsDetails';
import AddPost from './pages/AddPost';
import About from './Components/About';
import Gallery from './pages/Gallery';
import UpdateGallery from './pages/UpdateGallery';
import Footer from './Components/Footer';
import Hero_section from './Components/Hero_section';
import Contacts from './Components/Contacts';
import Articles from './pages/Articles';
import AxiosInstance from './pages/AxiosInstance';
import { Axios } from 'axios';


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostsDetails />} />
        <Route path="/addPost" element={<AddPost />} />
        <Route path='/About' element={<About />} />
        <Route path='/Gallery' element={<Gallery />} />
        <Route path='/UpdateGallery' element={<UpdateGallery />} />
        <Route path='/Hero_section' element={<Hero_section/>} />
        <Route path='/Contacts' element={<Contacts/>}/>
        < Route path='/Articles' element={<Articles/>}/>
        < Route path='/AxiosInstance' element={<AxiosInstance/>}/>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
