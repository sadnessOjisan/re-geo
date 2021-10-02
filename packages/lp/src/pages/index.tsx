import { css } from "linaria";
import {
  Background,
  ClassicMarquee,
  Headline,
  Rotator,
  Text,
  Zoom,
} from "re-geo";
import React, { VFC } from "react";

const styles = {
  wrapper: css`
    padding: 12;
  `,
};

const IndexPage: VFC = () => {
  return (
    <div className={styles.wrapper}>
      <Background pattern="microfab">
        <Headline level={1}>re-geo</Headline>
        <Text>npm i re-geo</Text>
        <section>
          <Headline level={2}>Component catalog</Headline>
          <ClassicMarquee>
            <a>storybook</a>
          </ClassicMarquee>
          <Zoom>
            <a>storybook</a>
          </Zoom>
          <Rotator>
            <a>storybook</a>
          </Rotator>
          <ClassicMarquee>
            <Rotator>
              <Zoom>
                <a>storybook</a>
              </Zoom>
            </Rotator>
          </ClassicMarquee>
        </section>
      </Background>
    </div>
  );
};

export default IndexPage;
