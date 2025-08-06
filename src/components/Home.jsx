import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import { Fade } from 'react-awesome-reveal';
import endpoints from '../constants/endpoints';
import Social from './Social';
import FallbackSpinner from './FallbackSpinner';

const styles = {
  nameStyle: {
    fontSize: '5em',
  },
  inlineChild: {
    display: 'inline-block',
  },
  mainContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
  },
  homeImg: {
    width: '100%',
  },
};

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(endpoints.home, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return data ? (
    <Fade>
      <div style={styles.homeContainer}>
        <div style={styles.mainContainer}>
          <h1 style={styles.nameStyle}>{data?.name}</h1>
          <div style={{ flexDirection: 'row' }}>
            <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
                strings: data?.roles,
              }}
            />
          </div>
          <Social />
        </div>
      </div>
    </Fade>
  ) : <FallbackSpinner />;
}

export default Home;
