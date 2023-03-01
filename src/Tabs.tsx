import React, {useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {useLocation, useNavigate, Outlet} from "react-router-dom";

export default function TabNav() {
  const location = useLocation();
  const LOCS = ["/", "/show", "/play", "/gameover"];
  const LOCTAB = [0, 1, 2, 2];
 
  function currentTab() {
    return LOCTAB[LOCS.indexOf(location.pathname)];
  }
 
  const [value, setValue] = useState<number | null>(currentTab());
  useEffect(() => {
   setValue(currentTab());
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps

  const navigate = useNavigate();

  return (<Box>
    <Typography align="center" variant="h2">Torah Flashcards</Typography>
    <Tabs value={value} centered onChange={(event: React.SyntheticEvent, newValue: number) => setValue(newValue)} sx={{mb: 5}}>
       <Tab onClick={() => navigate("/")} label="Home"/>
       <Tab onClick={() => navigate("/show")} label="Show Flashcards"/>
       <Tab onClick={() => navigate("/play")} label="Play Flashcards"/>
    </Tabs>
    <Outlet/>
  </Box>)
}
