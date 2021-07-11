import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import development from "@/config/development.json"
import production from "@/config/production.json"

let config = Object.freeze(development)
if (process.env.NODE_ENV === "production") {
  config = Object.freeze(production)
}

initializeApp(config.firebase)
export default getFirestore();
