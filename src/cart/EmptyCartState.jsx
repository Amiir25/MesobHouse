import { FiShoppingCart } from "react-icons/fi";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const EmptyCartState = ({ message }) => {
  const navigate = useNavigate();
  return (
    <section className="text-center p-2 flex flex-col items-center justify-center h-screen">
      <FiShoppingCart className="text-3xl md:text-4xl lg:text-5xl bg-gray-100 text-gray-800 w-20 h-20 p-3 mb-4 mx-auto rounded" />
      <h3 className="text-lg font-bold text-gray-900">Your cart is empty</h3>

      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
        {message}
      </p>

      <div className="mt-6">
        <Button color="brand" onClick={() => navigate("/menu")}>
          <FaArrowLeft />
          Back to Menu
        </Button>
      </div>
    </section>
  );
};

export default EmptyCartState;
