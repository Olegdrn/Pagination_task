import { useContext, useEffect } from "react";
import { UseFetch } from "../../hooks/useFetch";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Post } from "../../../types";
import { BlogContext } from "../../context/BlogContext";
import styles from "./Posts.module.scss";

export const Posts: React.FC = () => {
  const { scrollAmount, setScrollAmount, postAmount, setPostAmount } =
    useContext(BlogContext);

  const { ref, inView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  console.log("Posts");

  const { data, isLoading, error } = UseFetch<number, Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_limit=${postAmount}`,
    postAmount
  );

  useEffect(() => {
    if (scrollAmount < 4 && inView) {
      setPostAmount((prevState) => prevState + 10);
      setScrollAmount((prevState) => prevState + 1);
    }
  }, [inView]);

  return (
    <>
      {error && <div>Could not fetch the data</div>}
      {isLoading && <div>is Loading...</div>}
      <div className={styles.Posts}>
        {data !== null ? (
          data.map((e: Post, i: number) => {
            return (
              <Link to={`/post/${e.id}`}>
                <div className={styles.Post} key={e.id} ref={ref}>
                  <h4>Post number {e.id} </h4>
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
