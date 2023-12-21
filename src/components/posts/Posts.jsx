import './posts.css';
import Post from '../post/Post';

function Posts(props) {
    return ( 
        <div className="posts">
            {props.posts.map(item => <Post post={item}/>)}
        </div>
    );
}

export default Posts;