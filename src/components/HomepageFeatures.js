import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Pre-travel info',
    Svg: require('../../static/img/undraw_travelers_re_y25a.svg').default,
    description: (
      <>
        Sitata can help your travellers understand their COVID-19 entry requirements, travel restrictions, recommended vaccinations, the regional safety and security situation and a wealth of other pre-travel information.
      </>
    ),
  },
  {
    title: 'Real-time disruption warnings',
    Svg: require('../../static/img/undraw_notify_re_65on.svg').default,
    description: (
      <>
        We monitor the world 24/7 for threats and disruptions. Keep your travellers out of harm's way by letting them know about events that could disrupt their travels like a planned protest or even something severe such as a violent bombing.
      </>
    ),
  },
  {
    title: 'Travel Safe Subscriptions',
    Svg: require('../../static/img/undraw_active_support_re_b7sj.svg').default,
    description: (
      <>
        You can also use our API to resell our Travel Safe Subscriptions and insurance and assistance offerings.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
