import { css, cx } from "linaria";
import {
  Background,
  Button,
  Center,
  ClassicMarquee,
  Construction,
  GradationText,
  Headline,
  Rotator,
  Text,
  Zoom,
} from "re-geo";
import React, { VFC } from "react";

import { NPM_URL, STORYBOOK_URL } from "../const/url";

const styles = {
  wrapper: css`
    min-height: 100vh;
  `,
  header: css`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
  `,
  title: css`
    font-size: 80px;
    margin-bottom: 32px;
  `,
  shell: css`
    width: 100;
    height: 40;
    background: white;
  `,
  sectionCommon: css`
    margin: 32px 0px;
  `,
  firstViewSection: css`
    min-height: 200px;
    margin-top: 80px;
  `,
  animationItem: css`
    margin: 16px 0px;
  `,
};

const IndexPage: VFC = () => {
  return (
    <div className={styles.wrapper}>
      <Background pattern="microfab">
        <div className={styles.header}>
          <Background pattern="flame">
            <a>npm</a>
          </Background>
        </div>
        <section className={cx(styles.sectionCommon, styles.firstViewSection)}>
          <Center isHorizontal isVertical>
            <Headline level={1} __unsafe__className={styles.title}>
              <GradationText
                colors={[
                  {
                    color: "green",
                    point: "0%",
                  },
                  {
                    color: "#0ff",
                    point: "25%",
                  },
                  {
                    color: "#f00",
                    point: "50%",
                  },
                  {
                    color: "orange",
                    point: "75%",
                  },
                ]}
                isAnimation={true}
              >
                re-geo
              </GradationText>
            </Headline>
          </Center>
          <Center isHorizontal isVertical>
            <div className={styles.shell}>
              <Text>npm i re-geo</Text>
            </div>
          </Center>
        </section>

        <section className={cx(styles.sectionCommon)}>
          <Headline level={2}>Component catalog</Headline>
          <div className={styles.animationItem}>
            <ClassicMarquee>
              <a href={STORYBOOK_URL}>
                <Text color="white">storybook</Text>
              </a>
            </ClassicMarquee>
          </div>
          <Center isVertical isHorizontal>
            <div className={styles.animationItem}>
              <Rotator>
                <a href={NPM_URL}>
                  <Text color="white">npm</Text>
                </a>
              </Rotator>
            </div>
          </Center>
          <div className={styles.animationItem}>
            <Zoom>
              <a href={STORYBOOK_URL}>
                <Text color="white">storybook</Text>
              </a>
            </Zoom>
          </div>

          <div>
            <ClassicMarquee height="300px" vspace="80px">
              <Rotator>
                <Zoom>
                  <a href={STORYBOOK_URL}>
                    <Text color="white">storybook</Text>
                  </a>
                </Zoom>
              </Rotator>
            </ClassicMarquee>
          </div>
          <a href={STORYBOOK_URL}>
            <Button>storybook</Button>
          </a>
          <a href={STORYBOOK_URL}>
            <Button type="primary">storybook</Button>
          </a>
        </section>
        <section className={cx(styles.sectionCommon)}>
          <Headline level={1}>sponsor</Headline>
          <img src={Construction}></img>
        </section>
      </Background>
    </div>
  );
};

export default IndexPage;
