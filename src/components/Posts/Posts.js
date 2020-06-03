import React from 'react'
import './Posts.scss'

import PlusIcon from '../../assets/plus.svg'
import VideoIcon from '../../assets/video.svg'
import MusicIcon from '../../assets/music.svg'
import PhotoIcon from '../../assets/photo.svg'
import { reduxForm, Field } from 'redux-form'

const Posts = (props) => {

    const addingPost = (values) => {
        props.addPost(values.newPostElement)
    }



    return (
        <>
            <div className="posts">
                <ReduxAddMessageForm onSubmit={addingPost} />
            </div>
            {props.posts.map(p => {
                return <li className="post" key={p.id}></li>
            })}
        </>
    )
}

const AddMessageForm = (props) => {
    return (
        <form className="posts-add" onSubmit={props.handleSubmit}>
            <Field component="input" name="newPostElement" placeholder="Enter some text to add a post" />
            <button>
                <img title="add" className="posts-add__plus" src={PlusIcon} alt="add" />
            </button>
            <div className="posts-add__icons">
                <img className="posts-add__photo" src={PhotoIcon} alt="" />
                <img className="posts-add__music" src={MusicIcon} alt="" />
                <img className="posts-add__video" src={VideoIcon} alt="" />
            </div>
        </form>
    )
}

const ReduxAddMessageForm = reduxForm({ form: "addingPost" })(AddMessageForm)

export default Posts