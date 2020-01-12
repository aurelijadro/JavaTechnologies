export function serverProductToClientProduct(serverProduct) {
  return {
    name: serverProduct.title,
    id: serverProduct.id,
    price: serverProduct.price,
    description: serverProduct.description,
    quantity: serverProduct.quantity,
    imageURL: serverProduct.image
  };
}
