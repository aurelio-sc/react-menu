import '../styles/Nav.css';
import Hamburger from './Hamburger';

function Nav(props){
  let menuTitles = props.titles;

  const makeMenuItems = (array) => {
    let menu = [];
    let i = 1;
    array.forEach(item => {      
      menu.push(<li key={i.toString()} className="menu-item"><a>{item}</a></li>)
      i++;
    })
    return menu;
  }

  return (
    <header>
    <ul className="menu">
      {makeMenuItems(menuTitles)}
    </ul>
    <Hamburger/>
    </header>
    );
}

export default Nav;