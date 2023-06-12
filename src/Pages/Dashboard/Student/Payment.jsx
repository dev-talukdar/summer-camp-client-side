
import { Elements } from "@stripe/react-stripe-js";  
import { loadStripe } from "@stripe/stripe-js"; 
import CheckOutForm from "../Payment/CheckOutForm";
import useCart from "../../../hooks/useCart";


// TODO: provide publish key 
const stripePromise = loadStripe(import.meta.env.VITE_PaymentGateway_PK)

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, product) => sum + product.price, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div className="w-full">
            

            <Elements stripe={stripePromise}>
                 <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>



        </div>
    );
};

export default Payment;