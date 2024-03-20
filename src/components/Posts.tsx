import { useEffect } from "react";
import { UseFetch } from "../hooks/useFetch";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Post } from "../../types";

interface PostProps {
  scrollAmount: number;
  setScrollAmount: React.Dispatch<React.SetStateAction<number>>;
  postAmount: number;
  setPostAmount: React.Dispatch<React.SetStateAction<number>>;
}

export const Posts: React.FC<PostProps> = (props) => {
  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  console.log("Posts");

  const { data, isLoading, error } = UseFetch<number, Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_limit=${props.postAmount}`,
    props.postAmount
  );

  useEffect(() => {
    if (props.scrollAmount < 4 && inView) {
      props.setPostAmount((prevState) => prevState + 10);
      props.setScrollAmount((prevState) => prevState + 1);
    }
  }, [inView]);

  return (
    <>
      {error && <div>Could not fetch the data</div>}
      {isLoading && <div>is Loading...</div>}
      <div className="Posts">
        {typeof data !== "undefined" ? (
          data.map((e: Post, i: number) => {
            return (
              <Link to={`/post/${e.id}`}>
                <div className="Post" key={e.id} ref={ref}>
                  <h1>{e.id} </h1>
                  <p>{e.title}</p>
                  <p>{e.body}</p>
                </div>
              </Link>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
