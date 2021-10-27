import Gif from "./Gif";

function GifList({ list, selected }) {
  return (
    <div>
      {list &&
        list.map((element) => {
          return (
            <Gif src={element.images.downsized.url} handleSelected={selected} />
          );
        })}
    </div>
  );
}

export default GifList;
