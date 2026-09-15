import { useState } from 'react';
import { BottomNavigation } from './components/BottomNavigation';
import { HomeScreen } from './screens/HomeScreen';
import { SearchScreen } from './screens/SearchScreen';
import { TrainDetailsScreen } from './screens/TrainDetailsScreen';
import { RouteTimelineScreen } from './screens/RouteTimelineScreen';
import { LiveStatusScreen } from './screens/LiveStatusScreen';
import { DelayScreen } from './screens/DelayScreen';
import { StationScreen } from './screens/StationScreen';
import { NextTrainScreen } from './screens/NextTrainScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { Train, TRAINS } from './data/trains';

type Screen =
  | 'home'
  | 'search'
  | 'traindetails'
  | 'route'
  | 'livestatus'
  | 'delay'
  | 'station'
  | 'nexttrain'
  | 'notifications'
  | 'profile';

type NavTab = 'home' | 'search' | 'livestatus' | 'saved' | 'profile';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [navTab, setNavTab] = useState<NavTab>('home');
  const [selectedTrain, setSelectedTrain] = useState<Train>(TRAINS[0]);
  const [history, setHistory] = useState<Screen[]>([]);

  const navigate = (to: Screen) => {
    setHistory(h => [...h, screen]);
    setScreen(to);
  };

  const goBack = () => {
    if (history.length > 0) {
      const prev = history[history.length - 1];
      setHistory(h => h.slice(0, -1));
      setScreen(prev);
    } else {
      setScreen('home');
      setNavTab('home');
    }
  };

  const handleSelectTrain = (train: Train) => {
    setSelectedTrain(train);
    navigate('traindetails');
  };

  const handleTrackLive = (train: Train) => {
    setSelectedTrain(train);
    navigate('livestatus');
  };

  const handleNavTab = (tab: NavTab) => {
    setNavTab(tab);
    setHistory([]);
    if (tab === 'home') setScreen('home');
    else if (tab === 'search') setScreen('search');
    else if (tab === 'livestatus') setScreen('livestatus');
    else if (tab === 'saved') setScreen('notifications');
    else if (tab === 'profile') setScreen('profile');
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-start justify-center">
      <div className="relative w-full bg-slate-50 flex flex-col overflow-hidden"
        style={{ maxWidth: 430, minHeight: '100dvh', height: '100dvh' }}>

        <div className="flex-1 overflow-hidden relative">
          {screen === 'home' && (
            <HomeScreen
              onSearch={() => { navigate('search'); setNavTab('search'); }}
              onRoute={() => navigate('route')}
              onStation={() => navigate('station')}
              onNextTrain={() => navigate('nexttrain')}
              onNotifications={() => navigate('notifications')}
              onLiveStatus={() => navigate('livestatus')}
            />
          )}

          {screen === 'search' && (
            <SearchScreen
              onBack={goBack}
              onSelectTrain={handleSelectTrain}
              onTrackLive={handleTrackLive}
            />
          )}

          {screen === 'traindetails' && (
            <TrainDetailsScreen
              train={selectedTrain}
              onBack={goBack}
              onTrackLive={() => navigate('livestatus')}
              onRoute={() => navigate('route')}
              onDelay={() => navigate('delay')}
            />
          )}

          {screen === 'route' && (
            <RouteTimelineScreen onBack={goBack} />
          )}

          {screen === 'livestatus' && (
            <LiveStatusScreen
              train={selectedTrain}
              onBack={goBack}
              onDelay={() => navigate('delay')}
            />
          )}

          {screen === 'delay' && (
            <DelayScreen train={selectedTrain} onBack={goBack} />
          )}

          {screen === 'station' && (
            <StationScreen
              onBack={goBack}
              onSelectTrain={handleSelectTrain}
            />
          )}

          {screen === 'nexttrain' && (
            <NextTrainScreen onBack={goBack} />
          )}

          {screen === 'notifications' && (
            <NotificationsScreen onBack={goBack} />
          )}

          {screen === 'profile' && (
            <ProfileScreen onBack={goBack} />
          )}
        </div>

        <BottomNavigation active={navTab} onNavigate={handleNavTab} />
      </div>
    </div>
  );
}
