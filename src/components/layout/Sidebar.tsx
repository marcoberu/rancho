import 'boxicons';

export const Sidebar = () => {
  return (
    <nav className='sidebar'>
      <header>
        <div className='image-text'>
          <span className='image'>
            <img src='logo' alt='logo' />
          </span>
          <div className='text header-text'>
            <span className='name'>Marco Berumen</span>
            <span className='profession'>Coder</span>
          </div>
        </div>
        <i className='bx bx-chevron-right toggle'></i>
      </header>
      <div className='menu-bar'></div>
    </nav>
  );
};
