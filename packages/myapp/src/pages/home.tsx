import { LayoutDefault } from '../components/layouts/layout-default';
import { Welcome } from '../components/welcome/welcome';

export const Home = () => {
  return (
    <LayoutDefault>
      <Welcome />
    </LayoutDefault>
  );
};
