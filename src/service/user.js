import { ref, onUnmounted } from 'vue'
import db from '@/db'

const usersCollection = db.collection('users')

export default {
  all: () => {
    const users = ref([])
    const close = usersCollection.onSnapshot(snapshot => {
      users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users
  },
  find: async id => {
    const user = await usersCollection.doc(id).get()
    return user.exists ? user.data() : null
  },
  create: user => usersCollection.add(user),
  update: (id, user) => usersCollection.doc(id).update(user),
  delete: id => usersCollection.doc(id).delete()
}
