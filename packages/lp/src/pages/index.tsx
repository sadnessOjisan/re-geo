import { css, cx } from "linaria";
import {
  Background,
  Blink,
  Button,
  Center,
  ClassicMarquee,
  Computer01,
  Construction,
  Counter2,
  Emailme,
  GradationText,
  Headline,
  IELogo,
  NSLogo,
  Rotator,
  Text,
  Zoom,
} from "re-geo";
import { WHITE } from "re-geo/src/const/internal/color";
import React, { VFC } from "react";

import { AUTHOR_URL, GITHUB_URL, NPM_URL, STORYBOOK_URL } from "../const/url";

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
  headerContainer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    & > * {
      color: ${WHITE};
      margin: 0px 16px;
    }
  `,
  headerItems: css`
    display: flex;
    & > * {
      margin-left: 8px;
    }
  `,
  title: css`
    font-size: 80px !important;
    margin-bottom: 32px;
  `,
  shell: css`
    background: white;
    padding: 16px 32px;
  `,
  innerContainer: css`
    max-width: 1080px;
    margin: 0 auto;
  `,
  sectionCommon: css`
    margin: 32px 0px;
    :last-child {
      margin-bottom: 0;
    }
  `,
  firstViewSection: css`
    min-height: 200px;
    margin-top: 80px;
  `,
  animationItem: css`
    margin: 16px 0px;
  `,
  stackContainer: css`
    display: flex;
    justify-content: space-between;
  `,
  leftStack: css`
    display: flex;
    flex-direction: column;
    /* HACK: stretch value cause image flatten (https://cotodama.co/flexbox_img/) */
    align-items: flex-start;
  `,
};

const IndexPage: VFC = () => {
  return (
    <div className={styles.wrapper}>
      <Background pattern="microfab">
        <div className={styles.header}>
          <Background pattern="flame">
            <div className={styles.headerContainer}>
              <div>
                <Text color="white" __unsafe__style={{ fontSize: 24 }}>
                  re-geo
                </Text>
              </div>
              <div className={styles.headerItems}>
                <a href={NPM_URL}>
                  <Text color="white">npm</Text>
                </a>
                <a href={GITHUB_URL}>
                  <Text color="white">GitHub</Text>
                </a>
                <a href={AUTHOR_URL}>
                  <Text color="white">Author</Text>
                </a>
              </div>
            </div>
          </Background>
        </div>
        <div className={styles.innerContainer}>
          <section
            className={cx(styles.sectionCommon, styles.firstViewSection)}
          >
            <ClassicMarquee>
              <Text __unsafe__style={{ fontSize: 28, color: WHITE }}>
                We dont support IE
              </Text>
            </ClassicMarquee>
            <div className={styles.stackContainer}>
              <div className={styles.leftStack}>
                <img src={IELogo}></img>
                <img src={NSLogo}></img>
              </div>
              <div className={styles.leftStack}>
                <img src={Computer01}></img>
                <img src={Counter2}></img>
                <img src={Emailme}></img>
              </div>
            </div>
            <Center
              isHorizontal
              isVertical
              __unsafe__style={{ flexDirection: "column", marginBottom: 32 }}
            >
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
              <Headline level={2}>
                react based geo-cities style component
              </Headline>
            </Center>
            <Center isHorizontal isVertical>
              <div className={styles.shell}>
                <Text>npm install re-geo</Text>
              </div>
            </Center>
          </section>

          <section className={cx(styles.sectionCommon)}>
            <Background pattern="stars">
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

              <div>
                <ClassicMarquee
                  height="300px"
                  vspace="80px"
                  __unsafe__style={{ paddingTop: 80 }}
                >
                  <Rotator>
                    <Zoom>
                      <a href={STORYBOOK_URL}>
                        <Text color="white">storybook</Text>
                      </a>
                    </Zoom>
                  </Rotator>
                </ClassicMarquee>
              </div>
              <div>
                <ClassicMarquee
                  height="300px"
                  vspace="80px"
                  __unsafe__style={{ paddingTop: 80 }}
                  direction="right"
                >
                  <Blink speed={0.1}>
                    <Rotator>
                      <Zoom>
                        <a href={STORYBOOK_URL}>
                          <Text color="white">storybook</Text>
                        </a>
                      </Zoom>
                    </Rotator>
                  </Blink>
                </ClassicMarquee>
              </div>
              <a href={STORYBOOK_URL}>
                <Button>storybook</Button>
              </a>
              <a href={STORYBOOK_URL}>
                <Button type="primary">storybook</Button>
              </a>
            </Background>
          </section>
          <section className={cx(styles.sectionCommon)}>
            <Headline level={1}>sponsor</Headline>
            <img src={Construction}></img>
          </section>
        </div>
      </Background>
    </div>
  );
};

export default IndexPage;
