import React, {useState} from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../ContextProvider'
import { getCartTotal } from '../context/StateReducer'

import './subtotal.css'
function Subtotal() {

  const [quantity, setQuantity] = useState(0);
  const [{cart}, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
            
              Subtotal({cart.length} items): <strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order Contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandsSeparater={true}
        prefix={"$"}
      />

      <button>Procced to CheckOut </button>
    </div>
  )
}

export default Subtotal
