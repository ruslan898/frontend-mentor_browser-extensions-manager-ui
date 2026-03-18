import styles from './ToggleSwitch.module.scss';

type ToggleSwitchProps = {
  isActive: boolean;
  onToggle: () => void;
};

export default function ToggleSwitch({
  isActive,
  onToggle,
}: ToggleSwitchProps) {
  const { switchClass, slider, round } = styles;

  return (
    <label className={switchClass}>
      <input
        type="checkbox"
        checked={isActive}
        onChange={onToggle}
        aria-label="Toggle extension"
      />
      <span className={`${slider} ${round}`}></span>
    </label>
  );
}
