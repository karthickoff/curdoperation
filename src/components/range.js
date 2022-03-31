import React, { useState } from 'react';
import Logout from './logout';
import "../styles/range.css";
export default function Range() {
    const [startindex, setStartIndex] = useState('');
    const [endindex, setEndIndex] = useState('');
    const [arrEle, setArrEle] = useState('');
    const [elementList, setelementList] = useState([]);
    const handleOnchange = (e) => {
        console.log("------e.target.value------ei----", e.target.value, elementList.length);

        switch (e.target.name) {
            case 'arrEle':
                setArrEle(e.target.value);
                break
            case 'startindex':
                if (e.target.value < elementList.length) {
                    setStartIndex(e.target.value);

                }
                else {
                    alert("Start index Incorrect")
                    setStartIndex('');

                }
                break
            case 'endindex':
                if (e.target.value >= elementList.length) {
                    alert("End index Incorrect")
                    setEndIndex('');
                }
                else {
                    setEndIndex(e.target.value)
                }

                break
        }

    }
    // console.log(startindex, elementList);


    const handleAddArray = () => {
        setelementList([...elementList, arrEle])
        setArrEle('')
    }
    const handleRemove = () => {
        if (endindex < startindex) {
            return alert("--invalid detials---")
        }
        var arrayList = elementList;
        var d = endindex - startindex === 0 ? 1 : (endindex - startindex) + 1;
        arrayList.splice(startindex, d);
        setelementList(arrayList);
        setStartIndex('');
        setEndIndex('');
    }
    console.log("elementList===============", elementList);

    return (
        <div>
            <Logout></Logout>
            <div className='container rangearea'>
                <label>Enter array element</label>
                <input name='arrEle' value={arrEle} onChange={handleOnchange} />
                <button className='btn btn-warning' onClick={handleAddArray}>Push</button>
                <div className='indexarea'>
                    <label>Start Index</label> <br />
                    <input placeholder='start-index' name='startindex' value={startindex} onChange={handleOnchange} /><br />
                    <label> End Index</label><br />
                    <input placeholder='end-index' name='endindex' value={endindex} onChange={handleOnchange} /><br />
                </div>
                <div>
                    <button onClick={handleRemove} className='btn btn-primary'>Remove</button>
                </div>
                <div className='ans'>
                    {elementList.map((reptile) => <span>{reptile} </span>)}
                </div>

            </div>
        </div>

    )
}
