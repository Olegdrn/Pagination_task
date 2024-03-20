import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext";
import styles from "./ShowMoreButton.module.scss";

export const ShowMoreButton: React.FC = () => {
  const { scrollAmount, setPostAmount } = useContext(BlogContext);

  return (
    <>
      {scrollAmount >= 4 ? (
        <button
          className={styles.Button}
          onClick={() => {
            setPostAmount((prevState) => prevState + 10);
          }}
        >
          Загрузить еще
        </button>
      ) : (
        <></>
      )}
    </>
  );
};
