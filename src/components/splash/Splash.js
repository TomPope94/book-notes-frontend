import React from 'react';
import { useHistory } from 'react-router-dom';
import SalesCard from './SalesCard';

import { GUEST_PLAN, GUEST_TRACK, GUEST_REMEMBER } from 'constants/routes';

const styles = {
  pageContainer: {
    background: '#f38b66',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 0,
    paddingTop: 100,
    color: '#fff',
  },
  cardRow: {
    width: '100%',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 50,
  },
  cardsContainer: {
    display: 'flex',
    width: '50%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const Splash = () => {
  const history = useHistory();

  return (
    <div style={styles.pageContainer}>
      <div>
        <h1 style={{ fontSize: '3rem', fontWeight: 200 }}>
          Forget Forgetting.
        </h1>
      </div>
      <div style={styles.cardRow}>
        <div style={styles.cardsContainer}>
          <SalesCard
            heading="Plan"
            onMouseDown={() => history.push(GUEST_PLAN.route)}
          >
            <ul>
              <li>Find books using our search functionality.</li>
              <li>Add them to your collection.</li>
              <li>Set future dates to start.</li>
              <li>
                All in sync with your current book so it's easy to adapt to
                life!
              </li>
            </ul>
          </SalesCard>
          <SalesCard
            heading="Track"
            onMouseDown={() => history.push(GUEST_TRACK.route)}
          >
            <ul>
              <li>Track your progress so you always know where you are.</li>
              <li>
                Calculates your current rate of progression so you always know
                how long is left.
              </li>
              <li>
                Write notes to help you get back up to speed everytime you start
                reading.
              </li>
              <li>Always in sync, no matter the device!</li>
            </ul>
          </SalesCard>
          <SalesCard
            heading="Remember"
            onMouseDown={() => history.push(GUEST_REMEMBER.route)}
          >
            <ul>
              <li>NEVER forget a book.</li>
              <li>Have all your notes stored in one easy location.</li>
              <li>Set reminders to help you never forget a book again.</li>
              <li>
                No matter where you are, it fits around your life and schedule.
              </li>
            </ul>
          </SalesCard>
        </div>
      </div>
    </div>
  );
};

export default Splash;
