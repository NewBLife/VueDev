import Top from './pages/top';
import Axios from './pages/axios';
import FetchApi from './pages/fetchapi';

export default [{
        path: '/',
        component: Top
    },
    {
        path: '/axios',
        component: Axios
    },
    {
        path: '/fetchapi',
        component: FetchApi
    }
]