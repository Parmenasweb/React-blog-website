import { useState } from 'react';
import './write.css';
import { useNavigate } from 'react-router-dom';

function Write(props) {

    const navigate = useNavigate();

    function handleChange (e) {
        const {name,value} = e.target;
        props.addNewPost(name,value);
        
    }

    function handleSubmit (e) {
        e.preventDefault();
        props.createPosts();
        navigate('/');
    }
    return ( 
        <div className="write">
            <img className='writeImg' src="https://www.picsum.com/200" alt="something" />
            <form onSubmit={handleSubmit} className='write-form'>
                <div className="write-form-group">
                    <label htmlFor="write-form-group-file">
                    <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="write-form-group-file" style={{display: 'none'}} />
                    <input onChange={handleChange} name='title' value={props.post.title} type="text" placeholder='Post Title' className='write-form-group-title write-input' autoFocus={true} />
                </div>
                <div className="write-form-group">
                    <textarea onChange={handleChange} name='content' value={props.post.content} placeholder='Post-Content...' typeof='text' className="write-input write-text"></textarea>
                </div>
                <button className="write-submit">Publish</button>
            </form>
        </div>
    );
}

export default Write;