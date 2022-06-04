<template>
  <div style="background-image: url(../images/wallpapersden.com_purple-sunrise-4k-vaporwave_1920x1080.jpg); background-repeat: no-repeat; background-size: cover;
    background-position: center; ">
    <div class="container">
    <input type="text" v-model="search" placeholder="search"/>
    <button @click="searchProducts">search</button>
    <div v-if="fetching">Loading...</div>
    <div v-else-if="error">Oh no... {{ error }}</div>
    <div v-else>
      <div v-if="data">
      <div class="flex">
        <div v-for="c in data.Casino" :key="c.id" class="product_card">
          <img :src="'http://localhost:8055/assets/' + c.image.id" alt="" style="float: left">
          <div class="text">
          <p>{{ c.title }}</p>
          <p>{{ c.detail }}</p>
          <p>{{ c.decsription }}</p>
          <a :href="c.link" >ВЫИГРАТЬ ТУТ</a>
          </div>
          
        </div>
      </div>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
import { useQuery } from "@urql/vue";
import { ref } from "@vue/reactivity";


export default {
  setup() {
    const search = ref(null);
    const result = useQuery(
      {
        query: `
      query($search: String) {
          Casino(search: $search) {
            id
            title
            decsription
            detail
            link
            image {
              id
            }
          }
        }
      `, variables: { search }
      },
    );
    function searchProducts() {
      result.executeQuery()
    }
    return {
      search,
      fetching: result.fetching,
      data: result.data,
      error: result.error,
      searchProducts,
     
    };
  },
};
</script>

<style scoped>
.product_card {
  border: 3px black solid;
  margin: 1rem;
  width: 500px;
  height: 350px;
}

.flex {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.container {
  margin: 0 auto;
  width: 1440px;
}

.text {
  color: #cacbcb;
    font-size: 14px;
    font-family: 'Roboto',sans-serif;
    margin-top: 20px;
    max-height: 175px;
    position: relative;
    z-index: 2;
    word-wrap: break-word;
    overflow: hidden;
    line-height: 19px;
}
</style>