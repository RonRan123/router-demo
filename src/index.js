import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import WeatherApp from './components/Weather/WeatherApp';
import TriviaApp from "./components/Trivia/TriviaApp";
import Error from "./components/Error";

const rootElement = document.getElementById("root");
render(
<BrowserRouter>
<Routes>
      <Route path="/" element={<App />}>
        <Route path="weather" element={<WeatherApp />} />
        <Route path="news" element={<div>News App</div>} />
        <Route path="trivia" element={<TriviaApp />} />
      </Route>
      <Route path="*" element={<Error />} />

    </Routes>
</BrowserRouter>, 
rootElement
);

