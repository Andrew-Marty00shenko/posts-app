import { connect } from "react-redux"
import { addPost } from "../../redux/posts-reducer"
import Posts from "./Posts"

let mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps, { addPost })(Posts)