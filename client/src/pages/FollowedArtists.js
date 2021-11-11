import { useState, useEffect } from "react";
import { getFollowedArtists } from "../spotify";
import { catchErrors, getUrlParam } from "../utils";
import {
  FollowedArtistsList,
  SectionWrapper,
  /* TimeRangeButtons, */
  Loader,
} from "../components";

const FollowedArtists = () => {
  const [followedArtists, setFollowedArtists] = useState(null);
  /* const [activeRange, setActiveRange] = useState("short"); */

  useEffect(() => {
    const fetchData = async () => {
      let after = null;
      let artists = [];
      let nextUrl = '';

      let { data } = await getFollowedArtists(after);
      artists = data.artists.items
      nextUrl = data.artists.next
      //setFollowedArtists(artists)

      if (!!nextUrl) {
        while (!!nextUrl && data.artists) {
          after = getUrlParam(data.artists.next, 'after')
          data = await getFollowedArtists(after);
          let moreArtists = data.data.artists
          artists.push(...moreArtists.items)
          moreArtists.next ? nextUrl = moreArtists.next : nextUrl = false;
          setFollowedArtists(artists)
        }
      } else {
        setFollowedArtists(artists)
      }

    };

    catchErrors(fetchData());
  }, []);

  return (
    <main>
      {followedArtists ? (
        <SectionWrapper title="Followed Artists" breadcrumb={true}>
          {/* <TimeRangeButtons
            activeRange={activeRange}
            setActiveRange={setActiveRange}
          /> */}

          {followedArtists && (
            <FollowedArtistsList artists={followedArtists} />
          )}
        </SectionWrapper>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default FollowedArtists;
