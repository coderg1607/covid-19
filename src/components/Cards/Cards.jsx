import CountUp from 'react-countup';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './Cards.module.css';
import cx from 'classnames';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 140,
  },
});

export default function MediaCards({data:{confirmed,recovered,deaths,lastUpdate}}) {
  const classes = useStyles();
  if(!confirmed )
  {
    return 'Loading..'
  }
  
  return (
    
    <div className={styles.container}>
      
        <Grid container spacing={3} justify="center">
          <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
          
        <CardContent>
        <CardMedia
          className={classes.media}
          image="https://cityspideynews.s3.amazonaws.com/uploads/spidey/202003/coronavirus3-1583413052.jpg"
          title="infacted"
        />
          <Typography gutterBottom colr="textSecondary">
            Infected
          </Typography>
          <Typography  variant="h5" >
            <CountUp
            start={0}
            end={confirmed.value}
            duration={3}
            separator=','
            />
          </Typography>
          <Typography  colr="textSecondary" >
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography  variant="body2" >
            Number of active cases of Covid-19 in the world
          </Typography>
        </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recoverded)}>
         
        <CardContent>
        <CardMedia
          className={classes.media}
          image="https://www.hopkinsmedicine.org/sebin/n/z/COVID-ICU-illustration.jpg"
          title="recovery"
        />
          <Typography gutterBottom colr="textSecondary">
           Recoverded
          </Typography>
          <Typography  variant="h5" >
          <CountUp
            start={0}
            end={recovered.value}
            duration={3}
            separator=','
            />
          </Typography>
          <Typography  colr="textSecondary" >
          {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography  variant="body2" >
            Number of recoverd case of Covid-19 in the world
          </Typography>
        </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
          
        <CardContent>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFM1gNrPOlMHuU08EE35pKQGZpU2jHRMTX4Q&usqp=CAU"
          title="death"
        />
          <Typography gutterBottom colr="textSecondary">
          Deaths
          </Typography>
          <Typography  variant="h5" >
          <CountUp
            start={0}
            end={deaths.value}
            duration={3}
            separator=','
            />
          </Typography>
          <Typography  colr="textSecondary" >
          {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography  variant="body2" >
            Number of deaths in the world caused by Covid-19
          </Typography>
        </CardContent>
        </Grid>
        </Grid>
    </div>
    
  );
}