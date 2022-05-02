import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  const spin = keyframes`
    to {
      -webkit-transform: rotate(360deg);
    }
  `;

  const LoadingCircle = styled.div`
    display: inline-block;
    width: 7%;
    aspect-ratio: 1/1;
    min-width: 50px;
    border: 3px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: ${spin} 1s ease-in-out infinite;
    -webkit-animation: ${spin} 1s ease-in-out infinite;
    margin: auto;
  `;

  return <LoadingCircle />;
};

export default Loading;
