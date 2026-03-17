import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import styles from './Card.module.scss';
import img from '/src/assets/logo-devlens.svg';

export default function Card() {
  const { card, info, logo, descr, title, text, actions, removeBtn } = styles;

  return (
    <article className={card} aria-label="Browser extension card">
      <div className={info}>
        <img src={img} alt="Extension logo" className={logo} />
        <div className={descr}>
          <h2 className={title}>DevLens</h2>
          <p className={text}>
            Quickly inspect page layouts and visualize element boundaries.
          </p>
        </div>
      </div>
      <div className={actions}>
        <button type="button" className={removeBtn}>
          Remove
        </button>
        <ToggleSwitch />
      </div>
    </article>
  );
}
