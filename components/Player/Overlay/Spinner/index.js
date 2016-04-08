import css from 'react-css-modules';
import styles from './styles';

export const Spinner = () => (
  <div styleName="spinner">
    <div styleName="cube1"></div>
    <div styleName="cube2"></div>
  </div>
);

export default css(Spinner, styles);
