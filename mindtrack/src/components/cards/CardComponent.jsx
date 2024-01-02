import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import cardData from "./cardData";

function CardComponent() {
  return (
    <Container>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        style={{ marginTop: "40px", marginBottom: "60px", textAlign: "center" }}
      >
        Explore Key MindTrack Activities
      </Typography>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                sx={{
                  height: 300,
                  objectFit: "contain", // This ensures the image fits without being cropped
                }}
                image={card.image}
                alt={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardComponent;
