import { useState} from 'react';

export function MainPage() {

    const [value, setValue] = useState('');
    const [itemLists, setItemLists] = useState([]);


    function doInput(e) {
        setValue(e.target.value);
    }

    function addName() {
        if (value !== '') {
            setItemLists([...itemLists, value]);
            setValue('');
        }
    }

    function changeInputName(index) {
        const newName = prompt('Введите новое имя');
        if (newName !== '') {
            const updatedList = [...itemLists];
            updatedList[index] = newName;
            setItemLists(updatedList);
        }
    }

    return (
        <div>
            <input type="text" value={value} onChange={doInput} />
            <button onClick={addName} disabled={value === ''}>Добавить</button>
            {itemLists.length === 0 && <p>Список пуст</p>}

            <ul>
                {itemLists.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => changeInputName(index)} disabled={value === ''}>Поменять</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

