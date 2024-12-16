import { create } from '@storybook/theming';

import logo from '../src/assets/images/logo_sb.svg';

export default create({
  base: 'dark',
  brandTitle: 'MH: Component Library',
  brandImage: logo,
  brandTarget: '_self',
});
