import React from 'react'
import { useSpring, animated } from 'react-spring'
import { SvgIcon } from './Icons'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/main.scss'

// const technicalSkills = ['Node.js', 'JavaScript', 'React.js', 'MongoDB', 'PostgreSQL', 'Git', 'GitHub', 'trello', 'HTML', 'CSS', 'bulma', 'npm', 'Heroku', 'VScode']

const gameProject = ['JavaScript', 'GitHub', 'HTML', 'CSS', 'Heroku', 'VScode', 'trello']
const gameProject2 = ['Node.js', 'JavaScript', 'React.js', 'HTML', 'CSS', 'bulma', 'npm', 'VScode']
const gameProject3 = ['JavaScript', 'React.js', 'MongoDB', 'Node.js', 'Git', 'HTML', 'CSS', 'bulma', 'npm']
const gameProject4 = ['Python', 'Django', 'Node.js', 'JavaScript', 'React.js', 'Git', 'trello', 'VScode', 'Heroku']



function About() {

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      backgroundColor: 'black',
      borderColor: '#41b4d3'
    },

    Typography: {
      fontFamily: 'Nunito',
    },

    media: {
      fontColor: '#41b4d3',
      height: 0,
      paddingTop: '56.25%', // 16:9
    },

    expand: {
      color: '#41b4d3',
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },

    expandOpen: {
      transform: 'rotate(180deg)',
    },

    avatar: {
      color: 'black',
      backgroundColor: '#41b4d3',
    },

  }))

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

  return (
    <section className="section tech" id="tech">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              1
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/plD3syj.png"
          title="Individual Game Project"
        />
        <CardContent>
          <div className="logo-container">
          {gameProject.map(icon => (
            <div key={icon} className="tech-logo">
              <SvgIcon
                width={22}
                height={22}
                icon={icon}
                primaryFill={'#41b4d3'}
                secondaryFill={'#ffffff'}
                backgroundFill={'#242323'}
              />
            </div>
          ))}
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <LinkIcon className="link-icon" />
          </IconButton>
          <IconButton aria-label="share">
            <GitHubIcon className="GH-icon" />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          Created a 2D|3D game within 7 days. Restricted to vanilla JS (no canvas).<br /><br /> It was interesting, yet incredibly challenging, to come up with original solutions to implement AR along 2D.<br /><br /> This first coding experience gave me a good understanding of what developers are dealing with in reality.
          </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              2
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/AtbKZVD.png"
          title="Individual Game Project"
        />
        <CardContent>
          <div className="logo-container">
          {gameProject2.map(icon => (
            <div key={icon} className="tech-logo">
              <SvgIcon
                width={22}
                height={22}
                icon={icon}
                primaryFill={'#41b4d3'}
                secondaryFill={'#ffffff'}
                backgroundFill={'#242323'}
              />
            </div>
          ))}
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <LinkIcon className="link-icon" />
          </IconButton>
          <IconButton aria-label="share">
            <GitHubIcon className="GH-icon" />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          48h to create a ReactJS website using third party APIs. An ambitious first React project as we linked our App to 3 APIs which was an incredible team effort and an excellent technical learning curve.<br /><br />
          This Hackathon required a meticulous preparation, redistribution of tasks and pair coding efficiency.<br /><br />Brenda Ty, my coding partner, had not only a similar working ethic but also a temperament that made this Hackathon... interesting.
          </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              3
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/TwGF1iI.png"
          title="Individual Game Project"
        />
        <CardContent>
          <div className="logo-container">
          {gameProject3.map(icon => (
            <div key={icon} className="tech-logo">
              <SvgIcon
                width={22}
                height={22}
                icon={icon}
                primaryFill={'#41b4d3'}
                secondaryFill={'#ffffff'}
                backgroundFill={'#242323'}
              />
            </div>
          ))}
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <LinkIcon className="link-icon" />
          </IconButton>
          <IconButton aria-label="share">
            <GitHubIcon className="GH-icon" />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          Created a 2D|3D game within 7 days. Restricted to vanilla JS (no canvas). It was interesting, yet incredibly challenging, to come up with original solutions to implement AR along 2D.<br /> This first coding experience gave me a good understanding of what developers are dealing with in reality.
          </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              4
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image="https://i.imgur.com/UMFrQ4F.png"
          title="Individual Game Project"
        />
        <CardContent>
          <div className="logo-container">
          {gameProject4.map(icon => (
            <div key={icon} className="tech-logo">
              <SvgIcon
                width={22}
                height={22}
                icon={icon}
                primaryFill={'#41b4d3'}
                secondaryFill={'#ffffff'}
                backgroundFill={'#242323'}
              />
            </div>
          ))}
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <LinkIcon className="link-icon" />
          </IconButton>
          <IconButton aria-label="share">
            <GitHubIcon className="GH-icon" />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          Created a 2D|3D game within 7 days. Restricted to vanilla JS (no canvas). It was interesting, yet incredibly challenging, to come up with original solutions to implement AR along 2D.<br /> This first coding experience gave me a good understanding of what developers are dealing with in reality.
          </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </section>
  )
}

export default About

