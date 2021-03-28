import createPersistedState from 'vuex-persistedstate'
 
export default ({ store }) => {
    window.onNuxtReady(() => {
        createPersistedState({
            key: 'USAGONOMI',
            storage: window.sessionStorage
        })(store)
    })
}