import logo from "./images/Vector.svg";
import pencil from "./images/edit-avatar.svg";

function App() {
  return (
    <div className="page">
      <header className="header">
        <img src={logo} alt="Around the U.S." className="header__title" />
      </header>
      <main>
        <section className="profile">
          <div className="profile__avatar">
            <div className="profile__avatar-overlay">
              <img src={pencil} alt="edit avatar" className="profile__avatar-icon" />
            </div>
          </div>
          <div className="profile__profile-info">
            <div className="profile__name-wrapper">
              <h1 className="profile__name"></h1>
              <button type="button" className="button profile__edit-button"></button>
            </div>
            <p className="profile__title"></p>
          </div>
          <button type="button" className="button profile__add-button"></button>
        </section>

        <section className="places"></section>
      </main>

      <footer className="footer">
        <p className="footer__paragraph">© 2021 Around The U.S.</p>
      </footer>

      <template id="card-template">
        <article className="places__card">
          <button type="button" className="button places__remove-button"></button>
          <img src=" " alt="" className="places__image" />
          <div className="places__bottom">
            <h2 className="places__title"></h2>
            <div className="places__like-section">
              <button type="button" className="button places__like-button"></button>
              <span className="places__like-count"></span>
            </div>
          </div>
        </article>
      </template>

      <div className="popup form form_type_profile">
        <div className="form__container form__container_type_profile">
          <button type="button" className="button popup__close-button"></button>
          <form
            className="form form__edit-profile popup__form"
            name="profileForm"
            novalidate
          >
            <h3 className="form__title">Edit profile</h3>
            <input
              type="text"
              placeholder="Name"
              id="name-input"
              className="form__input form__input_type_name"
              name="profileName"
              minlength="2"
              maxlength="40"
              required
            />
            <span id="name-input-error" className="form__input-error"></span>
            <input
              type="text"
              placeholder="Title"
              id="title-input"
              className="form__input form__input_type_title"
              name="profileTitle"
              minlength="2"
              maxlength="200"
              required
            />
            <span id="title-input-error" className="form__input-error"></span>
            <button type="submit" className="button form__save-button">
              Save
            </button>
          </form>
        </div>
      </div>

      <div className="popup form form_type_new-card">
        <div className="form__container form__container_type_new-card">
          <button type="button" className="button popup__close-button"></button>
          <form className="form form__new-card popup__form" name="newCardForm" novalidate>
            <h3 className="form__title">New place</h3>
            <input
              type="text"
              placeholder="Title"
              id="img-title-input"
              className="form__input form__input_type_img-title"
              name="newCardName"
              required
              minlength="1"
              maxlength="30"
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
          </form>
        </div>
      </div>

      <div className="popup form form_type_profile-avatar">
        <div className="form__container">
          <button type="button" className="button popup__close-button"></button>
          <form
            className="form form__profile-avatar popup__form"
            name="profileAvatarForm"
            novalidate
          >
            <h3 className="form__title">Change Profile Picture</h3>
            <input
              type="url"
              placeholder="Image URL"
              id="profile-avatar-url-input"
              className="form__input form__input_type_avatar-url"
              name="profileImageUrlInput"
              required
              minlength="1"
            />
            <span
              id="profile-avatar-url-input-error"
              className="form__input-error"
            ></span>
            <button type="submit" className="button form__save-button">
              Save
            </button>
          </form>
        </div>
      </div>

      <div className="popup form form_type_delete-confirm">
        <div className="form__container">
          <button type="button" className="button popup__close-button"></button>
          <div className="form form__delete-confirm popup__form">
            <h3 className="form__title">Are you sure?</h3>
            <button type="submit" className="button form__save-button"></button>
          </div>
        </div>
      </div>

      <div className="popup preview">
        <div className="preview__window">
          <button type="button" className="popup__close-button"></button>
          <img src=" " alt="Preview Image" className="preview__preview-image" />
          <p className="preview__description"></p>
        </div>
      </div>
    </div>
  );
}

export default App;
