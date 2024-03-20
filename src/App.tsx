import "./App.css";
import { Posts } from "./components/Posts/Posts";
import { ShowMoreButton } from "./components/ShowMoreButton/ShowMoreButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Post } from "./components/Post/Post";
import { BlogContextProvider } from "./context/BlogContext";

function App() {
  console.log("App");

  return (
    <BlogContextProvider>
      <div className="App">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <header className="App-header">
                    <h4>Posts</h4>
                  </header>
                }
              />
            </Routes>
            <Routes>
              <Route path="/" element={<Posts />} />
              <Route path="/post/:id" element={<Post />} />
            </Routes>
            <Routes>
              <Route path="/" element={<ShowMoreButton />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </BlogContextProvider>
  );
}

export default App;
