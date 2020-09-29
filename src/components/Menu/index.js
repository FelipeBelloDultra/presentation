import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Container, LinksList } from './styles';

const Menu = () => {
  const location = useLocation();
  const { pathname } = location;

  const [items, setItems] = useState([
    {
      to: '/home',
      ref: 'home',
      title: '# Home',
      active: false,
    },
    {
      to: '/why',
      ref: 'why',
      title: '# Por que React?',
      active: false,
    },
    {
      to: '/difference',
      ref: 'difference',
      title: '# React x ReactJS x React Native',
      active: false,
    },
  ]);

  useEffect(() => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.to === pathname) {
          item.active = true;
        } else {
          item.active = false;
        }

        return item;
      })
    );
  }, [pathname]);

  return (
    <Container>
      <LinksList>
        {items.map((item) => (
          <li key={item.ref}>
            <Link to={item.to} className={item.active ? 'active' : ''}>
              {item.title}
            </Link>
          </li>
        ))}
      </LinksList>
    </Container>
  );
};

export default Menu;
