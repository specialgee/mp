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
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
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
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Grid justify="space-between" container >
            <Grid item>
              <Typography variant="h6" color="inherit" noWrap>
                <Link color="inherit" href="/">MP</Link>
              </Typography>
            </Grid>
            {/* <Grid item>
              <Link color="inherit" href="/articles">Articles</Link>
            </Grid> */}
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
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
                  <Button variant="contained" color="primary">
                    <Link color="inherit" href="/articles">Articles</Link>
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    <Link color="inherit" href="/podcasts">Podcasts</Link>
                  </Button>
                </Grid>
                <Grid item>
                <Button variant="outlined" color="primary">
                    <Link color="inherit" href="/contact">Contact</Link>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="sm">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {/* {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))} */}

            <Grid item xs={6} sm={6} md={6}>
                <Link color="inherit" href="https://www.konbini.com/fr/author/mpiccarreta" target="_blank">
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image="https://cdn-www.konbini.com/fr/_next/static/images/konbiniLogo-black-7118418ffb8029ef7269a78dc48a4604.png"
                        title="Image Logo"
                        />
                        {/* <CardActions>
                        <Button size="small" color="primary">
                            <Link color="inherit" href="https://www.konbini.com/fr/author/mpiccarreta" target="_blank">KONBINI</Link>
                        </Button>
                        </CardActions> */}
                    </Card>
                </Link>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
                <Link color="inherit" href="https://www.voici.fr/google_search/search?q=mathieu+piccarreta" target="_blank">
                    <Card className={classes.card}>
                        <CardMedia
                        className={classes.cardMedia}
                        image="https://creas.prismamediadigital.com/people/logos/voici_logo.svg"
                        title="Image Logo"
                        />
                    </Card>
                </Link>
            </Grid>
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer, "footer"}>
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography> */}
        <Copyright />
      </footer>
      {/* End footer */}
    </CssBaseline>
  );
}

export default Album;