import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthSelector } from "store/selectors";

import classes from "./Layout.module.scss";
import { Header } from "./Header/Header";
import { LeftSidebar } from "./LeftSidebar/LeftSidebar";
import { RightSidebar } from "./RightSidebar/RightSidebar";
import { Footer } from "./Footer/Footer";

export const Layout = ({ children }) => {
  const { user } = useAuthSelector();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.hasOwnProperty("id")) {
      navigate("/auth")
    }
  })

  return (
    <div className={classes.layout}>
      <Header />
      <LeftSidebar />
      <RightSidebar />

      <main className={classes.layout__main}>
        {children}
      </main>

      <Footer />
    </div>
  );
};
