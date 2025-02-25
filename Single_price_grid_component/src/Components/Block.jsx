import PropTypes from 'prop-types';
import Btn from './Button';
export default function Block({
    title,
    description,
    button,
    price,
    pricePerDay,
    timeInterval,
    blockClass,
    titleClass,
    descriptionClass,
    subscriptionClass,
    btnClass
}) {
    return (
        <div className={blockClass ?? ""}>
            <p className={titleClass ?? ""}>{title}</p>

            {price !== undefined && (
                <div className={subscriptionClass ?? ""}>
                    <div>
                        <span>${price}</span>
                        <span>per {timeInterval}</span>
                    </div>
                    <p className="subscription__descr component__descr-diff">Full access for less than ${pricePerDay} a day</p>
                </div>
            )}

            { button !== undefined && (
                <Btn description="Sign Up" Class={btnClass ?? ""}/>
            )}

            {description !== "" && (
                <p className={descriptionClass ?? ""}>{description}</p>
            )}
        </div>
    )
}

Block.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    button: PropTypes.bool.isRequired,
    price: PropTypes.number,
    pricePerDay: PropTypes.number,
    timeInterval: PropTypes.string,
    blockClass: PropTypes.string,
    titleClass: PropTypes.string,
    descriptionClass: PropTypes.string,
    subscriptionClass: PropTypes.string,
    btnClass: PropTypes.string
};