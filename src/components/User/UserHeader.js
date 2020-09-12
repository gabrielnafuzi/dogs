import * as React from 'react';
import UserHeaderNav from './UserHeaderNav';
import { useLocation } from 'react-router-dom';

import styles from './UserHeader.module.css';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/account/statistics':
        setTitle('Estatísticas');
        break;
      case '/account/post':
        setTitle('Poste Sua Foto');
        break;

      default:
        setTitle('Minha Conta');
        break;
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
