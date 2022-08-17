export interface AuthProps {
  isAuthenticated: boolean;
  role: string;
}

export interface _Login {
  setAuth: React.Dispatch<React.SetStateAction<AuthProps>>;
  auth?: AuthProps;
}
export const Login = ({ setAuth }: _Login) => {
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
            <label htmlFor='username'>Usuario</label>
            <input name='username' type='text' />
          </div>
          <div className='input-container password'>
            <label htmlFor='password'>Contraseña</label>
            <input name='password' type='password' />
            <i className='far fa-eye-slash'></i>
          </div>
          <div className='input-container cta'>
            <label className='checkbox-container'>
              <input type='checkbox' />
              <span className='checkmark'></span>
              Recuérdame ?
            </label>
          </div>
          <button
            onClick={(e) => {
              setAuth({ isAuthenticated: true, role: 'admin' });
            }}
            className='signup-btn'
            type='submit'
          >
            Vamos!
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
