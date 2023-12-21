import './singlepost.css';

function SinglePost(props) {
    return ( 
        <div className="SinglePost">
            <div className="single-Post-wrapper">
                <img className='singlepost-Img' src="https://www.picsum.photos/500" alt="anotherOne" />
                <h1 className="single-post-title">This is the title of this post
                    <div className="single-Post-edit-container">
                    <i className="singlePost-Icons fa-solid fa-pen-to-square"></i>
                    <i className="singlePost-Icons fa-solid fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePost-Info">
                    <span className='singlePost-author'>Author: <b>parma</b> </span>
                    <span className='singlePost-date'> 15 hours ago</span>
                </div>
                <p className='singlePost-desc'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore atque unde alias at ipsa error eum suscipit sunt, consectetur reiciendis dolores consequuntur laboriosam possimus corporis saepe adipisci, ut veritatis. Nihil, commodi, totam laudantium rem eveniet saepe amet voluptate labore sunt fuga sint modi, odit tempore? Dolorum exercitationem omnis earum rem.</p>
            </div>
        </div>
    );
}

export default SinglePost;