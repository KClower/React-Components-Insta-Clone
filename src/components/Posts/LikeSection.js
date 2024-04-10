// Look at the number of likes on line 26. Right now it's hard coded to '100'.
// Use a piece of data coming in through props to display the correct number of likes.
// You will also add an onClick handler that utilizes `likePost` to increase the count of likes.
// (As a stretch goal, you might want to prevent your user from "liking" the same post more than once.)
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';


const LikeSection = props => {
  // 🔥 Make sure the parent of LikeSection is passing the right props!
  const { likePost, numberOfLikes, addNewComment, postId} = props;

const [isCommenting, setIsCommenting] = useState(false);
const [newComment, setNewComment] = useState("");
const switchIsCommenting = () => {
  setIsCommenting(!isCommenting)
}
const updateNewComment = (e) => {
  setNewComment(e.target.value)
}
const submitHandler = (e) => {
e.preventDefault()

addNewComment(newComment, postId)
setNewComment("")
switchIsCommenting()
}


  return (
    <div>
      <div
        className='like-section'
        key='likes-icons-container'
      >
        <div className='like-section-wrapper'>
          <FontAwesomeIcon icon={faHeart} onClick = {likePost}/>
        </div>
        <div className='like-section-wrapper' onClick={switchIsCommenting}>
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      {isCommenting && 
      <form onSubmit = {submitHandler}>
      <input type="text" onChange={updateNewComment}/>
      </form>
      }
      <p className='like-number'>{numberOfLikes} likes</p>
    </div>
  );
};

export default LikeSection;
