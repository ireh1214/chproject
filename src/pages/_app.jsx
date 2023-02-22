import '../styles/base.css';
import '../styles/common.scss';
import Layout from 'components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
