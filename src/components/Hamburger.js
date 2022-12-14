import '../styles/Hamburger.css'

// function hideMenu(menuClass) {
//   let menu = document.querySelector(`.${menuClass}`)
//   menu.addEventListener('click', function(){
//     console.log('clicou')
//   })
// }

function clickHandler(){
  let menu =document.querySelector('.menu');
  menu.classList.toggle('hidden');
}

function Hamburger(){
  return(
    <a className='hamburger' onClick={clickHandler}>
      <div className='line'></div>
      <div className='line'></div>
      <div className='line'></div>
    </a>
  )
}

export default Hamburger;