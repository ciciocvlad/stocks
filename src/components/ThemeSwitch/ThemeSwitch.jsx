import { Switch } from '@base-ui/react/switch'
import styles from './ThemeSwitch.module.css'

export const ThemeSwitch = ({ onChange, checked }) => (
  <Switch.Root
    onCheckedChange={onChange}
    checked={checked}
    className={styles.themeSwitch}
  >
    <Switch.Thumb className={styles.theme_switch_thumb} />
  </Switch.Root>
)
