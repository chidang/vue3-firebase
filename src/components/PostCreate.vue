<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="submit">
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
    return { form }
  },
  methods: {
    async submit () {
      try {
        await Post.create({ ...this.form })
        this.form.title = ''
        this.form.description = ''
      } catch (error) {
        alert(error.message)
      }
    }
  }
}
</script>
