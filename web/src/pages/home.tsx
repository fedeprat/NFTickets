import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { AppState, store } from "../redux/store";
import {
  /* getCategories, getCities, */ getEvents,
  getEventsSessionStorage,
} from "../redux/actions";
import prisma from "../lib/prisma";
import dateFilter from "../components/Functional Components/dateFilter";
import HomeFilterBar from "../components/FilterBar/HomeFilterBar";
import CardSlider from "../components/CardSlider/CardSlider";

export const localStorage = (stateName: string) => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
};

const estilos = {
  fontSize: "50px",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Home({ addresses }: { addresses: [] }) {
  const dispatch = useDispatch();
  const [homeStorage, setHomeStorage] = useState([]);
  const { events } = useSelector((state: AppState) => state);
  const [error, setError] = useState(false);
  const [loadingDestacados, setLoadingDestacados] = useState(false);

  // useEffect(() => {
  //   if (!events.length) dispatch(getEvents());
  //   // if (!categories.length) dispatch(getCategories());
  // }, []);
  // useEffect(() => {
  //   dispatch(getCategories(events));
  //   dispatch(getCities(events));
  // }, [events]);
  useEffect(() => {
    const sessionState = localStorage("homeState");
    if (sessionState?.length && sessionState?.length === addresses?.length) {
      dispatch(getEventsSessionStorage(sessionState));
      setHomeStorage(sessionState);
      // eslint-disable-next-line no-else-return
    } else {
      try {
        setError(false);
        setLoadingDestacados(true);
        dispatch(getEvents());
      } catch {
        setError(true);
      }
    }
  }, []);

  store.subscribe(() => {
    setHomeStorage(events as any);
    setLoadingDestacados(false);
  });

  useEffect(() => {
    sessionStorage.setItem("homeState", JSON.stringify(homeStorage));
  }, [homeStorage]);

  if (error) return <div style={estilos}>Algo salio mal...</div>;
  return (
    <div>
      <HomeFilterBar />
      <main>
        <CardSlider
          data={homeStorage.length ? homeStorage : (events as any)}
          fn={(ev: any) => ev.name.includes("e")}
          loading={loadingDestacados}
          title="Highlights"
        />
        <CardSlider
          data={homeStorage.length ? homeStorage : (events as any)}
          fn={(ev: any) => dateFilter(events as any, "month") && ev}
          loading={loadingDestacados}
          title="This month"
        />
        <CardSlider
          data={homeStorage.length ? homeStorage : (events as any)}
          fn={(ev: any) => ev.place === "Cordoba"}
          loading={loadingDestacados}
          title="In Cordoba"
        />
      </main>
    </div>
  );
}

export default Home;

export async function getServerSideProps() {
  const addresses = (await prisma.contract.findMany()).map(
    (e: { address: string }) => e.address
  );
  return {
    props: {
      addresses,
    },
  };
}
