import styled from 'styled-components';

type SVGStyledPathProps = {
  fill?: string;
  fillOpacity?: string;
  stroke?: string;
  strokeOpacity?: string;
  strokeMiterlimit?: string;
  strokeDasharray?: string;
  fillRule?: string;
  opacity?: string;
};

export const SVGStyledPath = styled.path<SVGStyledPathProps>`
  display: inline;
  fill: ${({ fill = 'none' }) => fill};
  fill-opacity: ${({ fillOpacity = 1 }) => fillOpacity};
  stroke: ${({ stroke = '#000000' }) => stroke};
  stroke-width: ${({ strokeWidth = '1px' }) => strokeWidth};
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-opacity: ${({ strokeOpacity = 1 }) => strokeOpacity};
  stroke-miterlimit: ${({ strokeMiterlimit = 4 }) => strokeMiterlimit};
  stroke-dasharray: ${({ strokeDasharray = 'none' }) => strokeDasharray};
  fill-rule: ${({ fillRule = 'nonzero' }) => fillRule};
  opacity: ${({ opacity = 1 }) => opacity};
`;
