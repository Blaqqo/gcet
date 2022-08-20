import { useEffect, useContext } from 'react';

import { AppContext } from '../contexts/app';

const useCloseMenu = () => {
    const { dispatch } = useContext(AppContext);

    useEffect(() => {
        return () => dispatch({ type: 'CLOSE_MENU' });
    }, [dispatch]);

    return null;
}

export default useCloseMenu