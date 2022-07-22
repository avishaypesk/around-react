import pencil from "./images/edit-avatar.svg";

export default function Main() {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar">
          <div className="profile__avatar-overlay">
            <img
              src={pencil}
              alt="edit avatar"
              className="profile__avatar-icon"
            />
          </div>
        </div>
        <div className="profile__profile-info">
          <div className="profile__name-wrapper">
            <h1 className="profile__name"></h1>
            <button
              type="button"
              className="button profile__edit-button"
            ></button>
          </div>
          <p className="profile__title"></p>
        </div>
        <button type="button" className="button profile__add-button"></button>
      </section>

      <section className="places"></section>
    </main>
  );
}
