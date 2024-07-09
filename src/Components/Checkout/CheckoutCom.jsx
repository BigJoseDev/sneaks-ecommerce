import "../Checkout/CheckoutCom.css";
import paypal from "../../assets/images/paypal.png";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/mastercard.png";

const CheckoutCom = () => {
  return (
    <div className="CheckoutCom">
      <div className="checkout-heading">
        <h1>Check Out</h1>
      </div>

      <div className="info-summary">
        <div className="left-info">
          <form action="">
            <div className="info-payment">
              <div className="personal-info">
                <p>Personal information</p>
                <div className="personal-info-form">
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Enter Full name"
                  />
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Phone No"
                  />
                </div>
              </div>

              <div className="address">
                <p>Address</p>
                <div className="address-country">
                  <div className="address-form">
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Enter Address"
                    />
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Landmark  (optional)"
                    />
                  </div>

                  <div className="country-form">
                    <input
                      className="country"
                      type="text"
                      placeholder="Country"
                    />
                    <input
                      className="country"
                      type="text"
                      placeholder="State"
                    />
                    <input
                      className="country"
                      type="text"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
              </div>

              <div className="payment">
                <p>Payment</p>

                <div className="paypal">
                  <div className="input-label">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Paypal</label>
                  </div>

                  <img  src={paypal} alt="" />
                </div>

                <div className="credit-debit">
                  <div className="credit-input-label">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Credit or Debit Card</label>
                  </div>
                  <div className="visa-master">
                    <img src={visa} alt="" />
                    <img src={mastercard} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="paynow">
              <button>PAY NOW</button>
            </div>
          </form>
        </div>

        <div className="summary-right-cart">
          <div className="cart-summary">
            <h1>Summary</h1>
          </div>

          <div className="estimate">
            <div className="sub-total">
              <p>Subtotal</p>
              <p>$490</p>
            </div>
            <div className="sub-total">
              <p>Estimated Shipping</p>
              <p>$490</p>
            </div>
            <div className="sub-total">
              <p>Estimated Tax</p>
              <p>-</p>
            </div>
          </div>
          <div className="total">
            <p>Total</p>
            <h3>$498.00</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCom;
