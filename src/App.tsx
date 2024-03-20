import React, { useContext } from "react";
import "./App.css";
import { Posts } from "./components/Posts";
import { ShowMoreButton } from "./components/ShowMoreButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Post } from "./components/Post/Post";
import { BlogContext, BlogContextProvider } from "./context/BlogContext";

function App() {
  const { scrollAmount } = useContext(BlogContext);
  console.log("App");
  return (
    <BlogContextProvider>
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <h2>Posts</h2>
          </header>
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={<>{scrollAmount >= 4 ? <ShowMoreButton /> : <> </>}</>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </BlogContextProvider>
  );
}

export default App;
