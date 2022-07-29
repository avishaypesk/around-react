export default function Card(props) {
  const handleClick = () => props.onCardClick(props.card);
  return (
    <article className="places__card">
      <button type="button" className="button places__remove-button"></button>
      <img src={props.card.link} alt={props.card.name} className="places__image" onClick={handleClick} />
      <div className="places__bottom">
        <h2 className="places__title">{props.card.name}</h2>
        <div className="places__like-section">
          <button type="button" className="button places__like-button"></button>
          <span className="places__like-count">{props.card.likes.length}</span>
        </div>
      </div>
    </article>
  );
}
