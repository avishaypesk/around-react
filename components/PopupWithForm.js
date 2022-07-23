export default function PopupWithForm(props) {
  return (
    <div className={`popup form form_type_${props.name} ${props.isOpen ? 'popup_visible' : ''}`}>
      <div className={`form__container form__container_type_${props.name}`}>
        <button type="button" className="button popup__close-button" onClick={props.onClose}></button>
        <form
          className={`form form__${props.name} popup__form`}
          name={props.name}
          novalidate
        >
          <h3 className="form__title">{props.title}</h3>
          {props.children}
        </form>
      </div>
    </div>
  );
}
