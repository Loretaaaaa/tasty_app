import logoImg from '../assets/logo.png';

export default function Header () {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logoImg} alt='Restaurant logo' />
        <h1>OMG... Tasty, Tasty food!!!</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>

  )
}