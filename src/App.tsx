import React, { createContext, useContext, useState } from "react";
import "./App.css";
import { Posts } from "./components/Posts";
import { ShowMoreButton } from "./components/ShowMoreButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Post } from "./components/Post/Post";

interface BlogContextType {
  scrollAmount: number;
  postAmount: number;
  setScrollAmount: React.Dispatch<React.SetStateAction<number>>;
  setPostAmount: React.Dispatch<React.SetStateAction<number>>;
}
export const BlogContext = createContext({} as BlogContextType);

function App() {
  console.log("App");
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const [postAmount, setPostAmount] = useState<number>(10);

  return (
    <BlogContext.Provider
      value={{ scrollAmount, postAmount, setScrollAmount, setPostAmount }}
    >
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <header className="App-header">
                  <h2>Posts</h2>
                </header>
              }
            />
          </Routes>
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
    </BlogContext.Provider>
  );
}

export default App;
