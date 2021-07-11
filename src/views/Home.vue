<template>
  <h1>Welcome {{ user?.email }}!</h1>
  <button @click="signOutUser">Sign Out</button>
  <PostCreate />
  <PostList :posts='posts'/>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from '@/service/auth'
import { useRouter } from 'vue-router'
import PostCreate from '@/components/PostCreate.vue'
import PostList from '@/components/PostList.vue'
import { Post } from '@/service'

export default {
  name: 'Home',
  components: { PostCreate, PostList },
  data () {
    return {
      posts: []
    }
  },
  async created() {
    const querySnapshot = await Post.all()
    this.posts = querySnapshot.docs.map((doc) => {
      return {...doc.data(), id: doc.id}
    })
  },
  setup() {
    const { user } = useAuthState()
    const auth = getAuth()
    const router = useRouter()
    const signOutUser = async () => {
      try {
        await signOut(auth)
        router.push('/login')
      } catch (e) {
        alert(e.message)
      }
    }

    return { user, signOutUser }
  },
  methods: {

  }
}
</script>
