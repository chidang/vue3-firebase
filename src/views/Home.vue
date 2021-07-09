<template>
  <PostCreate />
  <PostList />
</template>

<script>
import PostCreate from '@/components/PostCreate.vue'
import PostList from '@/components/PostList.vue'

export default {
  name: 'Home',
  components: { PostCreate, PostList }
}
</script>
