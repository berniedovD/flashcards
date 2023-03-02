import React, {useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {useLocation, useNavigate, Outlet} from "react-router-dom";

type tabLink = { path: string, tabN: number };

export default function TabNav() {
  const location = useLocation();
  const LOCS: tabLink[] = [
    { path: "/", tabN: 0 },
    { path: "/show", tabN: 1 },
    { path: "/play", tabN: 2 },
    { path: "/gameover", tabN: 2 }
  ];
 
  function currentTab(): number | undefined {
    return LOCS.find((element: tabLink) => location.pathname.endsWith(element.path))?.tabN;
  }
 
  const [value, setValue] = useState<number | undefined>(currentTab());
  useEffect(() => {
   setValue(currentTab());
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  const navigate = useNavigate();

  return (<Box>
    <Typography align="center" variant="h2">Torah Flashcards</Typography>
    <Tabs value={value} centered onChange={(event: React.SyntheticEvent, newValue: number) => setValue(newValue)} sx={{mb: 5}}>
       <Tab onClick={() => navigate("./")} label="Home"/>
       <Tab onClick={() => navigate("show")} label="Show Flashcards"/>
       <Tab onClick={() => navigate("play")} label="Play Flashcards"/>
    </Tabs>
    <Outlet/>
  </Box>)
}
