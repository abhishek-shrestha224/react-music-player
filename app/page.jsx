import MusicLibrary from "./components/MusicLibrary";
import Recommended from "./components/Recommended";
import SearchBox from "./components/SearchBox";

const page = () => {
  return (
    <>
      <SearchBox />
      <Recommended />
      <MusicLibrary />
    </>
  );
};

export default page;
