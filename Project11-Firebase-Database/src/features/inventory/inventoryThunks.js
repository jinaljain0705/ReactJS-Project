import { ref, push, set, get, update, remove } from "firebase/database";
import { db } from "../../firebase/firebaseConfig";

export const fetchProductsAPI = async () => {
  const snapshot = await get(ref(db, "products"));

  if (!snapshot.exists()) return [];

  const data = snapshot.val();

  const products = Object.keys(data).map((id) => ({
    id,
    ...data[id],
  }));

  return products;
};

export const addProductAPI = async (product) => {
  const newRef = push(ref(db, "products"));

  await set(newRef, product);

  return { id: newRef.key, ...product };
};

export const updateProductAPI = async (product) => {
  await update(ref(db, "products/" + product.id), {
    name: product.name,
    category: product.category,
    price: product.price,
    stock: product.stock,
  });

  return product;
};

export const deleteProductAPI = async (id) => {
  await remove(ref(db, "products/" + id));

  return id;
};
