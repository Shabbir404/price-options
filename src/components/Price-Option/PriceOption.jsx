import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-green-400 rounded-xl p-4 mt-8 text-center hover:bg-green-500 duration-150 ">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="2xl">/month</span>

            </h2>
            <h4 className="4xl text-center">{name}</h4>
            <div className="ml-4">
                {
                    features.map((feature, i) => <Feature key={i} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-8 w-full bg-red-800 text-white py-3 rounded-xl
            font-bold hover:bg-red-600 duration-150">Buy Now</button>
        </div>

    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired,

}

export default PriceOption;