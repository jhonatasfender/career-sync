import { darken, lighten } from 'polished';
import styled from 'styled-components';

type ColorProps = {
  color: string;
};

export const ProgressCardWrapper = styled.div<ColorProps>`
  --size: 7rem;

  min-width: 40rem;
  background-color: ${({ color }) => color};
  padding: 2.7rem;
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  user-select: none;
`;

export const IconWrapper = styled.div<ColorProps>`
  --icon-padding: 3rem;

  border-radius: 50%;
  background-color: ${({ color }) => lighten(0.4, color)};
  padding: 1.2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);

  svg {
    width: calc(var(--size) - var(--icon-padding));
    height: calc(var(--size) - var(--icon-padding));
    min-width: calc(var(--size) - var(--icon-padding));
    min-height: calc(var(--size) - var(--icon-padding));
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 2.9rem;
  color: #ffffff;
`;

export const Subtitle = styled.span`
  color: #ffffff;
  font-size: 1.4rem;
`;

export const ProgressCircle = styled.span<ColorProps>`
  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);

  border-radius: 50%;
  background-color: ${({ color }) => lighten(0.2, color)};
  font-size: 2.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #374557;
  padding: 1.2rem;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  gap: 2rem;
`;

export const ProgressBarWrapper = styled.div<ColorProps>`
  width: 100%;
  height: 3rem;
  background-color: ${({ color }) => lighten(0.2, color)};
  border-radius: 0.8rem;
  overflow: hidden;
`;

type ProgressBarProps = { percent: number } & ColorProps;

export const ProgressBar = styled.div<ProgressBarProps>`
  width: ${({ percent }) => `${percent}%`};
  height: 3rem;
  border-radius: 0.8rem;
  background-color: ${({ color }) => darken(0.3, color)};
`;
