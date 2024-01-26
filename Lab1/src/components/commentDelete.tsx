
import React from 'react'; // Import React

interface Props {
  id: number;
  removeComment: (id: number) => void;
}

const CommentDelete: React.FC<Props> = ({ id, removeComment }) => {

  const ConfirmDelete = () => (
    <>
    <fieldset>
      <label><span className="formBreak">Are you sure?</span></label>
      <button onClick={() => removeComment(id)}>Confirm</button>
      <button onClick={() => setConfirmDelete(false)}>Cancel</button>
    </fieldset>
  </>
  );



  const [confirmDelete, setConfirmDelete] = React.useState(false); // Create state for confirmDelete
  return (
    <>
      {!confirmDelete ? 
      <button onClick={() => setConfirmDelete(true)}>Remove</button> : <ConfirmDelete /> }
    </>
  );
};

export default CommentDelete;