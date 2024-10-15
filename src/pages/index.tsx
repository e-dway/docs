import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} ONLINE DOCUMENTATION`}
      description="ed-way">
      <HomepageHeader />
      <main>
        <span><br /></span>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col col--4">
                <h2>Documentazione API</h2>
                <p>Consulta le guide sugli endpoint, i metodi HTTP e le risposte strutturate.</p>
              </div>
              <div className="col col--4">
                <h2>Strutture Database</h2>
                <p>Esplora la struttura delle tabelle e le relazioni tra i dati.</p>
              </div>
              <div className="col col--4">
                <h2>App Mobile</h2>
                <p>Integra e sviluppa con la nostra applicazione mobile.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
