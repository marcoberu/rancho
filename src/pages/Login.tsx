export const Login = () => {
  return (
    <div className='split-screen'>
      <div className='left'></div>
      <div className='right'>
        <form>
          <section className='copy'>
            <div className='logo_cow'></div>
            <h2>Inicia sesión</h2>
          </section>
          <div className='input-container name'>
            <label htmlFor='username'>Username</label>
            <input name='username' type='text' />
          </div>
          <div className='input-container password'>
            <label htmlFor='password'>Password</label>
            <input name='password' type='password' />
            <i className='far fa-eye-slash'></i>
          </div>
          <div className='input-container cta'>
            <label className='checkbox-container'>
              <input type='checkbox' />
              <span className='checkmark'></span>
              Recuerdame ?
            </label>
          </div>
          <button className='signup-btn' type='submit'>
            Iniciar Sesión
          </button>
          <section className='copy legal'>
            <p>
              <span className='small'>&copy; Marco Berumen 2022</span>
            </p>
          </section>
        </form>
      </div>
    </div>
  );
};
