import React from "react"
import { Route } from "react-router-dom"
import { UserList } from "./user/UserList"
import { UserNames } from "./user/UserNames"

export const ApplicationViews = () => {
  return (
    <>
    <h1 >Welcome to Rare Publishing</h1>
      <Route exact path ="/user"> <UserList /> </Route>

      <Route exact path="/user/details"> <UserNames /> </Route>
 
    
    
    
    </>
  )
}
