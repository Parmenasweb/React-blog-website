import './single.css';
import SinglePost from '../../components/SinglePost/SinglePost';
import Sidebar from '../../components/sideBar/Sidebar';


function Single() {
    return ( 
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    );
}

export default Single;