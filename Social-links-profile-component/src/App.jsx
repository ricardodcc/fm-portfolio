import Card from "./Components/Card.jsx"

function App() {

  const cardInfo = {
    "name": "Jessica Randall",
    "city": "London",
    "country": "United Kingdom",
    "description": "Front-end developer and avid reader.",
    "profile_img" : "/public/profile-pic.png",
    "socials": [
      { "name": "GitHub" },
      { "name": "Frontend Mentor" },
      { "name": "LinkedIn" },
      { "name": "Twitter" },
      { "name": "Instagram" },
    ]
  }

  return (
    <>
      <Card
        profile_img={cardInfo.profile_img}
        name={cardInfo.name}
        city={cardInfo.city}
        country={cardInfo.country}
        description={cardInfo.description}
        socials={cardInfo.socials}
      />
    </>
  )
}

export default App
