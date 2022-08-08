import PopupWithForm from "./PopupWithForm";
import React from "react";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const imageInput = React.createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdateAvatar(imageInput.current.value);
    imageInput.current.value = "";
    onClose();
  };

  return (
    <PopupWithForm
      name="profile-avatar"
      title="Change Profile Picture"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Save"
    >
      <input
        ref={imageInput}
        type="url"
        placeholder="Image URL"
        id="profile-avatar-url-input"
        className="form__input form__input_type_avatar-url"
        name="profileImageUrlInput"
        required
        minLength="1"
      />
      <span id="profile-avatar-url-input-error" className="form__input-error"></span>
    </PopupWithForm>
  );
}
