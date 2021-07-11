<template>
  <div class="container">
    <TheHeader/>
    <main class="main">
      <router-view :key="$route.path"></router-view>
    </main>
  </div>
</template>

<script>
import TheHeader from './TheHeader'

export default {
  name: 'TheContainer',
  components: {
    TheHeader
  }
}
</script>
