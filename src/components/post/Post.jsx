import './post.css';

function Post(props) {
    return ( 
        <div className="post">
            <img className='post-img' src={props.post.img} alt="another-img" />
            <div className="post-Info">
                <div className="post-categories">
                    <span className="post-cat">Music</span>
                    <span className="post-cat">life</span>
                </div>
                <span className="post-Title">{props.post.title}</span>
                <hr />
                <span className="post-Date">1 hour ago</span>
            </div>
            <p className='post-desc'>{props.post.content}</p>
        </div>
    );
}

export default Post;