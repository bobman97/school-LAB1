// Create component with props ID, Content and User
import { iComment } from '../interface';
import CommentDelete from './commentDelete';

interface Props {
  comment: iComment;
}	

const LabComment: React.FC<Props> = ({ comment }) => {

  return (
    <div>
      <h4 className="commentAuthor">Anonymous</h4>
      <p className='commentBody'>{comment.content}</p>
      {// if sessionid is same as id, show remove button
      localStorage.getItem('sessionId') === comment.user && <CommentDelete id={comment.id} removeComment={comment.removeComment} />}
    </div>
  );
};

export default LabComment;