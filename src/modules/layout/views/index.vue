<template>
  <div class="layout">
    <sidebar />
    <div class="main-content" v-bind:style="{width:`calc(100% - ${sidebarState.width})`}">
      <headers />
      <tag-tabs />
      <!-- <app-main class="main-wrapper" id="mainWrapper"></app-main> -->
     
    </div>
  </div>
</template>

<script>
   import headers from '../components/header'
  import sidebar from '../components/sidebar'
  import tagTabs from '../components/tagTabs'
  // import appMain from './Components/main'

  import {
    mapGetters
  } from 'vuex'

  export default {
    name: 'Layout',
    components: {
      headers,
      sidebar,
      tagTabs,
      // appMain
    },
    computed: {
      ...mapGetters(['sidebarState', 'windowMaxState'])
    },
    methods:{
     
    }
  }
</script>

<style lang="scss">
.layout{
  display:flex;
  width:100%;
  height:100%;

  .main-content{
    flex:1 auto;
    display: inherit;
    flex-direction: column;
    transition:all .3s ease-in-out 0s;

    .main-wrapper{
      flex:1;
    }
  }
}
</style>