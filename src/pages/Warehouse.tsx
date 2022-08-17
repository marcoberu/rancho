export const Warehouse = () => {
  return (
    <div className='container'>
      <header>Añadir Pedido</header>
      <form>
        <div className='form first'>
          <div className='details personal'>
            <span className='title'>Personal Details</span>
            <div className='fields'>
              <div className='input-field'>
                <label htmlFor='name'>Full Name</label>
                <input type='text' placeholder='Nombre Completo' />
              </div>
              <div className='input-field'>
                <label htmlFor='name'>Fecha</label>
                <input type='date' />
              </div>
              <div className='input-field'>
                <label htmlFor='masa'>Kilos</label>
                <input type='number' placeholder='masa' />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
