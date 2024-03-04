import logoImg from '../assets/logo.png';
import Button from './UI/Button';

export default function Header () {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logoImg} alt='Restaurant logo' />
        <h1>OMG... Tasty, Tasty food!!!</h1>
      </div>
      <nav>
        <Button textOnly>Cart (0)</Button>
      </nav>
    </header>

  )
}