<template>
    <v-layout layout align-center justify-center row fill-height>
      <v-flex class="mx-3" xs10 sm6 md6 lg3 v-for="(product, i) in products" :key="i">
        <v-card class="elevation-5 carta">
          <v-img :src="product.img">
            <v-container fill-height>
              <v-layout align-end justify-start row>
                <v-flex xs12 class="price">
                  <span class="headline" v-text=" '$'+ product.price"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>
          <v-card-title >
            <h3 class="title text-capitalize"
            >{{product.name}}</h3>
          </v-card-title>
          <v-card-text class="text-center">
            <v-layout row>
            <v-flex xs10>
              <ul>
                <li class="body-2" v-for="(specification, name, i) in product.specifications" :key="i">
                  <strong>{{name}}</strong>: {{specification}}
                </li>
              </ul>
            </v-flex>
              <v-btn
                fab
                right
                dark
                bottom
                color="light-blue darken-4"
                @click="addToWish(product.i)"
                style="position: absolute"
              >
                <v-icon dark>shopping_cart</v-icon>
              </v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
      
    </v-layout>
</template>

<script>
export default {
 
  
    components: {
        name: 'List',
    },
    data() {
      return {
         products: [
          {
            name: 'Brita Aluna 2.4L Cool White Maxtra+ Water Filter Jug S0500',
            img: 'https://img.resized.co/appliancesdelivered/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tXFxcL3N0b3JhZ2UuYnV5YW5kc2VsbC5pZVxcXC91cGxvYWRzXFxcLzM2NTRcXFwvNWFiMjdkNDk2NjBjNy1hM2M1MjkwYWNmNjU1ODAwZDQ1ZTAwOGNkMGQ1NThjM1wiLFwid2lkdGhcIjozNTAsXCJoZWlnaHRcIjpcIlwiLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVxcXC9zdG9yYWdlLmJ1eWFuZHNlbGwuaWVcXFwvYXBwbGlhbmNlcy1kZWxpdmVyZWQtbm9pbWFnZS1sZy5wbmdcIn0iLCJoYXNoIjoiYjE4ZWVkNTVmYWJjNzRjODU2MmU1ZTY4MmE5NGQ5NjAxM2Q1ZTZjZiJ9/5ab27d49660c7-a3c5290acf655800d45e008cd0d558c3',
            price: 15273,
            specifications: {
                Brand: 'Sage',
                Warranty: '2 Years',
                Type: 'Bean to Cup'
            }
          },
                    {
            name: 'producto 2',
            img: 'https://img.resized.co/appliancesdelivered/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tXFxcL3N0b3JhZ2UuYnV5YW5kc2VsbC5pZVxcXC91cGxvYWRzXFxcLzM2NTRcXFwvNWFiMjdkNDk2NjBjNy1hM2M1MjkwYWNmNjU1ODAwZDQ1ZTAwOGNkMGQ1NThjM1wiLFwid2lkdGhcIjozNTAsXCJoZWlnaHRcIjpcIlwiLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVxcXC9zdG9yYWdlLmJ1eWFuZHNlbGwuaWVcXFwvYXBwbGlhbmNlcy1kZWxpdmVyZWQtbm9pbWFnZS1sZy5wbmdcIn0iLCJoYXNoIjoiYjE4ZWVkNTVmYWJjNzRjODU2MmU1ZTY4MmE5NGQ5NjAxM2Q1ZTZjZiJ9/5ab27d49660c7-a3c5290acf655800d45e008cd0d558c3',
            price: 132123,
            specifications: {
                Brand: 'Sage',
                Warranty: '2 Years',
                Type: 'Bean to Cup'
            }
          },
                    {
            name: 'product',
            img: 'https://img.resized.co/appliancesdelivered/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tXFxcL3N0b3JhZ2UuYnV5YW5kc2VsbC5pZVxcXC91cGxvYWRzXFxcLzM2NTRcXFwvNWFiMjdkNDk2NjBjNy1hM2M1MjkwYWNmNjU1ODAwZDQ1ZTAwOGNkMGQ1NThjM1wiLFwid2lkdGhcIjozNTAsXCJoZWlnaHRcIjpcIlwiLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVxcXC9zdG9yYWdlLmJ1eWFuZHNlbGwuaWVcXFwvYXBwbGlhbmNlcy1kZWxpdmVyZWQtbm9pbWFnZS1sZy5wbmdcIn0iLCJoYXNoIjoiYjE4ZWVkNTVmYWJjNzRjODU2MmU1ZTY4MmE5NGQ5NjAxM2Q1ZTZjZiJ9/5ab27d49660c7-a3c5290acf655800d45e008cd0d558c3',
            price: 13254,
            specifications: {
                Brand: 'Sage',
                Warranty: '2 Years',
                Type: 'Bean to Cup'
            }
          },
                    {
            name: 'Titul',
            img: 'https://img.resized.co/appliancesdelivered/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL3MzLWV1LXdlc3QtMS5hbWF6b25hd3MuY29tXFxcL3N0b3JhZ2UuYnV5YW5kc2VsbC5pZVxcXC91cGxvYWRzXFxcLzM2NTRcXFwvNWFiMjdkNDk2NjBjNy1hM2M1MjkwYWNmNjU1ODAwZDQ1ZTAwOGNkMGQ1NThjM1wiLFwid2lkdGhcIjozNTAsXCJoZWlnaHRcIjpcIlwiLFwiZGVmYXVsdFwiOlwiaHR0cHM6XFxcL1xcXC9zMy1ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVxcXC9zdG9yYWdlLmJ1eWFuZHNlbGwuaWVcXFwvYXBwbGlhbmNlcy1kZWxpdmVyZWQtbm9pbWFnZS1sZy5wbmdcIn0iLCJoYXNoIjoiYjE4ZWVkNTVmYWJjNzRjODU2MmU1ZTY4MmE5NGQ5NjAxM2Q1ZTZjZiJ9/5ab27d49660c7-a3c5290acf655800d45e008cd0d558c3',
            price: 123,
            specifications: {
                Brand: 'Sage',
                Warranty: '2 Years',
                Type: 'Bean to Cup'
            }
          },
        ],
      }
    },
    methods:{
      addToWish(product) {
        console.log('product');
      }
    }
}
</script>
<style>
  .price{
    position: absolute;
    bottom: 0;
    left: 5%;
    background: #27272742;
    border-radius: 2px;
  }
  /* .carta{
     max-height: 450px;
  } */
</style>
