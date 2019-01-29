// @flow
import * as React from 'react';
import Page, { SectionHeading, Heading, Subheading } from '../components/Page';
import type { GetInitialProps } from '../types';
import Checklist from '../components/Checklist';
import ShareButtons from '../components/ShareButtons';
import BottomShare from '../components/BottomShare';

class Index extends React.Component<{}> {
  static async getInitialProps({ res }: GetInitialProps) {
    if (res && res.setHeader) {
      // cache podcasts for a month
      const cacheAge = 60 * 60 * 24 * 30;
      res.setHeader('Cache-Control', `public,s-maxage=${cacheAge}`);
    }

    return {};
  }

  render() {
    return (
      <Page>
      
        <SectionHeading>
          <Heading>Compute Safely</Heading>
          <Subheading>
            With both governments and corporate entities trampling over the privacy rights of people throughout much of the world, choosing the right tools is now more important than ever.
          </Subheading>
        </SectionHeading>

        <div style={{ marginTop: '40px' }} />

        <ShareButtons />

        <Checklist />

        <BottomShare />
      </Page>
    );
  }
}

export default Index;
