import { useState } from 'react';


export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ( {target} ) => {
        setInputValue( target.value );  // Para poder escribir o borrar lo que estaba en el buscador
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return; {/* Se restringe que si ingresa una letra no se imprimirá */}

        //setCategories( categories => [inputValue, ...categories ] );
        onNewCategory( inputValue.trim() );
        setInputValue(''); //borrar lo que se escribió en el buscador
    }


  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text"
            placeholder="Buscar Gifs"
            value = { inputValue }
            onChange = { onInputChange } //OnChange: habilita para poder escribir en el buscador
        />


    </form>
    
  )
}
