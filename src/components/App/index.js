import React, { useEffect } from "react";
import { loadContacts } from "../../redux/actions/contacts";
import { loadProfile } from "../../redux/actions/profile";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import AnimateInfoBar from './AnimateInfoBar';
import Main from "../Main";
import Sidebar from "../Sidebar";
import NoSelected from "./NoSelected";
import "./app.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadContacts());
    dispatch(loadProfile());
  }, [dispatch]);

  return (
    <div className="app">
      <Sidebar />
      <Switch>
        <Route path="/" component={NoSelected} exact />
        <Route path="/chat/:id" component={Main} />
      </Switch>
      <AnimateInfoBar />
    </div>
  );
}

export default App;
