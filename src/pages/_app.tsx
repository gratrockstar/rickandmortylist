import Layout from '../../components/layout';
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import '../../styles/global.scss';
import { Dna } from "react-loader-spinner";
 
export default function MyApp({ Component, pageProps } : {Component: any, pageProps: any}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () =>  setIsLoading(true));

    router.events.on('routeChangeComplete', () =>  setIsLoading(false));
    router.events.on('routeChangeError', () =>  setIsLoading(false));
  }, []);

  return (
    <Layout>
      {isLoading === true ? (
        <div className="loading">
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
      <Component {...pageProps} />
      )}
    </Layout>
  );
}