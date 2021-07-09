import { ref, onUnmounted } from 'vue'
import db from '@/db'

const postsCollection = db.collection('posts')

export default {
  all: () => {
    const posts = ref([])
    const close = postsCollection.onSnapshot(snapshot => {
      posts.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return posts
  },
  find: async id => {
    const post = await postsCollection.doc(id).get()
    return post.exists ? post.data() : null
  },
  create: post => postsCollection.add(post),
  update: (id, post) => postsCollection.doc(id).update(post),
  delete: id => postsCollection.doc(id).delete()
}
