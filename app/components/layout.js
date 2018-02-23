import Head from 'next/head';
import Header from './header/Header';
import Footer from './footer/Footer';
import FooterLinks from './footer/FooterLinks';

const Layout =  ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <Header logo={'http://blog-assets.risingstack.com/2016/Jan/react_best_practices-1453211146748.png'} />

    { children }

    <Footer links={FooterLinks} />

  </div>
);

export default Layout;