import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Surahs from "./Pages/Quran/components/Surahs/surahs.json";
import NotFound from "./NotFound";
import Header from "./Pages/Header/Header";
import Quran from "./Pages/Quran/Quran";
import Ayahs from "./Pages/Quran/components/Surahs/Ayahs/Ayahs";
import Tasbeh from "./Tasbeh";
import Hadis from "./Pages/Hadis/Hadis"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/quran" component={Quran} />
          {Surahs.map((surah) => (
            <Route
              path={`/quran/${surah.number}`}
              component={() => (
                <Ayahs name={surah.englishName} surahNumber={surah.number} />
              )}
            />
          ))}
          <Route exact path="/hadis" component={Hadis} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Tasbeh />
    </div>
  );
}

export default App;
