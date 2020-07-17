import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import BurgerMenu from '../src/BurgerMenu.js';

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Mathieu PICCARRETA
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Album() {
  const classes = useStyles();

  return (
    <CssBaseline>
      <AppBar position="relative">
        <BurgerMenu />
        <Toolbar className="nav-toolbar">
          <Grid justify="space-between" container >
            <Grid item>
              <Typography variant="h6" color="inherit" noWrap>
                <Link color="inherit" href="/">MP</Link>
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <main className="page-contact">
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography className="main-title" component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              MATHIEU PICCARRETA
            </Typography>
            <Typography variant="h5" align="center">
              <p className="main-subtitle"> Rédacteur / Chroniqueur / Coordinateur Radio </p>
              {/* <p className="main-description">
                📞<Link color="inherit" href="https://rmc.bfmtv.com/" target="_blank"> RMC, </Link>
                🎙️<Link color="inherit" href="https://www.radiocampusparis.org/" target="_blank"> Radio Campus Paris, </Link>
                ✍️<Link color="inherit" href="https://www.conflits.info/" target="_blank"> Conflits, </Link>
                <br></br>
                <span className="subtitle-small-text"> passé par </span>
                <Link color="inherit" href="https://www.melty.fr/" target="_blank"> Melty, </Link>
                <Link color="inherit" href="https://www.konbini.com/fr" target="_blank"> Konbini, </Link>
                <Link color="inherit" href="https://www.publicisgroupe.com/fr/services-fr/services-publicis-media-fr" target="_blank"> Publicis Media, </Link>
                <Link color="inherit" href="http://rockyrama.com/" target="_blank"> Rockyrama </Link>
              </p> */}
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="outlined" color="primary">
                    <Link color="inherit" href="/articles">Articles</Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    <Link color="inherit" href="/podcasts">Podcasts</Link>
                  </Button>
                </Grid>
                <Grid item>
                <Button variant="contained" color="primary">
                    <Link color="inherit" href="/contact">Contact</Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="sm">
          {/* End hero unit */}
          <Grid className="main-grid" container spacing={6}>
            <Grid item xs={6} sm={6} md={4}>
                <Link color="inherit" href="https://www.facebook.com/mathieu.piccarreta.5" target="_blank">
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png"
                        title="Image Logo"
                        />
                    </Card>
                </Link>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <Link color="inherit" href="https://twitter.com/MathieuPccrrta" target="_blank">
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image="https://cdn.icon-icons.com/icons2/836/PNG/512/Twitter_icon-icons.com_66803.png"
                        title="Image Logo"
                        />
                    </Card>
                </Link>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <Link color="inherit" href="https://www.instagram.com/mathieupiccarreta/" target="_blank">
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/768px-Instagram_icon.png"
                        title="Image Logo"
                        />
                    </Card>
                </Link>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <Link color="inherit" href="https://www.linkedin.com/in/mathieu-piccarreta-3a4500101/?originalSubdomain=fr" target="_blank">
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image="https://www.crossfitchelles.com/wp-content/uploads/2019/03/linkedin-icon-logo-png-transparent.png"
                        title="Image Logo"
                        />
                    </Card>
                </Link>
            </Grid>
            <Grid item xs={6} sm={6} md={4}>
                <Link color="inherit" href="https://www.youtube.com/channel/UC8joBbON7hHOd4_Z4uFE1uw" target="_blank">
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image="https://i.pinimg.com/originals/19/7b/36/197b365922d1ea3aa1a932ff9bbda4a6.png"
                        title="Image Logo"
                        />
                    </Card>
                </Link>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer, "category-footer"}>
        <Copyright />
      </footer>
      {/* End footer */}
    </CssBaseline>
  );
}

export default Album;