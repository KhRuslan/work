<template>
  <div style="margin:0px">
    <div v-if="fetching">Loading...</div>
    <div v-else-if="error">Oh no... {{ error }}</div>
    <div v-else>
      <div v-if="data">
        <div class="img">
          <h1 style="font-family: 'Rubik Glitch', cursive;">ЛИЦЕНЗИОННОЕ КАЗИНО</h1>
        </div>
        <div class="background">
          <div class="container">
            <div class="flex">
              <div v-for="c in data.Casino" :key="c.id" class="product_card">
                <div class="flx">
                  <div class="pic">
                    <img :src="'http://38.242.229.113:8055/assets/' + c.image.id" alt="">
                  </div>
                  <div class="text">
                    <h3>{{ c.title }}</h3>
                    <p>{{ c.detail }}</p>
                    <p>{{ c.decsription }}</p>
                  </div>
                </div>
                <div class="btn">
                  <a :href="c.link"><button class="card-text-button">ВЫИГРАТЬ ТУТ</button></a>
                </div>
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
.background {
  background-image: url(https://cdn.discordapp.com/attachments/959852362229489674/982633364681015387/purple-neon-border-with-flare-on-the-top-background-free-video.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.img h1 {
  font-size: 54.5px;
  font-weight: lighter;
  margin-top: 314px;
}

.btn {
  display: flex;
  justify-content: center;
  padding-top: 10px;

}

.btn a {
  text-decoration: none;
  color: #6fc0ea;
}

.pic {
  padding: 0px 8px;
  margin-top: 20px;
  max-width: 250px;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #6fc0ea, rgba(0, 0, 0, 0)) 1 100%;
}

.card-text-button {
  padding: 10px 20px;
  border-width: 4px;
  border-style: solid;
  color: white;
  border-image: linear-gradient(to right, darkblue, darkorchid) 1;
  background-color: transparent;
  cursor: pointer;

}

.card-text-button:hover {
  background: rgb(0, 0, 139);
  background: linear-gradient(90deg, rgba(0, 0, 139, 1) 35%, rgba(153, 50, 204, 1) 100%);
  color: white;
  border-image: linear-gradient(to right, darkblue, darkorchid) 1;
  border-width: 4px;
  border-style: solid;
}

.img {
  background-image: url(https://cdn.discordapp.com/attachments/959852362229489674/982632985998270474/neon-02.jpg);
  height: 600px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;

}

.product_card {
  width: 361px;
  height: 573px;
  background-color: #1e1045;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
  margin: 120px 0px 25px 0px;
}

.flex {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.flx {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  margin: 0 auto;
  width: 1440px;
}

.text {
  text-align: center;
  color: white;
  height: 183px;
}

@media(max-width:1024px) {
  .container {
    width: 100%;
  }
}

@media(max-width:1023px) {
  .container {
    width: 100%;
  }

  .flex {
    display: flex;
    flex-direction: column;
    align-content: space-around;
  }
}

@media(max-width:768px) {
  .container {
    width: 100%;
  }

  .product_card {
    width: 361px;
    height: 573px;
  }

  .flex {
    display: flex;
    flex-direction: column;
    align-content: space-around;
  }

  .img h1 {
    font-size: 45.5px;
    text-align: center;
  }

}

@media(max-width:426px) {
  .img h1 {
    font-size: 45.5px;
    text-align: center;
  }

  .product_card {
    width: 326px;
    height: 565px;
    margin: 37px 0px 0px 0px;
  }


  .btn {
    padding-top: 0px;
  }

  .flex {
    display: flex;
    flex-direction: column;
    align-content: space-around;
  }

  .container {
    width: 100%;
  }

  .text {
    height: 161px;
  }
}

@media(max-width:376px) {
  .img h1 {
    font-size: 37.5px;
    text-align: center;
  }

  .container {
    width: 100%;
  }
  .product_card {
    margin: 37px 0px 0px 0px;
  }
}

@media(max-width:321px) {
  .img{
    height: 420px;
  }
  .img h1 {
    font-size: 33.5px;
    text-align: center;
    margin-top: 209px;
  }

  .container {
    width: 100%;
  }

  .product_card {
    width: 248px;
    height: 470px;
    margin: 37px 0px 0px 0px;
  }

  .text {
    height: 157px;
  }

  .pic img {
    height: 230px;
  }

}
</style>