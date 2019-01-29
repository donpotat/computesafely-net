// @flow
import React from 'react';
import { Container, Description, Icons } from './style';
import Icon from '../Icon';

export default function Footer() {
  return (
    <Container data-cy="footer">
      <Description>
        <a
            href="https://creativecommons.org/share-your-work/public-domain/cc0/"
            target="_blank"
            rel="noopener noreferrer"
        >
          CC0 - No Rights Reserved.
        </a>

        &nbsp; Original idea from 
        
        <a
          href="https://github.com/brianlovin/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brian Lovin.
        </a>

        &nbsp;A version of 
        
        <a
          href="https://www.javi.pro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Javier Sánchez.
        </a>
        
      </Description>
    </Container>
  );
}
