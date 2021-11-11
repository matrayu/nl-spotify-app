import { useState, useEffect } from "react";
import { getTopTracks } from "../spotify";
import { catchErrors } from "../utils";
import {
  TrackList,
  SectionWrapper,
  TimeRangeButtons,
  Loader,
} from "../components";

const TopTracks = () => {
  const [topTracks, setTopTracks] = useState(null);
  const [activeRange, setActiveRange] = useState("short");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getTopTracks(`${activeRange}_term`);
      setTopTracks(data);
      console.log(topTracks)
    };

    catchErrors(fetchData());
  }, [activeRange, topTracks]);

  return (
    <main>
      {topTracks ? (
        <SectionWrapper title="Top Tracks" breadcrumb={true}>
          <TimeRangeButtons
            activeRange={activeRange}
            setActiveRange={setActiveRange}
          />

          {topTracks && topTracks.items && (
            <TrackList tracks={topTracks.items} />
          )}
        </SectionWrapper>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default TopTracks;
