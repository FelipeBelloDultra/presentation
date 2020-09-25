import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { Container, LinksList } from './styles';

const Menu = () => {
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
  ]);

  const handleToggleActiveItem = useCallback((ref) => {
    const resetItem = items.map((item) => ({
      ...item,
      active: false,
    }));

    const activeItem = resetItem.map((item) => {
      if (item.ref === ref) {
        item.active = true;
      }

      return item;
    });

    setItems(activeItem);
  }, []);

  return (
    <Container>
      <LinksList>
        {items.map((item) => (
          <li key={item.ref}>
            <Link
              to={item.to}
              onClick={() => handleToggleActiveItem(item.ref)}
              className={item.active ? 'active' : ''}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </LinksList>
    </Container>
  );
};

export default Menu;
