import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        token: {
            access_token: null,
            expires_in: null,
            token_type: null
        },
        user: {
            _id: null,
            firstName: null,
            lastName: null,
            email: null,
            level: null
        },

    },
    mutations: {

        SET_TOKEN(state, token) {
            state.token = token
        },

        LOGOUT(state) {
            
            state.user._id = null
            state.user.firstName = null
            state.user.lastName = null
            state.user.email = null

            state.token.access_token = null
            state.token.expires_in = null
            state.token.token_type = null
            
        },
    },
    getters: {
        checkToken(state) {
            let dateNow = Date.now();
            if (dateNow > state.token.expires_in) {
                return state.token
            } else {
                return null
            }
        },
        getHeader(state, getters) {
            if (getters.isAuthToken) {
                if (getters.isAuthToken.access_token) {
                    let headers = {
                        'accept': 'Application/json',
                        'authentication': getters.isAuthToken.token_type + getters.isAuthToken.access_token
                    }
                    return headers;
                } else {
                    return null
                }
            } else {
                return null
            }
        },
        isAuthUser(state) {
            if (state.user._id) {
                return state.user
            } else {
                return null
            }
        },
        isAuthToken(state) {

            if (!state.token.access_token) {
                return null
            } else {
                return state.token
            }

        }

    }
})