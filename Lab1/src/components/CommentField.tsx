import { useState } from "react";
import { iComment } from "../interface";

interface Props {
  addComment: (comment: iComment) => void;
  removeComment: (id: number) => void;
}

const CommentField: React.FC<Props> = ({addComment, removeComment}) => {
  
  const [charCount, setCharCount] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);

  const handleWriting = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 0) setError(false);
    setCharCount(Math.min(e.target.textLength, 200));
    setComment(e.target.value.substring(0, 200));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.length === 0) {
      setError(true);
      return;
    }

    
    addComment({
      id: Date.now(),
      content: comment,
      user: localStorage.getItem('sessionId') || Math.random().toString(),
      removeComment: removeComment
    });

    setComment('');
    setCharCount(0);
  }

  return (
  <div className="commentFieldContent">
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="commentField"><span className="formBreak">Add a comment</span></label>
        <textarea id="commentField" maxLength={200} onChange={handleWriting} value={comment} required></textarea>
        <small>{charCount}/200</small>
        {error && <p className="error">Please enter a comment!</p>}
      </fieldset>
      <fieldset>
        <label htmlFor="submitComment"><span className="formBreak">Looking good?</span></label>
        <button type="submit" className="button" id="submitComment">Submit</button>
      </fieldset>
    </form>
  </div>
);

  }

export default CommentField;