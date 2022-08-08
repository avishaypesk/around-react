import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});

  const handleCardClick = (card) => setSelectedCard(card);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddNewCardClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleUpdateUser = ({ name, about }) => {
    api
      .updateUserInfo({ name, about })
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err));
  };

  const handleUpdateAvatar = (url) => {
    api
      .updateUserImage(url)
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err));
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    api
      .getUserInfo()
      .then((user) => setCurrentUser(user))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddNewCardClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        <EditAvatarPopup
          onUpdateAvatar={handleUpdateAvatar}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <PopupWithForm
          name="new-card"
          title="New place"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          buttonText="Create"
        >
          <input
            type="text"
            placeholder="Title"
            id="img-title-input"
            className="form__input form__input_type_img-title"
            name="newCardName"
            required
            minLength="1"
            maxLength="30"
          />
          <span id="img-title-input-error" className="form__input-error"></span>
          <input
            type="url"
            placeholder="Image link"
            id="img-link-input"
            className="form__input form__input_type_img-link"
            name="newCardLink"
            required
          />
          <span id="img-link-input-error" className="form__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="delete-confirm"
          title="Are you sure?"
          onClose={closeAllPopups}
        ></PopupWithForm>

        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
