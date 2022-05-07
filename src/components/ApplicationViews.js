import React from "react";
import { Route } from "react-router-dom";
import { AddPostForm } from "./post/AddPostForm";

export const ApplicationViews = () => {
  return (
    <>
      <h1>Welcome to Rare Publishing Test</h1>
      <Route path="/mypost">
        {" "}
        <AddPostForm />{" "}
      </Route>
    </>
  );
};
