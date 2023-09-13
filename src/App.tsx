import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, useLocation, Switch } from 'react-router-dom';
import Smoke from './assets/lotties/Animation - 1694578182316.json';
import Lottie from 'lottie-react';


const ViewHome = React.lazy(() => import('./views/home.tsx'));
const ViewInfoSustancias = React.lazy(() => import('./views/infoSustancias.tsx'));
const ViewEventos = React.lazy(() => import('./views/eventos.tsx'));
const ViewPlaylist = React.lazy(() => import('./views/playlist.tsx'));
const ViewMultimedia = React.lazy(() => import('./views/multimedia.tsx'));

function MyLottiePlayer() {
  return (
    <div style={{
      width: '100vw', // Usamos vw para el ancho de la pantalla
      height: '100vh', // Usamos vh para la altura de la pantalla
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Lottie animationData={Smoke} loop={true} />;
      {/* <lottie-player
        src="https://lottie.host/d60c1f28-2f2d-49ae-b884-92d8aadfc242/qnWCkMSvnD.json"
        background="#FFFFFF"
        speed="1"
        style={{ width: '100%', height: '100%', outline: 'none' }} // Ancho y alto al 100% y eliminamos el borde
        loop
        autoplay
        direction="1"
        mode="normal">

      </lottie-player> */}

    </div>


  );
}

function DynamicTitle() {
  const location = useLocation();
  const routeName = location.pathname.replace('/', '');

  useEffect(() => {
    if (routeName === '') {
      document.title = 'Candy Land Insights';
    } else {
      document.title = `Candy Land Insights - ${routeName}`;
    }
  }, [routeName]);

  useEffect(() => {
    const handlePopstate = () => {
      const routeBeforeHash = window.location.pathname;

      if (routeBeforeHash !== location.pathname && !location.hash) {
        window.location.reload();
      }
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, [location.pathname, location.hash]);

  return null;
}

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      <div>
        {loading ? (
          <div>
            <MyLottiePlayer />
          </div>
        ) : (
          <Router>
            <Route component={DynamicTitle} />
            <Switch>
            <Route path="/" exact render={()=> <ViewHome/>} />
              <Route path="/infoSustancias" exact render={()=> <ViewInfoSustancias/>} />
              <Route path="/eventos" exact render={()=> <ViewEventos/> } />
              <Route path="/playlist" exact render={()=> <ViewPlaylist/> } />
              <Route path="/multimedia" exact render={()=> <ViewMultimedia/>} />
            </Switch>
          </Router>
        )}
      </div>
    </div>
  );
};

export default App;
