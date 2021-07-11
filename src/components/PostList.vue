<template>
<h3>{{title}}</h3>
  <div class="card mt-4">
    <table class="table m-0">
      <thead>
        <tr>
          <th scope="col">title</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, title } in posts" :key="id">
          <td>{{ title }}</td>
          <td>
            <router-link :to="`/edit/${id}`">
              <button class="btn btn-primary btn-sm me-2">
                Edit
              </button>
            </router-link>
            <button class="btn btn-danger btn-sm" @click="deletePost(id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Post } from '@/service'

export default {
  props: {
    posts: {
      type: Array,
      required: false
    }
  },
  data () {
    return {
      title: 'List post'
    }
  },
  setup: () => {
    const deletePost = Post.delete
    return { deletePost }
  }
}
</script>
