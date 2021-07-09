<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Title</label>
        <input v-model="form.title" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Description</label>
        <input
          v-model="form.description"
          class="form-control"
          required
        />
      </div>

      <button type="submit" class="btn btn-success mt-3">
        Create Post
      </button>
    </form>
  </div>
</template>

<script>
import { Post } from '@/service'
import { reactive } from 'vue'

export default {
  setup() {
    const form = reactive({ title: '', description: '' })

    const onSubmit = async () => {
      await Post.create({ ...form })
      form.title = ''
      form.description = ''
    }

    return { form, onSubmit }
  }
}
</script>
