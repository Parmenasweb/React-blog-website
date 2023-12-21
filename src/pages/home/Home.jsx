import "./home.css";
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts';
import SideBar from '../../components/sideBar/Sidebar';



function Home(props) {
    return ( 
        <>
            <Header />
        <div className="home">
            <Posts posts={props.posts}/>
            <SideBar />
        </div>
        </>
    );
}

export default Home;