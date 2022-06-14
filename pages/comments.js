import React from "react";
import axios from "axios";
import CommentCard from "../components/CommentCard";

export default function comments({ data, query }) {
  return (
    <div>
      <h1>Post # {query.id}</h1>
      {data.map((comment) => (
        <CommentCard data={comment} key={comment.id} />
      ))}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${query.id}/comments`
  );
  const { data } = res;
  return {
    props: {
      data,
      query,
    },
  };
}
