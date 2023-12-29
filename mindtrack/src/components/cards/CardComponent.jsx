import React from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

const cardData = [
  {
    title: "Focus",
    image: new URL('../../assets/images/cardimages/focus.JPG', import.meta.url).href,
    text: "When we closely focus on tasks in a goal-oriented way, we take on challenges that make deep connections in the brain.Focus help to reduce stress and anxiety levels. it is recommended to allocate undisturbed period which is usaally between 1-3 hours daily to improve cognitive functioning and mental well-being.when it is ignored during daily activities, it can lead to decreased productivity, difficulty forming meaningful connections, and poorer mental health."
  },
  {
    title: "Play",
    image: new URL('../../assets/images/cardimages/play.JPG', import.meta.url).href,
    text: "When we allow ourselves to be spontaneous or creative, playfully enjoying novel experiences, we help make new connections in the brain.it is recomended to allocate at least 30 minutes daily.it can help to stimulate the mind and increase problem-solving abilities, creative thinking, and overall mental well-being. Play Time also helps reduce stress and increase happiness and satisfaction.However, when Play Time is ignored during daily activities, it can lead to feelings of boredom, mental fatigue, and difficulty concentrating on tasks. "
  },
  {
    title: "Sleep",
    image: new URL('../../assets/images/cardimages/sleep.JPG', import.meta.url).href,
    text: "When we give the brain the rest it needs, we consolidate learning and recover from the experiences of the day.getting enough sleep can help keep our immune systems healthy and reduces risk of developing certain chronic health conditions. The National Sleep Foundation recommends that adults get 7 to 9 hours of sleep per night. Not allocating enough sleep time can lead to fatigue, poor concentration, increased stress, anxiety, and irritability"
  },  {
    title: "Timein",
    image: new URL('../../assets/images/cardimages/timein.JPG', import.meta.url).href,
    text: "When we quietly reflect internally, focusing on sensations, images, feelings and thoughts, we help to better integrate the brain.The recommended amount of time to dedicate to time-in is at least 10 minutes daily. Time-in is an essential aspect of the efforts to develop a healthy mental status since it helps the brain to recharge can it also boost creativity and productivity.When time-in is ignored during daily activities, it can lead to feelings of burnout and overwhelm, which can have a detrimental effect on both physical and mental health"
  },
  {
    title: "Downtime",
    image: new URL('../../assets/images/cardimages/downtime.JPG', import.meta.url).href,
    text: "When we are non-focused, without any specific goal, and let our mind wander or simply relax, we help the brain recharge.Mind Platter recommends 20 to 30 minutes of daily relaxation. For instance, downtime could involve reading, listening to music, or walking in nature. If ignored, stress and burnout can result"
  },
  {
    title: "Connecting",
    image: new URL('../../assets/images/cardimages/connecting.JPG', import.meta.url).href,
    text: "When we connect with other people, ideally in person, and when we take time to appreciate our connection to the natural world around us, we activate and reinforce the brain's relational circuitry.at least 30 minutes should be set aside each day for connecting time activities like talking to someone, having a meaningful conversation, or going for a walk it helps in boosting creativity and productivity "
  },
  {
    title: "Physical Time",
    image: new URL('../../assets/images/cardimages/physical.JPG', import.meta.url).href,
    text: "When we move our bodies, aerobically if medically possible, we strengthen the brain in many ways.it is recomended to allocate at least 30 minutes daily to improve physical and mental well-being,increased energey level,improved concentration and enhance stress relief. "
  }
];

function CardComponent() {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom style={{ marginTop: '40px', marginBottom: '60px',textAlign: 'center' }}>
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
                objectFit: 'contain'  // This ensures the image fits without being cropped
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
