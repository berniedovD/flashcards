import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent"

function FCSet({card} : {card: string}) {
  return <Card>
    <CardContent>
      <Typography>{card}</Typography>
    </CardContent>
  </Card>
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
     <Grid item xs={3}><FCSet card="Flashcard set 1"/></Grid>
   </Grid>
  </Grid>
}
