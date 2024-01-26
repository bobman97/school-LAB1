import { useEffect, useRef, useState } from 'react';
import './App.css'
import CommentField from './components/CommentField'
import Comments from './components/Comments'
import { iComment } from './interface';

function App() {

  // Create state for comments
  const [comments, setComments] = useState<iComment[]>([]);

  // Create ref for comment count
  const commentCount = useRef(0);

  // Generate or retrieve session id
  useState<string>(() => {
    const existingSessionId = localStorage.getItem('sessionId');
    if (existingSessionId) {
      return existingSessionId;
    } else {
      const newSessionId = Math.random().toString();
      localStorage.setItem('sessionId', newSessionId);
      return newSessionId;
    }
  });

  useEffect(() => {
  }, []);

  // Add comment to state
  const addComment = (comment: iComment) => {
    setComments([...comments, comment]);
    commentCount.current++;
  }

  const removeComment = (id: number) => {
    setComments((prevComments) => {
      
      // Check if user is the same as the one who wrote the comment
      if (localStorage.getItem('sessionId') !== prevComments.find((comment) => comment.id === id)?.user) {
        alert("You can't remove this comment!");
        return prevComments;
      }

      // Check if comment exists
      if (!prevComments.find((comment) => comment.id === id)) {
        alert("Comment with id " + id + " does not exist!");
        return prevComments;
      }

      const updatedComments = prevComments.filter((comment) => comment.id !== id);
      commentCount.current = updatedComments.length;
      return updatedComments;
    });
  };

  return (
    <>
      <div>
        <CommentField addComment={addComment} removeComment={removeComment} />
        <Comments comments={comments} count={commentCount.current} />
      </div>
    </>
  )
}

export default App
