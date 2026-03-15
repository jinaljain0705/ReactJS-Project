import { storage } from "../firebase/firebaseConfig"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export const uploadImage = async (file) => {

  const imageRef = ref(storage, "products/" + file.name)

  await uploadBytes(imageRef, file)

  const url = await getDownloadURL(imageRef)

  return url
}
