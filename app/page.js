import FirstMain from "../components/firstmain";
import Vertical from "../components/verticalsection";
import Secondmain from "../components/secondmain";
import Thirdmain from "../components/thirdmain";
import Lastmain from "../components/lastmain";
// import Timeline from "../components/verticaltimeline";
export default function Home() {
  return (
    <>
      <FirstMain />
      <Vertical />
      <Secondmain />
      <Vertical />
      <Thirdmain />
      <Lastmain />
      <br />
    </>
  );
}
