import firebase from 'firebase'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyDMTRBygCf1wEy_4HUiqWfP_cluMdMtwV8",
  authDomain: "crud-f4afe.firebaseapp.com",
  databaseURL: "https://crud-f4afe-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud-f4afe",
  storageBucket: "crud-f4afe.appspot.com",
  messagingSenderId: "224643545934"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const usersCollection = db.collection('users')

export const createUser = user => {
  return usersCollection.add(user)
}

export const getUser = async id => {
  const user = await usersCollection.doc(id).get()
  return user.exists ? user.data() : null
}

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user)
}

export const deleteUser = id => {
  return usersCollection.doc(id).delete()
}

export const useLoadUsers = () => {
  const users = ref([])
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return users
}
