import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 500px;
  margin: 0px auto;
  }

  > button {
    width: 50%;

    margin: 50px 80px 0;
    height: 44px;
    background: #ADD8E6;
    font-weight: bold;
    color: #333;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#ADD8E6')};
    }
  }
`;
