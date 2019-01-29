// @flow
import * as React from 'react';
import { FacebookButton, TwitterButton, CopyLinkButton } from '../Button';
import { Container } from './style';

export default function ShareButtons() {
  return (
    <Container>
      <a
        href="http://twitter.com/share?text=Check out Compute Safely, a checklist to help people stay safe online&url=https://securitycheckli.st"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterButton>Tweet</TwitterButton>
      </a>

      <CopyLinkButton text="https://securitycheckli.st">
        Share Link
      </CopyLinkButton>
    </Container>
  );
}
