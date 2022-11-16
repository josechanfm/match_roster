<template>
  <div class="text-center bg-gray-50 text-gray-800 py-5 px-6">
    <h1 class="text-5xl font-bold mt-0 mb-6">出場順序</h1>
  </div>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center" v-for="(mat, index) of players">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(index)"
            v-bind:class="{ 'text-pink-600 bg-white': openTab !== index, 'text-white bg-pink-600': openTab === index }">
            Mat {{ mat.mat }}
          </a>
        </li>
      </ul>

      <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <span v-for="(mat, index) of players">
              <div v-bind:class="{ 'hidden': openTab !== index, 'block': openTab === index }">

                <div class="flex flex-col">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden">
                        <table class="min-w-full">
                          <thead class="bg-white border-b">
                            <tr>
                              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                White
                              </th>
                              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Blue
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-white-100 border-b" v-for="player in mat.players">
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{ player.white_abbr }} - {{ player.white_display_name }}
                              </td>
                              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{ player.blue_abbr }} - {{ player.blue_display_name }}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
  <h1>Demo of remote data</h1>
  <hr>
  <ul>
    <li v-for="mountain of mountains">{{mountain.title}}</li>
  </ul>
</template>
  
<script setup>
import players from "/contents/players.json"

const openTab = ref(0);
const { data: mountains } = await useFetch('https://api.nuxtjs.dev/mountains');
const toggleTabs = (tabNumber) => {
  openTab.value = tabNumber;
}

</script>
  
  
  