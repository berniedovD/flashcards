import React from "react";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"
import { CardActionArea } from '@mui/material';

import { useNavigate } from "react-router-dom";

// Hardcoded set of flashcard sets
type FCSet = {name: string, id: number};
const FCSets: FCSet[] = [{name: "Flashcard set 1", id: 0}, {name: "Flashcard set 2", id: 1}];


function FCSetComp({card, id} : {card: string, id: number}) {
  const navigate = useNavigate();
  return <Grid item xs={3}>
    <Card onClick={() => navigate("flashcard/" + id.toString())}>
      <CardActionArea>
        <CardContent>
          <Typography>{card}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
}

export default function Home() {
  return <Grid spacing={3} sx={{ p: 3 }} direction="column" justifyContent="center" alignItems="center" container>
   <Grid item xs={6}><Typography variant="h2">Torah Flashcards</Typography></Grid>
   <Grid
     container
     item
     direction="row"
     justifyContent="flex-start"
     alignItems="flex-start"     
     spacing={1}
   >
     {FCSets.map((set: FCSet) => <FCSetComp card={set.name} id={set.id}/>)}
   </Grid>
  </Grid>
}
