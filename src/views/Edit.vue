<template>
  <div class="card card-body mt-4">
    <h3>Edit posts</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.title" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Description</label>
        <input
          v-model="form.description"
          class="form-control"
          type="description"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Post } from '@/service'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const postId = computed(() => route.params.id)

    const form = reactive({ title: '', description: '' })
    onMounted(async () => {
      const post = await Post.find(postId.value)
      console.log(post, postId.value)
      form.title = post.title
      form.description = post.description
    })

    const update = async () => {
      await Post.update(postId.value, { ...form })
      router.push('/')
      form.title = ''
      form.description = ''
    }

    return { form, update }
  }
}
</script>
