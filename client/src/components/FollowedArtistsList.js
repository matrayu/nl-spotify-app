import { StyledTrackList } from "../styles";

const FollowedArtistsList = ({ artists }) => {
  console.log(artists.length)
  return (
    <>
      {artists && artists.length ? (
        <StyledTrackList>
          {artists.map((artist, i) => {
            return (
            <li className="track__item" key={i}>
              <div className="track__item__num">{i + 1}</div>
              <div className="track__item__title-group">
                {artist.images.length && artist.images[2] && (
                  <div className="track__item__img">
                    <img src={artist.images[2].url} alt={artist.name} />
                  </div>
                )}
                <div className="track__item__name-artist">
                  <div className="track__item__name overflow-ellipsis">
                    {artist.name}
                  </div>
                  <div className="artist__item__artist overflow-ellipsis">
                    {artist.genres.map((genre, i) => (
                      <span key={i}>
                        {genre}
                        {i !== artist.genres.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* <div className="track__item__album overflow-ellipsis">
                {track.album.name}
              </div>
              <div className="track__item__duration">
                {formatDuration(track.duration_ms)}
              </div> */}
            </li>
          )})}
        </StyledTrackList>
      ) : (
        <p className="empty-notice">No tracks available</p>
      )}
    </>
  );
};

export default FollowedArtistsList;
