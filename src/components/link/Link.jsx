import PropTypes from "prop-types";

const Link = ({ route }) => {
    return (
        <div>
            <li className='ml-4 px-6 md:px-4 hover:bg-gray-200 rounded-sm duration-85' > <a href={route.path}>{route.name}</a></li>
        </div>
    );
};







Link.propTypes = {
    route: PropTypes.object
};
export default Link;
