import ToggleSwitch from '../toggleSwitch/ToggleSwitch';
import type { CardInfo } from '../../App';
import styles from './Card.module.scss';

type CardActions = {
  toggleActive: (id: string) => void;
  deleteItem: (id: string) => void;
};
type CardProps = CardInfo & CardActions;

export default function Card({
  logo,
  name,
  description,
  isActive,
  id,
  toggleActive,
  deleteItem,
}: CardProps) {
  const { card, info, logoImg, descr, title, text, actions, removeBtn } =
    styles;

  return (
    <article className={card} aria-label="Browser extension card">
      <div className={info}>
        <img src={logo} alt="Extension logo" className={logoImg} />
        <div className={descr}>
          <h2 className={title}>{name}</h2>
          <p className={text}>{description}</p>
        </div>
      </div>
      <div className={actions}>
        <button
          type="button"
          className={removeBtn}
          onClick={() => deleteItem(id)}
        >
          Remove
        </button>
        <ToggleSwitch isActive={isActive} onToggle={() => toggleActive(id)} />
      </div>
    </article>
  );
}
