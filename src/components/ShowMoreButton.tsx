import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

export const ShowMoreButton: React.FC = () => {
  const { setPostAmount } = useContext(BlogContext);
  console.log("Button");
  return (
    <>
      <button
        onClick={() => {
          setPostAmount((prevState) => prevState + 10);
        }}
      >
        Загрузить еще
      </button>
    </>
  );
};
