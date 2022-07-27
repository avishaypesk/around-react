import React from "react";
import pencil from "../images/edit-avatar.svg";
import api from "../utils/api";
import Card from "./Card";

export default function Main(props) {
  const [user, setUserInfo] = React.useState({});
  const [cards, loadCards] = React.useState([]);
  React.useEffect(() => {
    api
      .init()
      .then(([cards, user]) => {
        setUserInfo(user);
        loadCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" style={{ backgroundImage: `url(${user.avatar})` }}>
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
            <h1 className="profile__name">{user.name}</h1>
            <button
              type="button"
              className="button profile__edit-button"
              onClick={props.onEditProfileClick}
            ></button>
          </div>
          <p className="profile__title">{user.about}</p>
        </div>
        <button
          type="button"
          className="button profile__add-button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>

      <section className="places">
        {cards.map((card) => {
          return <Card key={card._id} card={card} onCardClick={props.onCardClick} />;
        })}
      </section>
    </main>
  );
}
