import { css, cx } from "linaria";
import {
  Background,
  Button,
  Center,
  ClassicMarquee,
  Construction,
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
  title: css`
    font-size: 80px !important;
    margin-bottom: 32px;
  `,
  shell: css`
    background: white;
    padding: 16px 32px;
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
                <p>re-geo</p>
              </div>
              <div>
                <a>npm</a>
                <a>GitHub</a>
                <a>About author</a>
              </div>
            </div>
          </Background>
        </div>
        <section className={cx(styles.sectionCommon, styles.firstViewSection)}>
          <div className={styles.leftStack}>
            <img src={IELogo}></img>
            <img src={NSLogo}></img>
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
