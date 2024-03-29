import React, { useEffect, Suspense } from 'react';
import { HashRouter as Router, Route, useLocation, Switch } from 'react-router-dom';
import Smoke from './assets/lotties/Animation - 1694578182316.json';
import Lottie from 'lottie-react';

const ViewHome = React.lazy(() => import('./views/home'));
const ViewInfoSustancias = React.lazy(() => import('./views/infoSustancias'));
const ViewEventos = React.lazy(() => import('./views/eventos'));
const ViewPlaylist = React.lazy(() => import('./views/playlist'));
const ViewMultimedia = React.lazy(() => import('./views/multimedia'));

function MyLottiePlayer() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Lottie animationData={Smoke} loop={true} />
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
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // Cambia el tiempo de carga aquí según tus necesidades

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);

  useEffect(() => {
    
    if (window.location.pathname !== '/') {
      // Redirigir a la página de inicio si la URL no es la raíz
      window.location.href = '/';
    }
  }, []);

  return (
    <div>
      <Router>
        <Route component={DynamicTitle} />
        <Suspense fallback={<MyLottiePlayer />}> {/* Mostrar el LottiePlayer mientras se cargan las vistas */}
          <Switch>
            <Route path="/" exact component={ViewHome} />
            <Route path="/infoSustancias" exact component={ViewInfoSustancias} />
            <Route path="/eventos" exact component={ViewEventos} />
            <Route path="/playlist" exact component={ViewPlaylist} />
            <Route path="/multimedia" exact component={ViewMultimedia} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
