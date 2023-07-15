import React from "react";

function useLocalStorage (ItemName, initialValue) {
  
    const [item, setItem] = React.useState(initialValue);

    const [loading, setLoading] = React.useState(true);

    const [error, setError] = React.useState(false);

    

    React.useEffect(() => {
        setTimeout(() => {
          try {
            const localStorageItem = localStorage.getItem(ItemName);
            let parsedItem;
  
            if (!localStorageItem) {
              const defaultTodo = initialValue;
              
              localStorage.setItem(ItemName, JSON.stringify(defaultTodo));
              
              parsedItem = initialValue;
            } else {
              parsedItem = JSON.parse(localStorageItem);
              setItem(parsedItem);
            }
  
            setLoading(false);
          } catch (error) {
            setLoading(false);
            setError(true);
          }
        }, 5000);
    })

    
  
    const saveItem = (newItem) => {
      localStorage.setItem(ItemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    return {
      item, 
      saveItem,
      loading,
      error
    };
  }
  
  export { useLocalStorage }
  
// const defaultTodo = [
//   { id: 1, text:"Almorzar", state: false },
//   { id: 2, text:"Desayunar", state: false },
//   { id: 3, text:"Tomar el algo", state: false },
//   { id: 4, text:"Cenar", state: false },
//   { id: 5, text:"Dormir", state: true },
//   { id: 6, text:"Despertar", state: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodo));

// localStorage.removeItem('TODOS_V1');