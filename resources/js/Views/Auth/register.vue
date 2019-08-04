<template>
  <v-container>
    <v-layout row>
      <v-flex class="ma-auto" align-self-center text-xs-center lg5>
        <v-btn class="light-blue darken-4 white--text" @click="login">Login</v-btn>
        <v-btn>Sign Up</v-btn>
        <v-card class="pa-5 mt-3 text-xs-center">
          <h5 class="mb-4 ml-3 headline">Enter your Data</h5>
          <v-form v-model="valid">
            <v-layout row wrap>
              <v-flex xs5 md6 class="mx-1">
                <v-text-field
                  label="Email"
                  v-model="register.email"
                  :rules="rules.email"
                  name="email"
                  type="email"
                />
              </v-flex>
              <v-flex xs5 md6 class="mx-1">
                <v-text-field
                  label="Name"
                  v-model="register.name"
                  :rules="rules.name"
                  name="email"
                  type="email"
                />
              </v-flex>
              <v-flex xs5 md6 class="mx-1">
                <v-text-field
                  label="pass"
                  v-model="register.password"
                  :rules="rules.password"
                  name="pass"
                  type="password"
                />
              </v-flex>
              <v-flex xs5 md6 class="mx-1">
                <v-text-field
                  label="Repeat pass"
                  v-model="register.reat_password"
                  :rules="rules.repeatPass"
                  name="pass"
                  type="password"
                />
              </v-flex>
              <v-flex class="text-xs-center" xs12>
                <v-btn
                  class="black white--text mt-5"
                  @click="sendForm"
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
export default {
    name: "Register",
    data(){
        return{
            valid: false,
            register: {
                email: '',
                name: '',
                password: '',
                reat_password: '',
            },
            rules: {

                email: [
                    v => !!v || "E-mail is required",
                    v =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                    "E-mail must be valid"
                ],
                name:[
                    v => !!v || 'last name is Required'
                ],
                password: [
                    v => !!v || "Pass is required",
                    v => v.length > 5 || "Min 6 characters"
                ],
                repeatPassword: [
                    v => !!v || "Repeat Pass please",
                    v => v.length > 5 || "Min 6 characters",
                    v => v == this.register.pass || "The password not matched"
                ]
            }
        }
    },
    methods : {
        login(){
          this.$router.push("/login");
        },
        sendForm(){
          
          axios.post('/api/register', this.register)
          .then(response => {
              // login user, store the token and redirect to dashboard
              console.log('exito')
              console.log(response)
              localStorage.setItem('token', response.data.access_token)
              this.$router.push('/')
          }).catch(error => {
              console.log(error)
          });
        }
    }
}
</script>