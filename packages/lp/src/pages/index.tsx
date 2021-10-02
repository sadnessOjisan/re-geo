import { css } from "linaria";
import {
  Background,
  Center,
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
  header: css`
    width: 100%;
    height: 80;
    position: fixed;
    top: 0;
    left: 0;
  `,
};

const IndexPage: VFC = () => {
  return (
    <div className={styles.wrapper}>
      <Background pattern="microfab">
        <div className={styles.header}>
          <Background pattern="rainbow">
            <a>npm</a>
          </Background>
        </div>
        <Headline level={1}>re-geo</Headline>
        <Center
          __unsafe__style={{
            width: 100,
            height: 40,
            backgroundColor: "white",
          }}
          isHorizontal={true}
          isVertical={true}
        >
          <Text>npm i re-geo</Text>
        </Center>

        <section>
          <Headline level={2}>Component catalog</Headline>
          <ClassicMarquee>
            <a>
              <Text>storybook</Text>
            </a>
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
