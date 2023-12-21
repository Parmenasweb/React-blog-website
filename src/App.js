import { useState } from "react";
import SinglePost from "./components/SinglePost/SinglePost";
import TopBar from "./components/topBar/TopBar";
import Register from "./pages/Register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
// import Single from "./pages/singlePost/Single";
import Write from "./pages/write/Write";
import {  Routes, Route , Navigate} from "react-router-dom";


function App() {
  const [post, setPost] =useState({
    img: "",
    title: "",
    content: ""
  });

  const [posts,setPosts] = useState([]);

  const [user, setUser] = useState({
    userName: "",
    Email: "",
    password: "",
    isRegistered: false,
    isLoggedIn: false,
  });

  function addNewPost (name, value) {
      setPost(prev => {
        return {
          ...prev,
          img: "https://www.picsum.photos/200",
          [name]: value
        }
      })
  };

  function createPosts () {
    setPosts(prev => [...prev,post])
    console.log(posts);
  }

  function setyUser (name,value) {
    setUser((prev) => {
      return{
        ...prev,
        [name] : value,
      }
    }) 
  };

  return (
    <div className="App">
        <TopBar funct={setyUser} user={user}/>
      <Routes>
          <Route index exact path="/" element={<Home posts={posts}/>} />
          <Route  path="/register" element={user.isRegistered? <Home posts={posts}/> : <Register user={user} funct={setyUser}/>} />
          <Route  path="/login" element={user.isRegistered? <Home posts={posts}/> : <Login user={user} funct={setyUser} />} />
          {/* <Route  path="/write" element={user.isLoggedIn? <Write /> : <Register client={user} funct={setyUser}/>} /> */}
          <Route  path="/write" element={user.isLoggedIn? <Write post={post} createPosts={createPosts} addNewPost={addNewPost}/> : <Navigate to="/login" replace />} />
          <Route  path="/settings" element={user.isRegistered? <Settings /> : <Register client={user} funct={setyUser}/>} />
          <Route  path="/post/:postId" element={<SinglePost />} />
          <Route  path="/post" element={<SinglePost />} />
      </Routes>
    </div>
  );
}

export default App;
