import { slide as Menu } from 'react-burger-menu'

class BurgerMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">HOME</a>
        <a id="videos" className="menu-item" href="/videos">VIDEOS</a>
        <a id="articles" className="menu-item" href="/articles">ARTICLES</a>
        <a id="podcasts" className="menu-item" href="/podcasts">PODCASTS</a>
        <a id="contact" className="menu-item" href="/contact">CONTACT</a>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  }
}

export default BurgerMenu;
