import React, { useEffect } from 'react'
// import { useSpring, animated } from 'react-spring'
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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import LinkIcon from '@material-ui/icons/Link'
import GitHubIcon from '@material-ui/icons/GitHub'
import hoverEffect from 'hover-effect'
import '../styles/main.scss'


const gameProject = ['JavaScript', 'GitHub', 'HTML', 'CSS', 'Heroku', 'VScode', 'trello']
const gameProject2 = ['Node.js', 'JavaScript', 'React.js', 'HTML', 'CSS', 'bulma', 'npm', 'VScode']
const gameProject3 = ['JavaScript', 'React.js', 'MongoDB', 'Node.js', 'Git', 'HTML', 'CSS', 'bulma', 'npm']
const gameProject4 = ['Python', 'Django', 'Node.js', 'JavaScript', 'React.js', 'Git', 'trello', 'VScode', 'Heroku']

const content = [
  {
    icon: 'email',
    text: 'julien.xemard@outlook.com',
    link: 'mailto:julien.xemard@outlook.com'
  },
  {
    icon: 'linkedIn',
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/julienxemard/'
  },
  {
    icon: 'github',
    text: 'GitHub',
    link: 'https://github.com/JulienXemard'
  }
]


function About() {

  const useStyles = makeStyles((theme) => ({
    root: {
      color: 'white',
      fontFamily: 'Nunito',
      maxWidth: 345,
      [theme.breakpoints.down('md')]: {
        maxWidth: 250
      },
      backgroundColor: 'black',
      borderBlockStyle: '1px',
      borderColor: '#41b4d3'
    },

    icon: {
      color: 'primary'
    },

    typography: {
      color: 'white',
      fontFamily: 'Nunito'
    },

    media: {
      color: '#41b4d3',
      height: 400,
      paddingTop: '0%'
    },

    expand: {
      color: '#41b4d3',
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },

    expandOpen: {
      transform: 'rotate(180deg)'
    },

    avatar: {
      color: 'black',
      backgroundColor: '#41b4d3'
    }
  }))


  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    new hoverEffect({
      parent: document.querySelector('#pOne'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/plD3syj.png',
      image2: 'https://i.imgur.com/NLBPiNF.png',
      displacementImage: 'https://i.imgur.com/WtE8GdV.jpg',
      speedIn: 1.5,
      speedOut: 1.5
    })

    new hoverEffect({
      parent: document.querySelector('#pTwo'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/C9oaEVK.png',
      image2: 'https://i.imgur.com/6fXERmm.png',
      displacementImage: 'https://i.imgur.com/WtE8GdV.jpg',
      speedIn: 1.5,
      speedOut: 1.5
    })

    new hoverEffect({
      parent: document.querySelector('#pThree'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/TwGF1iI.png',
      image2: 'https://i.imgur.com/Do0oqjS.png',
      displacementImage: 'https://i.imgur.com/WtE8GdV.jpg',
      speedIn: 1.5,
      speedOut: 1.5
    })

    new hoverEffect({
      parent: document.querySelector('#pFour'),
      intensity: 0.4,
      image1: 'https://i.imgur.com/UMFrQ4F.png',
      image2: 'https://i.imgur.com/AtbKZVD.png',
      displacementImage: 'https://i.imgur.com/WtE8GdV.jpg',
      speedIn: 1.5,
      speedOut: 1.5
    })
  }, [])

  return (
    <section className="section tech" id="tech">
      <div className="projects">
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                1
              </Avatar>
            }
            title="Project | X-Wing"
            subheaderTypographyProps={{ color: 'white' }}
            subheader="July 25th, 2020"
          />
          <CardMedia id="pOne"
            className={classes.media}
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
            <IconButton 
              href="https://julienxemard.github.io/gameProject/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon className="link-icon" />
            </IconButton>
            <IconButton 
              aria-label="share"
              href="https://github.com/JulienXemard/gameProject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="GH-icon"/>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
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
              The game offers the user an immersive Star Wars shooting experience which includes a AR space wrap.
              An exciting <span className="hook-text">first coding experience</span> that gave me a good understanding of what developers are dealing with in reality! The <span className="hook-text">logical challenges</span> & frustrations that lead to incredible mental sastifactions once solved <span className="hook-text">converted me.</span><br /><br />
              The brief allowed for <span className="hook-text">7 days to create a game</span>, strictly restricted to <span className="hook-text">vanilla JS</span> (no canvas), HTML & CSS. It was interesting yet incredibly challenging to come up with solutions to <span className="hook-text">implement 3D along with 2D.</span><br /><br /> This project opened my eyes on the <span className="hook-text">programming community</span> & the ressources available to <span className="hook-text">help you grow.</span>
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
            title="Hackathon | APPi"
            subheaderTypographyProps={{ color: 'white' }}
            subheader="August 13th, 2020"
          />
          <CardMedia id="pTwo"
            className={classes.media}
            title="API React Project"
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
            <IconButton 
              aria-label="share"
              href="https://github.com/JulienXemard/reactProject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="GH-icon"/>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
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
              The brief was 'simple': <span className="hook-text">Group of 2 & 48h</span> to create a ReactJS website using third party APIs. The App gives users all bike locations around is gealocation as well as weather & polution metrics.
              An ambitious first <span className="hook-text">ReactJS</span> project as we linked our App to <span className="hook-text">4 APIs</span> which was an incredible team effort & an excellent <span className="hook-text">technical learning curve</span> given our experience & the timeframe<br /><br />
              This <span className="hook-text">Hackathon</span> required a meticulous preparation in order to efficiently redistribute the tasks. 
              This project gave an excellent introduction to <span className="hook-text">pair coding</span> & the necessity to communicate around clear deadlines to reach the project objectives.<br /><br />
              Fortunately I met Brenda Ty, who has similar <span className="hook-text">working ethics</span> along with a crazy mentallity which positively spiced up this Hackathon.
              The <span className="hook-text">logical challenges</span> aren't meant to be negative nor boring situations. It was up to us to transform these difficult moment into meliorative & fun ones which impacted our <span className="hook-text">productivity positively.</span>
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
            title="Full Stack | Nalu"
            subheaderTypographyProps={{ color: 'white' }}
            subheader="August 28th, 2020"
          />
          <CardMedia id="pThree"
            className={classes.media}
            title="React Mongo Project"
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
            <IconButton 
              href="https://naluwave.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon className="link-icon" />
            </IconButton>
            <IconButton 
              aria-label="share"
              href="https://github.com/JulienXemard/mongoReact-Project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="GH-icon" />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
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
              A first <span className="hook-text">Full Stack</span> group project (4p). Nalu allows users to find all the best <span className="hook-text">surf spots</span> around the world with their <span className="hook-text">current weather & tidal information</span> (APIs). The brief provisionned for 7 days to create a <span className="hook-text">ReactJS Client</span> front along with a <span className="hook-text">MongoDB</span> as a Backend.<br /><br />A real life team experience using <span className="hook-text">Git (Main | Development | Branches)</span> that required a meticulous wireframe preparation & tasks redistribution. My previous experiences allowed me to lead this project to its objectives which raised <span className="hook-text">interesting challenges.</span><br /><br />
              The use of Trello & the daily <span className="hook-text">Stand Up meetings</span> were essential to track the progression of tasks & <span className="hook-text">objectives acheivements.</span> Our inexperience was compensated by excellent communication & <span className="hook-text">group solutions</span> whenever a pair or individual was in difficulty.<br /><br />This intense project was a <span className="hook-text">good reality check</span> which seriously tested our coding abilities in a sharing environment. It surely <span className="hook-text">enhanced my debugging abilities!</span>
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
            title="Full Stack | APPerture"
            subheaderTypographyProps={{ color: 'white' }}
            subheader="September 17th, 2020"
          />
          <CardMedia id="pFour"
            className={classes.media}
            title="Final Project"
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
            <IconButton 
              aria-label="add to favorites"
              href="http://apperture-project.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkIcon className="link-icon" />
            </IconButton>
            <IconButton 
              aria-label="share"
              href="https://github.com/JulienXemard/APPerture-FinalProject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="GH-icon"/>
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
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
              A <span className="hook-text">Full Stack</span> Project created in 7 days using <span className="hook-text">ReactJs</span> along with <span className="hook-text">Python & Django</span> Rest Framework.
              We had the choice to either do it individually or in group. Brenda Ty & I decided to grow our <span className="hook-text">pair coding</span> abilities in order to be exposed to the <span className="hook-text">market requriements.</span>
                <br /><br />We also agreed to push ourselves using <span className="hook-text">React Hooks</span> which was conditional along with <span className="hook-text">Material UI.</span> With no previous experience or knowledge, we also decided to use <span className="hook-text">React-Spring</span> to render some <span className="hook-text">parallax</span> effects.
              Factorising it all to our project was such a challenge yet an <span className="hook-text">excellent learning curve.</span>
                <br /><br />The mental satisfaction to <span className="hook-text">use technologies</span> we never used before was increadly <span className="hook-text">rewarding</span> for us & our <span className="hook-text">final product.</span> 
                <span className="hook-text">APPerture</span> has been inspired by Instagram. Our application allows users to <span className="hook-text">created a profile and post</span> monochrome photographes. We created a one to many as well as many to many <span className="hook-text">relatioships</span> as the users have the abilities to <span className="hook-text">follow</span> each others, <span className="hook-text">leave comments & like.</span>
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      <div className="contact">
        {content.map(link => (
          <div key={link.text} className="info-lines">
            <a href={link.link} target="_blank">
              <SvgIcon
                width={40}
                height={40}
                icon={link.icon}
                primaryFill={'#41b4d3'}
                secondaryFill={'#242323'}
                backgroundFill={'#242323'}
              />
              {/* <h3>{link.text}</h3> */}
            </a>
          </div>
        ))}
      </div>
    </section>

  )
}

export default About

