import "./Gif.css";

function Gif({ src, id, handleSelected }) {
  const handleClick = () => {
    handleSelected(src);
  };

  return (
    <div className="GifContainer">
      <img className="Gif" src={src} alt={id} onClick={handleClick} />
    </div>
  );
}

export default Gif;
