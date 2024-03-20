import React, { useState, useContext, createContext } from "react";
import "./App.css";
import { Posts } from "./components/Posts";
import { ShowMoreButton } from "./components/ShowMoreButton";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Post } from "./components/Post/Post";
export const MyContext: React.Context<{}> = createContext({});

function App() {
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const [postAmount, setPostAmount] = useState<number>(10);

  console.log("App");
  return (
    <MyContext.Provider value={{}}>
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <h2>Posts</h2>
          </header>
          <Routes>
            <Route
              path="/"
              element={
                <Posts
                  scrollAmount={scrollAmount}
                  setScrollAmount={setScrollAmount}
                  postAmount={postAmount}
                  setPostAmount={setPostAmount}
                />
              }
            />
            <Route path="/post/:id" element={<Post />} />
          </Routes>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {scrollAmount >= 4 ? (
                    <ShowMoreButton setPostAmount={setPostAmount} />
                  ) : (
                    <> </>
                  )}
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App;
