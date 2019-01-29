// @flow
import * as React from 'react';
import Link from 'next/link';
import { Container, ButtonRowContainer, Label } from './style';
import { PrimaryButton, GhostButton } from '../Button';
import Logo from './Logo';

type Props = {
  showHeaderShadow: boolean,
};

export default function Header(props: Props) {
  const { showHeaderShadow } = props;

  return (
    <Container showHeaderShadow={showHeaderShadow} data-cy="header">
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center' }}>
          <Label>Compute Safely</Label>
          <Logo />
        </a>
      </Link>

      <ButtonRowContainer>
        <a
          href="https://TBCLINK"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PrimaryButton>Collaborate</PrimaryButton>
        </a>
      </ButtonRowContainer>
    </Container>
  );
}
