import { useState, useEffect, useLayoutEffect, useRef, useReducer } from 'react'

function Content() {
    const [works, setWorks] = useState(['lau nha',
        'rua chen',]);
    const [item, setItem] = useState('');
    const handleAdd = () => {
        setWorks([...works, item]);
        setItem('');
        inputRef.current.focus();
    }
    const handleDelete = index => {
        console.log(index);
        const newWorks = [...works];
        newWorks.splice(index, 1);
        setWorks(newWorks);
    }
    
    const inputRef = useRef();
    return (
        <>
            <h1>Todo</h1>
            <input type="text"
                ref={inputRef}
                placeholder='Enter todo ...'
                value={item}
                onChange={(e) => {
                    setItem(e.target.value)
                }}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {
                    works.map((work, index) => {
                        return (
                            <>
                                <li key={index}>{work} <button onClick={() => handleDelete(index)}>x</button></li>

                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default Content