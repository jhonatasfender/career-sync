import styled from 'styled-components';

export const SkillWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
`;

export const SkillsList = styled.div`
  display: flex;
  gap: 2rem;
`;

export const SkillFilters = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
`;

export const Test1 = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Tag = styled.div`
  display: flex;
  gap: 0.9rem;
  align-items: center;
  color: #a098ae;
  font-size: 1.4rem;
  user-select: none;
`;

type TagLegendColorProps = {
  color: string;
};

export const TagLegendColor = styled.div<TagLegendColorProps>`
  --size: 2rem;

  background-color: ${({ color }) => color};

  width: var(--size);
  height: var(--size);
  min-width: var(--size);
  min-height: var(--size);
  border-radius: 0.6rem;
`;
