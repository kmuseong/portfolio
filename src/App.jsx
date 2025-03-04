import LoadingScreen from './components/LoadingScreen';
import { useState } from 'react';
import Router from './Routes/Router';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <>
            {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            <Router />
        </>
    );
};

export default App;
