import { useMemo } from 'react';

import { ProgressCardProps } from './progress-card.structure';
import {
  CardContent,
  Header,
  IconWrapper,
  ProgressBar,
  ProgressBarWrapper,
  ProgressCardWrapper,
  ProgressCircle,
  Subtitle,
  Title,
} from './progress-card.styles';

export const ProgressCard = ({
  progress,
  test,
  children,
}: ProgressCardProps) => {
  const progressColor = useMemo((): string => {
    if (progress >= 70) return '#4cbc9a';
    if (progress >= 40) return '#FEC64F';
    return '#FC6B57';
  }, [progress]);

  return (
    <ProgressCardWrapper color={progressColor}>
      <Header>
        <IconWrapper color={progressColor}>{children}</IconWrapper>

        <CardContent>
          <Title>{test}</Title>
          <Subtitle>Java</Subtitle>
        </CardContent>

        <ProgressCircle color={progressColor}>{progress}%</ProgressCircle>
      </Header>
      <ProgressBarWrapper color={progressColor}>
        <ProgressBar percent={progress} color={progressColor} />
      </ProgressBarWrapper>
    </ProgressCardWrapper>
  );
};
