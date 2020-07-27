import httpsClient from './httpsClients';

const homeApi = {
    getHomeData: () => {
        return httpsClient.get('v3/9fc6c82f-3fde-431d-b1e5-0a1982928cb4')
    }
}

export default homeApi;