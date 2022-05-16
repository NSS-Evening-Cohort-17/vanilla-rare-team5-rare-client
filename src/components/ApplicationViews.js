import React from "react"
import { Switch, Route } from "react-router-dom"
import { CategoryList } from "./Categories/CategoryList"
import {TagForm} from "./tag/TagForm" 

export const ApplicationViews = () => {

  return (
    <>
      <Switch>
      <h1 >Welcome to Rare Publishing</h1>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route path="/Categories" component={CategoryList} />
      </Switch>

      <Switch>
        <Route path="/tag"  component={TagForm} /> 
      </Switch>
    </>
  )
}
