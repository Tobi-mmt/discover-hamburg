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
import Link from '../src/Link';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    display: "inline-block",
    margin: "1em"
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
  }
}));

const Tag = ({ color, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.tag}>
      <Typography variant="body2" component="p" >
        <span className={classes.text}> {children}</span>
      </Typography>
    </div>
  )
}

export default function MediaCard({ place: { name, description, image, locationLink, websiteLink, cost, weather } }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.tags}>
          <Tag>{cost} €</Tag>
          <Tag>{weather === "sunny" && <SunIcon />}{weather === "cloudy" && <CloudyIcon />}</Tag>
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
        <Link href={locationLink} target="_blank">
          <Button size="small" color="primary">
            Maps
        </Button>
        </Link>
        <Link href={websiteLink} target="_blank">
          <Button size="small" color="primary">
            Webseite
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}