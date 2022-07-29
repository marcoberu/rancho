export const Login = () => {
  return (
    <div className='split-screen'>
      <div className='left'>
        <section className='copy'>
          <h1>Rancho San Jose de Buena Vista</h1>
        </section>
      </div>
      <div className='right'>
        <form>
          <section className='copy'>
            <h2>Login</h2>
          </section>
          <div className='input-container name'>
            <label>Username</label>
            <input name='username' type='text' />
          </div>
          <div className='input-container password'>
            <label>Password</label>
            <input name='password' type='password' />
            <i className='far fa-eye-slash'></i>
          </div>
          <button className='signup-btn' type='submit'>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
