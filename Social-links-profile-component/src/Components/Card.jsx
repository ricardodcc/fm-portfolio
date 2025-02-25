import PropTypes from 'prop-types';

export default function Card({
    profile_img,
    name,
    city,
    country,
    description,
    socials
}) {
    return (
        <div className="flex flex-dc card">
            <img className="box-img card__img" src={profile_img} alt="Profile Image" />
            <div className='card__main'>
                <p>{name}</p>
                <p>{city}, {country}</p>
            </div>
            <p className='card__descr'>&quot;{description}&quot;</p>
            <ul className='card__social list-no-style flex flex-dc'>
                {socials.map((social, index) => {
                    return (
                        <li key={index} className=''>
                            <button className="btn"> {social.name} </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

Card.propTypes = {
    profile_img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    socials: PropTypes.array.isRequired
};