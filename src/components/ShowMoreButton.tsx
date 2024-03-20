interface ShowMoreButtonProps {
  setPostAmount: React.Dispatch<React.SetStateAction<number>>;
}
export const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({
  setPostAmount,
}) => {
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
