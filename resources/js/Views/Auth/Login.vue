<template>
  <v-container>
    <v-layout row>
      <v-flex class="ma-auto" align-self-center text-xs-center lg5>
        <v-btn class="light-blue darken-4 white--text">Login</v-btn>
        <v-btn @click="signUp">Sign up</v-btn>
        <v-card class="pa-5 mt-3 text-xs-center">
          <h5 class="mb-4 ml-3 headline">Enter your Data</h5>
          <v-form v-model="valid">
            <v-layout row wrap>
              <v-flex xs12 class="ma-auto">
                <v-text-field
                  label="E-mail"
                  v-model="login.email"
                  :rules="rules.email"
                  name="email"
                  type="email"
                />
              </v-flex>
              <v-flex xs12 class="ma-auto">
                <v-text-field
                  label="Password"
                  v-model="login.password"
                  :rules="rules.pass"
                  name="password"
                  type="password"
                />
              </v-flex>

              <v-divider></v-divider>
              <v-flex class="text-xs-center" xs12>
                <v-btn
                  class="black white--text mt-5"
                  @click="authenticate"
                  :disabled="!valid"
                >Iniciar Sesión</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import store from '../../store'
export default {
  
  name: "Login",
  data() {
    return {
        valid: false,
        login: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          v => !!v || "E-mail is required",
          v =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "E-mail must be valid"
        ],
        pass: [
          v => !!v || "Pass is required",
          v => v.length > 5 || "Min 6 characters"
        ]
      }
    };
  },
  methods: {
    signUp(){
          this.$router.push("/signup");
    },
    authenticate(){
      axios.post('/api/login', this.login)
      .then(response => {
            // login user, store the token and redirect to dashboard
            store.commit('SET_TOKEN')
            this.$router.push('/')
        }).catch(error => {
            console.log(error)
        });
      // this.$store.dispatch('login', { email, password }).then(() => this.$router.push('/'))
    }
  }
};
</script>