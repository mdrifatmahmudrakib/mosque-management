import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Donate from '../Donate/Donate';
import Banner from './Banner/Banner';
import Event from './Event/Event';
import HomeEvent from './Event/HomeEvent';
import Feature from './Feature/Feature';
import Help from './Help/Help';
import History from './History/History';
import HomeHelp from './HomeHelp/HomeHelp';
import PrayerInfo from './PrayerInfo/PrayerInfo';
import Service from './Service/Service';
import Support from './Support/Support';
import Team from './Team/Team';
import Tetimonial from './Tetimonial/Tetimonial';

const Home = () => {
    const [user, loading] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <Banner></Banner>
            <History></History>
            <Feature></Feature>
            <Service></Service>
            <HomeHelp></HomeHelp>
            <Support></Support>
            <Team></Team>
            <HomeEvent></HomeEvent>
            <PrayerInfo></PrayerInfo>
            <Tetimonial></Tetimonial>

        </div>
    );
};

export default Home;