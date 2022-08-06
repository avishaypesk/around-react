import React, { useContext } from "react";
import pencil from "../images/edit-avatar.svg";
import api from "../utils/api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = useContext(CurrentUserContext);

  const handleCardLike = (card, isLiked) => {
    api
      .handleLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) => (currentCard._id === card._id ? newCard : currentCard))
        );
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}>
          <div className="profile__avatar-overlay">
            <img
              src={pencil}
              alt="edit avatar"
              className="profile__avatar-icon"
              onClick={props.onEditAvatarClick}
            />
          </div>
        </div>
        <div className="profile__profile-info">
          <div className="profile__name-wrapper">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="button profile__edit-button"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
          <p className="profile__title">{currentUser.about}</p>
        </div>
        <button
          type="button"
          className="button profile__add-button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>

      <section className="places">
        {cards.map((card) => {
          return <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={handleCardLike}/>;
        })}
      </section>
    </main>
  );
}
