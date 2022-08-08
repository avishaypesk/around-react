import PopupWithForm from "./PopupWithForm";
import React from "react";

export default function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [cardName, setCardName] = React.useState("");
  const [cardLink, setCardLink] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddPlaceSubmit({ name: cardName, link: cardLink });
    onClose();
  };

  const handleCardNameChange = (event) => setCardName(event.target.value);

  const handleCardLinkChange = (event) => setCardLink(event.target.value);

  return (
    <PopupWithForm
      name="new-card"
      title="New place"
      isOpen={isOpen}
      onClose={onClose}
      buttonText="Create"
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleCardNameChange}
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
        onChange={handleCardLinkChange}
        type="url"
        placeholder="Image link"
        id="img-link-input"
        className="form__input form__input_type_img-link"
        name="newCardLink"
        required
      />
      <span id="img-link-input-error" className="form__input-error"></span>
    </PopupWithForm>
  );
}
