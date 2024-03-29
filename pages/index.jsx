import React, { useEffect } from 'react';
import { getSession } from 'next-auth/client';

import CardRecentOrders from '~/components/shared/cards/CardRecentOrders';
import CardSaleReport from '~/components/shared/cards/CardSaleReport';
import CardEarning from '~/components/shared/cards/CardEarning';
import CardStatics from '~/components/shared/cards/CardStatics';
import ContainerDashboard from '~/components/layouts/ContainerDashboard';
import { useDispatch } from 'react-redux';
import { toggleDrawerMenu } from '~/store/app/action';
import CardTopCountries from '~/components/shared/cards/CardTopCountries';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleDrawerMenu(false));
  }, []);

  return (
    <ContainerDashboard title="Dashboard">
      <section className="ps-dashboard" id="homepage">
        <div className="ps-section__left">
          <div className="row">
            <div className="col-xl-8 col-12">
              <CardSaleReport />
            </div>
            <div className="col-xl-4 col-12">
              <CardEarning />
            </div>
          </div>
          <CardRecentOrders />
        </div>
        <div className="ps-section__right">
          <CardStatics />
          <CardTopCountries />
        </div>
      </section>
    </ContainerDashboard>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default Index;
