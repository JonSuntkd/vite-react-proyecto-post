import React, { useState } from "react";

//Crear el contexto
const PostContext = React.createContext();

//Provider Personalizado
export function PostProvider(props) {
  const [postItems, setPostItems] = useState([]);

  const onAdd = (post) => {
    //Agregar producto...
    //Si existe un producto, aumentar la cantidad. Caso contrario crear nuevo registro
    const postExist = postItems.find((p) => p.id === post.id);
    if (postExist) {
      //Restar cantidad
      let poastItemUpdate = postItems.map((item) =>
        item.id === post.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );

      setPostItems(postItemUpdate);
    } else {
      let postExist = {
        id: post.id,
        nombre: post.title,
        precio: post.price,
        cantidad: 1,
      };

      setPostItems([...postItems, postExist]);
    }
  };

  const onDelete = (post) => {
    const datoEliminado = postItems.filter((item) => item.id !== post.id);
    setPostItems(datoEliminado);
  };

  const onEmpty = () => {
    setPostItems([]);
  };

  const onAddCantidad = (post) => {
    const postExist = postItems.find((p) => p.id === post.id);
    if (postExist) {
      //Restar cantidad
      let postItemUpdate = postItems.map((item) =>
        item.id === post.id ? { ...item, cantidad: item.cantidad + 1 } : item
      );

      setPostItems(postItemUpdate);
    }
  };

  const onSubtractCantidad = (post) => {
    const postExist = postItems.find((p) => p.id === post.id);
    if (postExist && postExist.cantidad > 1) {
      //Restar cantidad
      let postItemUpdate = postItems.map((item) =>
        item.id === post.id ? { ...item, cantidad: item.cantidad - 1 } : item
      );
      setPostItems(postItemUpdate);
    }else{
        onDelete(post);
    }
  };
  const onRemote = (post) => {
    //Quitar producto.
    //Si existe el producto y la cantidad es mayor a 1, disminuir en uno la cantidad.
    //Si existe la cantidad 1, quitar el producto

    const postExist = postItems.find((p) => p.id === post.id);
    if (postExist && postExist.cantidad > 1) {
      //Restar cantidad
      let postItemUpdate = postItems.map((item) =>
        item.id === post.id ? { ...item, cantidad: item.cantidad - 1 } : item
      );

      setPostItems(postItemUpdate);
    } else {
      const postItemsNew = postItems.filter((p) => p.id !== post.id);
      setPostItems(postItemsNew);
    }
  };

  const value = {
    postItems: postItems,
    onAdd: onAdd,
    onRemote: onRemote,
    onDelete: onDelete,
    onEmpty: onEmpty,
    onAddCantidad: onAddCantidad,
    onSubtractCantidad: onSubtractCantidad,
  };

  return (
    <PostContext.Provider value={value}>{props.children}</PostContext.Provider>
  );
}

export default PostContext;