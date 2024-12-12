import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";

const Feature = ({ feature }) => {
    return (
        <div className="mt-2 text-center font-bold">
            <h3 className="text-red-800 flex"><TiTick className="mt-2 text-black text-1xl mr-1"></TiTick> {feature}</h3>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.object.isRequired,

}
export default Feature;