import "./SelectedGif.css";

function SelectedGif({ src, id }) {
  return (
    <div className="SelectedGifContainer">
      <h2>Mon Gif</h2>
      <img src={src} alt={id} />
    </div>
  );
}

export default SelectedGif;
