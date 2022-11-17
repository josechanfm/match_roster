<template>
  <div class="text-center text-gray-800 py-5 px-6 ">
    <h1 class="text-5xl font-bold mt-0 mb-6">{{$t('title',{developer:"aaa"})}}</h1>
  </div>
  <div class="flex flex-wrap">
    <div class="w-full">
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row px-4">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center" v-for="(mat, index) of players">
          <a class="text-3xl font-bold uppercase px-5 py-3 shadow-lg rounded-lg block leading-normal"
            v-on:click="toggleTabs(index)"
            v-bind:class="{ 'text-pink-600 bg-amber-100': openTab !== index, 'text-white bg-pink-600': openTab === index }">
            {{$t('mat') }} {{ mat.mat }}
          </a>
        </li>
      </ul>

      <div class="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <span v-for="(mat, index) of players">
              <div v-bind:class="{ 'hidden': openTab !== index, 'block': openTab === index }">
                <div class="flex flex-col">
                  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden rounded-lg">
                        <table class="min-w-full border-separate border">
                          <thead class="border-b">
                            <tr>
                              <th scope="col" class="text-xl font-medium bg-amber-100 text-gray-900 px-1 py-1 text-center">
                                #
                              </th>
                              <th scope="col" class="text-3xl font-medium bg-white text-gray-900 px-6 py-4 text-center">
                                {{$t('white') }}
                              </th>
                              <th scope="col" class="text-3xl font-medium bg-blue-300 text-gray-900 px-6 py-4 text-center">
                                {{$t('blue') }}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr class="bg-white-100 border-b " v-for="player in mat.players">
                              <td class="text-xl bg-amber-100 text-gray-900 font-light px-0 py-1 whitespace-nowrap text-center">
                                <div class="text-3xl">{{ player.category }}</div>
                                <div class="text-2xl">{{ player.gender }} {{ player.weight }}</div>
                                
                              </td>
                              <td class="text-5xl bg-white text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {{ player.white_abbr }} - {{ player.white_display_name }}
                              </td>
                              <td class="text-5xl bg-blue-300 text-gray-900 font-light px-6 py-4 whitespace-nowrap">
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

  <div class="absolute bottom-0 right-0 h-8 w-20">
    <form>
          <select id="locale-select" v-model="$i18n.locale">
            <option value="en">en</option>
            <option value="zh">zh</option>
          </select>
        </form>
  </div>  
</template>
  
<script setup>
//import players from "/contents/players.json"
import { onMounted} from "vue";

const openTab = ref(0);
const matNum=ref(0);
const timer=ref(0);
const { data: players } = await useFetch('http://localhost:3000/players.json');

const toggleTabs = (tabNumber) => {
  openTab.value = tabNumber;
};

const changeTabs = ()=>{
  matNum.value=players._value.length;
  openTab.value=(openTab.value+1)%matNum.value;
};

const intervalHandel = setInterval(changeTabs,3000);

</script>
  
<style>
body{
  background-color: lightgray;
}
</style>
  