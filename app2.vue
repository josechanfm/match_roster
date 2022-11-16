<template>
  <div>
    {{page.title}}
    <hr>
  </div>
  <div>
    {{$myPlugin11('My message')}}
  </div>
  <div>
    {{$myPlugin22('222222')}}
  </div>
  <div>
    <h1>{{$t('hello',{name:'vue-i18n'}) }}</h1>
  </div>
    <form>
      <label for="locale-select">{{ $t('language') }}: </label>
      <select id="locale-select" v-model="$i18n.locale">
        <option value="en">en</option>
        <option value="zh">zh</option>
      </select>
    </form>

</template>

<script setup>
import page from '/contents/landing.json';


</script>


