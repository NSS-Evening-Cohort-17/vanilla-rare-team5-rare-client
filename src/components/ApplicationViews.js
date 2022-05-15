import React from "react";
import { Route } from "react-router-dom";
import { AddPostForm } from "./post/AddPostForm";

import React from "react"
import { Switch, Route } from "react-router-dom"
import { CategoryList } from "./Categories/CategoryList"

export const ApplicationViews = () => {
  // return (
  //   <h1 >Welcome to Rare Publishing</h1>
  // )

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
      <Switch>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route path="/category" component={CategoryList} />
      </Switch>
    </>
  )
}
