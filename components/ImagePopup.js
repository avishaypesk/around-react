export default function ImagePopup() {
  return (
    <div className="popup preview">
      <div className="preview__window">
        <button type="button" className="popup__close-button"></button>
        <img src=" " alt="Preview Image" className="preview__preview-image" />
        <p className="preview__description"></p>
      </div>
    </div>
  );
}
