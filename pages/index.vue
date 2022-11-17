<template>
    <div class="text-center text-5xl">
      {{page.title}}
      <hr>
    </div>
    <div class="text-center text-xl">
      {{page.description}}
    </div>
  <p>{{$myPlugin11('Jose')}}</p>
  <p>{{$myPlugin22('Chan')}}</p>
  </template>
  
  <script setup>
  import page from '/contents/landing.json';
  
  const openTab=ref(1);
  const { data: mountains } = await useFetch('https://api.nuxtjs.dev/mountains');
  const toggleTabs =(tabNumber)=>{
    openTab.value=tabNumber; 
  }
  
  </script>

<style>
body{
  background-color: white;
}
</style>
  
  
  
  