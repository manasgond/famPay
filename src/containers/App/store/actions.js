export const actions = {
    GET_APP_HOME_DATA:'GET_APP_HOME_DATA',
    SAVE_APP_HOME_DATA:'SAVE_APP_HOME_DATA',
}

export const fetchHomeApi = () => ({
    type: actions.GET_APP_HOME_DATA,
});

export const saveHomeApiData = (data) => ({
    type: actions.SAVE_APP_HOME_DATA,
    data
});
