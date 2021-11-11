import { useState, useEffect } from "react";
import { getUsersSavedTracks } from "../spotify";
import { catchErrors, getUrlParam } from "../utils";
import {
  SavedTracksList,
  SectionWrapper,
  TimeRangeButtons,
  Loader,
} from "../components";

const SavedTracks = () => {
  const [savedTracks, setSavedTracks] = useState(null);
  const [activeRange, setActiveRange] = useState("short");

  useEffect(() => {
    const fetchData = async () => {
      let offset = 0;
      let tracks = [];
      let nextUrl = '';

      let data = await getUsersSavedTracks(offset);
      tracks = data.data.items
      nextUrl = data.data.next
      setSavedTracks(tracks)

      console.log(!!nextUrl)
      while (!!nextUrl) {
        offset = getUrlParam(data.data.next, 'offset')
        /* let url = data.data.next
        let paramStr = url.slice(url.indexOf('?'));
        let searchParams = new URLSearchParams(paramStr);
        offset = searchParams.get('offset'); */
        data = await getUsersSavedTracks(offset);
        tracks.push(...data.data.items)
        data.data.next ? nextUrl = data.data.next : nextUrl = false;
        setSavedTracks(tracks)
      }

      console.log(savedTracks)
    };

    catchErrors(fetchData());
  }, [savedTracks]);

  return (
    <main>
      {savedTracks ? (
        <SectionWrapper title="Top Tracks" breadcrumb={true}>
          <TimeRangeButtons
            activeRange={activeRange}
            setActiveRange={setActiveRange}
          />

          {savedTracks && savedTracks && (
            <SavedTracksList tracks={savedTracks} />
          )}
        </SectionWrapper>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default SavedTracks;
