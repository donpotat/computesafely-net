// @flow
import * as React from 'react';
import { TwitterButton, CopyLinkButton } from '../Button';

import { Container } from './style';

export default function ShareButtons() {
  return (
    <Container>
      <a
        href="http://twitter.com/share?text=Check out Compute Safely, a checklist to help people stay safe online&url=https://www.computesafely.net/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterButton>Tweet</TwitterButton>
      </a>

      <CopyLinkButton text="https://www.computesafely.net/">
        Share Link
      </CopyLinkButton>
    </Container>
  );
}
