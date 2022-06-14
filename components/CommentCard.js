import React from "react";

export default function CommentCard({ data }) {
  const { postId, id, name, body, email } = data;
  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Comment: {body}</h3>
      <h4>Email: {email}</h4>
      <h5>CommentID: {id}</h5>
    </div>
  );
}
