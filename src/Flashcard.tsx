import React from "react";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

interface FlashcardProps {
  term: string;
  definition: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ term, definition }) => {

  return (
    <Paper
      className="flashcard"
      elevation={1}
      sx={{ mx: 'auto', width: "80%", display: 'flex', justifyContent: 'space-around', p: 2, m:2
 }}
    >
        
          <Typography variant="h3">{term}</Typography>
          <Divider orientation="vertical" flexItem/>
          <Typography variant="h3">{definition}</Typography>
    </Paper>
  );
};

export default Flashcard;
