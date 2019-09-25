import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SunIcon from '@material-ui/icons/WbSunny';
import CloudyIcon from '@material-ui/icons/WbCloudy';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    width: "94%",
    display: "inline-block",
    margin: "3%"
  },
  media: {
    height: 300,
  },
  tags: {
    position: "absolute",
    width: "100%",
    display: "flex",
    padding: "0 0.25em"
  },
  tag: {
    display: "inline-block",
    padding: "7px 7px 4px",
    margin: "0 .25em",
    fontSize: "1.5rem !important",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    borderRadius: "0 0 20% 20%",
    boxShadow: "1px 1px rgba(0,0,0, .25)",

  },
  text: {
    fontSize: "1rem",
    fontWeight: "bold"
  },
  rightButton: {
    marginLeft: "auto"
  },
  hidden: {
    display: "none",
    height: 0
  }
}));

const Tag = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.tag}>
      <Typography variant="body2" component="p" >
        <span className={classes.text}> {children}</span>
      </Typography>
    </div>
  )
}

export default function MediaCard({ place: { id, name, description, image, locationLink, websiteLink, cost, weather, duration }, seen, toggleSeen }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea className={seen ? classes.hidden : ""}>
        <div className={classes.tags}>
          <Tag>{weather === "sunny" && <SunIcon />}{weather === "cloudy" && <CloudyIcon />}</Tag>
          <Tag>{duration}</Tag>
          <Tag>{cost} €</Tag>
        </div>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography className={seen ? "" : classes.hidden}>{name}</Typography>
        {locationLink && <a href={locationLink} target="_blank" className={seen ? classes.hidden : ""}>
          <Button size="small" color="primary">
            Maps
        </Button>
        </a>}
        {websiteLink && <a href={websiteLink} target="_blank" className={seen ? classes.hidden : ""}>
          <Button size="small" color="primary">
            Webseite
        </Button>
        </a>}
        <Button onClick={() => toggleSeen(id)} className={classes.rightButton} size="small" color="primary">
          {seen ? <DoneAllIcon /> : <DoneIcon />}
        </Button>
      </CardActions>
    </Card>
  );
}