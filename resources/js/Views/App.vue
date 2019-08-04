<template>
  <v-app>
    <v-navigation-drawer absolute v-model="dataDrawer.show" class="light-blue darken-4 py-1 white--text"  app>
      
      <v-list class="pt-0" dense>
        <v-list-tile class="py-1 white--text my-5" @click="home">
          <v-list-tile-content>
            <v-list-tile-title >
              <h1 class>MyFavouriteAppliances.wow</h1>
            </v-list-tile-title>
          </v-list-tile-content>
        
        </v-list-tile >
        <v-divider class="mb-3"></v-divider>
           <v-list-tile class="py-1 white--text"  @click="logout" v-if="isAuthToken "> 
          <v-list-tile-action>
            <v-icon dark>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <h3 class>Logout</h3>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
       <div v-else>
          <v-list-tile class="py-1 white--text"  @click="login" > 
          <v-list-tile-action>
            <v-icon dark>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <h3 class>Login</h3>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="py-1 white--text" @click="SignUp"  > 
          <v-list-tile-content>
            <v-list-tile-title>
              <h3 class>Sign Up</h3>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
       </div>
     
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo accent-3" dark  app>
      <v-toolbar-side-icon color="white--text" @click="showDrawer()"></v-toolbar-side-icon>
      <v-toolbar-title @click="home">Products</v-toolbar-title>
        
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>  
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '../store'
export default {
  name: "App",
  components: {
    name: "root",
    components: {
    
    }
  },
  mounted() {
    console.log("Component app.");
  },
  data() {
    return {
      dataDrawer: {
        show:true
      }
    };
  },
  computed: {
    ...mapGetters({
        isAuthToken: "isAuthToken",
  
    })

  },
  methods: {
    home() {
      this.$router.push("/");
    },
    login() {
      this.$router.push("/login");
    },
    SignUp() {
      this.$router.push("/signup");
    },
    logout(){
      store.commit('LOGOUT');
    },
    showDrawer() {
      this.dataDrawer.show = !this.dataDrawer.show
    }
  }
};
</script>
