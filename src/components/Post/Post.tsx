import { useParams } from "react-router-dom";
import { UseFetch } from "../../hooks/useFetch";
import { Post as PostT } from "../../../types";

export const Post: React.FC = () => {
  const { id } = useParams();

  const { data } = UseFetch<number, PostT>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  console.log(data);

  return (
    <>
      {data !== null ? (
        <div className="Post">
          <h3>{data.body}</h3>
          <p>{data.title}</p>
          <p>{data.body}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
