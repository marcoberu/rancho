export const Card = () => {
  return (
    <div className='card one'>
      <div className='info'>Resumen</div>
      <div className='details'>
        <div className='plan'>
          <span>Producto</span>
          <span className='data'>Maiz</span>
        </div>
        <div className='plan'>
          <span>Proveedor</span>
          <span className='data'>Maiz</span>
        </div>
        <div className='plan'>
          <span>Fecha de pedido</span>
          <span className='data'>17/08/2022</span>
        </div>

        <div className='plan'>
          <span>Fecha del pagó</span>
          <span className='data'>17/09/2022</span>
        </div>
        <div className='plan'>
          <span>Precio</span>
          <span className='data'>12,50 MXN</span>
        </div>
        <div className='plan'>
          <span>Kilos</span>
          <span className='data'>600 kg</span>
        </div>
        <div className='plan'>
          <span>Total</span>
          <span className='data'>{12.5 * 600} MXN</span>
        </div>
      </div>
    </div>
  );
};
