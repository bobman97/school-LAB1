import { iComment } from "../interface";
import LabComment from "./LabComment";

interface commentsProps {
  comments: iComment[];
  count: number;
}

const Comments: React.FC<commentsProps> = ({comments, count}) => {
  
  return (
    <>
      {count > 0 ? (
        <>
          <ul>
            {comments.map((comment) => (
              <li key={comment.id} className="comment">
                <LabComment
                  comment={comment}
                />
              </li>
            ))}
          </ul>
          <p>{count} comments!</p>
        </>
      ) : (
        <p>No comments yet</p>
      )}
    </>
  )
}

export default Comments;