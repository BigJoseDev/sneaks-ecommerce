import "../Checkout/CheckoutCom.css";
import paypal from "../../assets/images/paypal.png";

const CheckoutCom = () => {
  return (
    <div className="CheckoutCom">
      <div className="checkout-heading">
        <h1>Check Out</h1>
      </div>
      <div className="info-summary">
        <div className="left-info">
          <div className="info-payment">
            <div className="first-form">
              <p>Personal information</p>
              <form action="">
                <input type="text" placeholder="Enter Full name" />
                <input type="text" placeholder="Phone No" />
              </form>
            </div>
            
            <div className="address-form">
                <p>Address</p>
                <form action="">
                    <input type="text" placeholder="Enter Address" />
                    <input type="text" placeholder="Landmark  (optional)" />
                    <input type="text" placeholder="Country" />
                    <input type="text" placeholder="State" />
                    <input type="text" placeholder="Postal Code" />
                </form>
            </div>
            <div className="payment">
                <div className="payment-name">
                <p>payment</p>
                </div>
                
                <div className="payment-options">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Paypal</label>
                    </div>
                    <img src={paypal} alt="" />
                    

            </div>
          </div>
        </div>



        <div className="right-summary"></div>
      </div>
    </div>
  );
};

export default CheckoutCom;
