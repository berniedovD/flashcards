import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Flashcard({term, definition}: {term: string, definition: string}) {
   const [flip, setFlip] = useState(false);
   return(
     <Box component="span">
        <Typography variant="h2" gutterBottom align="center" onClick={() => setFlip(!flip)}>{flip ? definition : term}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">Click to flip</Typography>
     </Box>
   )
}
