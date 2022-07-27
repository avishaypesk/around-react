import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  const handleCardClick = (card) => setSelectedCard(card);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddNewCardClick = () => {
    setAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard();
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddNewCardClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profile"
        title="Edit profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          placeholder="Name"
          id="name-input"
          className="form__input form__input_type_name"
          name="profileName"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="name-input-error" className="form__input-error"></span>
        <input
          type="text"
          placeholder="Title"
          id="title-input"
          className="form__input form__input_type_title"
          name="profileTitle"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="title-input-error" className="form__input-error"></span>
        <button type="submit" className="button form__save-button">
          Save
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="new-card"
        title="New place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
        <button type="submit" className="button form__save-button">
          Create
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="profile-avatar"
        title="Change Profile Picture"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          placeholder="Image URL"
          id="profile-avatar-url-input"
          className="form__input form__input_type_avatar-url"
          name="profileImageUrlInput"
          required
          minLength="1"
        />
        <span id="profile-avatar-url-input-error" className="form__input-error"></span>
        <button type="submit" className="button form__save-button">
          Save
        </button>
      </PopupWithForm>
      <PopupWithForm name="delete-confirm" title="Are you sure?" onClose={closeAllPopups}>
        <button type="submit" className="button form__save-button"></button>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
