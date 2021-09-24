import Image from 'next/image';
import profile from '../../../public/carolina-scudeler.svg';
import { Background, Titles } from './styles';

export const Navbar = () => {
  return (
    <Background>
      <Image src={profile} width="70" height="100" alt="Carolina Scudeler" />

      <Titles>
        <h2>Sobre</h2>
        <h2>Conhecimentos</h2>
        <h2>Projetos</h2>
        <h2>Contato</h2>
      </Titles>
    </Background>
  );
};
