import firebase from 'firebase'
import development from "@/config/development.json"
import production from "@/config/production.json"

let config = Object.freeze(development)
if (process.env.NODE_ENV === "production") {
  config = Object.freeze(production)
}

const firebaseApp = firebase.initializeApp(config.firebase)

export default firebaseApp.firestore()
