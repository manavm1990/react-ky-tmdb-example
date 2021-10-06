import React from "react";
import "./App.css";
import { api } from "./services";
import MovieCardList from "components/MovieCardList";

function App() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    api.index().then(({ results }) => {
      setData(results);
    });
  }, []);

  return (
    <main>
      <MovieCardList movies={data} />
    </main>
  );
}

export default App;
