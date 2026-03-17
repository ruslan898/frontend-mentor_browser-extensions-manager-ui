import styles from './ToggleSwitch.module.scss';

export default function ToggleSwitch() {
  const { switchClass, slider, round } = styles;

  return (
    <label className={switchClass}>
      <input type="checkbox" />
      <span className={`${slider} ${round}`}></span>
    </label>
  );
}
