import { BiNavigation } from 'react-icons/bi';
import { getToday } from '../utils/date';
// import { FormatNumber } from '../utils/formatNumber';
import { Card } from '../components/Card';

export const Warehouse = () => {
  return (
    <div>
      <div className='container'>
        <div className='left_warehouse'>
          <header>Añadir Pedido</header>
          <form>
            <div className='form first'>
              <div className='details personal'>
                <span className='title'>Detalles del pedido</span>
                <div className='fields'>
                  <div className='input-field'>
                    <label htmlFor='product'>Producto</label>
                    <select name='product'>
                      <option value='maiz'>Maíz</option>
                      <option value='pasta_de_soya'>Pasta de soya</option>
                      <option value='pasta_de_canola'>Pasta de canola</option>
                      <option value='soy_plus'>Soy plus</option>
                      <option value='alfalfa'>Alfalfa</option>
                      <option value='silo_de_maiz'>Silo de Maíz</option>
                      <option value='salvado_de_trigo'>Salvado de trigo</option>
                      <option value='energivac'>Energivac</option>
                      <option value='algodon'>Algodón</option>
                    </select>
                  </div>
                  <div className='input-field'>
                    <label htmlFor='supplier'>Proveedor</label>
                    <select name='supplier'>
                      <option value='maiz'>Maíz</option>
                      <option value='pasta_de_soya'>Pasta de soya</option>
                      <option value='pasta_de_canola'>Pasta de canola</option>
                      <option value='soy_plus'>Soy plus</option>
                      <option value='alfalfa'>Alfalfa</option>
                      <option value='silo_de_maiz'>Silo de Maíz</option>
                      <option value='salvado_de_trigo'>Salvado de trigo</option>
                      <option value='energivac'>Energivac</option>
                      <option value='algodon'>Algodón</option>
                    </select>
                  </div>
                  <div className='input-field'>
                    <label htmlFor='name'>Fecha del pedido</label>
                    <input defaultValue={getToday()} type='date' />
                  </div>
                  <div className='input-field'>
                    <label htmlFor='fecha_de_pago'>Fecha del pagó</label>
                    <input min={getToday()} type='date' name='fecha_de_pago' />
                  </div>
                  <div className='input-field'>
                    <label htmlFor='price'>Precio</label>
                    <input type='text' placeholder='12.20' />
                  </div>
                  <div className='input-field'>
                    <label htmlFor='masa'>Kilos</label>
                    <input type='number' placeholder='kg' />
                  </div>
                </div>
              </div>
              <button className='nextBtn'>
                <span className='btnText'>Next</span>
                <BiNavigation className='icon' />
              </button>
            </div>
          </form>
        </div>
        <Card />
      </div>
    </div>
  );
};
