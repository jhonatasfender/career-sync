import styled, { css } from 'styled-components';

export const MenuListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  list-style-type: none;
`;

type ItemWrapperProps = {
  active: boolean;
};

export const ItemWrapper = styled.li<ItemWrapperProps>`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  padding: 1.6rem 2.4rem;
  border-radius: 1.6rem;
  width: 25rem;
  cursor: pointer;
  user-select: none;

  background-color: ${({ active }) => (active ? '#4cbc9a' : '#ffffff')};
  box-shadow: ${({ active }) =>
    active ? '1px 1.8rem 3rem -0.6rem rgb(0 0 0 / 60%)' : 'none'};

  ${({ active }) =>
    active &&
    css`
      z-index: 1;
    `};
`;

export const MenuItemText = styled.span<ItemWrapperProps>`
  font-size: 1.8rem;
  font-weight: 500;

  color: ${({ active }) => (active ? '#ffffff' : '#a098ae')};
`;

export const MenuIcon = styled.div<ItemWrapperProps>`
  --size: 3.2rem;

  width: var(--size);
  min-width: var(--size);
  height: var(--size);
  min-height: var(--size);

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  svg {
    width: var(--size);
    height: var(--size);

    * {
      fill: ${({ active }) => (active ? '#ffffff' : '#a098ae')};
    }
  }
`;
