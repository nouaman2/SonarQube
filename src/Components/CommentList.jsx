import React from 'react';

const CommentList = ({ comments, deleteComment }) => {
  return (
    <div>
      <h3>Commentaires :</h3>
      <p>Nombre total de commentaires : {comments.length}</p> {/* Affiche le nombre total de commentaires */}
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.author}:</strong> {comment.content}
              <button onClick={() => deleteComment(index)}>Supprimer</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucun commentaire pour le moment.</p>
      )}
    </div>
  );
};

export default CommentList;
