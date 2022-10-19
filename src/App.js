import "./App.css";
import Adress from "./componesnts/Profile/Adress";
import FullNames from "./componesnts/Profile/FullNames";
import ProfilePhoto from "./componesnts/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullNames />
      <Adress />
    </div>
  );
}

export default App;
