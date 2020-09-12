import * as React from 'react';

import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
const UserStatisticsGraphs = React.lazy(() => import('./UserStatisticsGraphs'));

const UserStatistics = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem('token');

      const { url, options } = STATS_GET(token);

      await request(url, options);
    }

    getData();
  }, [request]);

  if (error) return <Error error={error} />;

  if (loading) return <Loading />;

  if (data) {
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatisticsGraphs data={data} />
      </React.Suspense>
    );
  }

  return null;
};

export default UserStatistics;
