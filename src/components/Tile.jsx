export default function Tile({ title, videoLink }) {


    function linkClickHandler(link2, link3) {
        window.open(`/video?v=${link2}&q=${encodeURI(link3)}`);
    }

  return (
    <div className="tile-container">
      <div>{title}</div>

      <div>Learn</div>

      <div className="link-container">
        <ul>
          {videoLink.map(function (link) {
            return (
              <li>
                <div 
                    onClick={(e) => { linkClickHandler(link[2], link[3]); }}
                    className="link-style" 
                    href={link[1]}>
                  {link[0]}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
