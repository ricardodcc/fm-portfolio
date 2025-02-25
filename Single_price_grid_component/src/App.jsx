import Block from "./Components/Block"

export default function App() {
  return (
    <>
      <div className="component">
        <div className="component__header flex flex-dc">
          <h1 className="component__title component__title-diff">Join our community</h1>
          <p className="component__subtitle component__subtitle-diff">30-day, hassle-free money back guarantee</p>
          <p className="component__descr">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className="component__body flex">
        < Block
            title="Monthly Subscription"
            blockClass="component__block flex flex-dc flex-afs"
            titleClass="component__title"
            descriptionClass="component__descr"
            subscriptionClass="subscription flex flex-dc flex-afs"
            btnClass="flex flex-cc btn"
            price= '29'
            pricePerDay='1'
            timeInterval='month'
            button = 'True'
          />
        < Block
          title="Why Us"
          blockClass="component__block component__block-sec"
          titleClass="component__title"
          descriptionClass="component__descr component__descr-light"
          description="Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week"
        />
        </div>
      </div>
    </>
  )
}
