import React from 'react';
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

export default function Textform(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // function changetextvalue(value) {
  //   setText(value);
  // }

  const changeUpCase = () => {
    let upper = text.toUpperCase();
    setText(upper);
    props.showAlert("changed into upper case!","success");
  };

  const changeLowerCase = () => {
    let lower = text.toLowerCase();
    setText(lower);
    props.showAlert("changed into lower case!","success");
  };
  const removeExtraSpace = () => {
    let newText = text.replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("extra spaces removed!","success");
  }
  const copyText = ()=>{
 navigator.clipboard.writeText(text);// to select into clipboard
document.getSelection().removeAllRanges();// after copy , it show selected and by using this function we can remove it and it does not affect the copied text.
  props.showAlert("copied to clipboard!","success")
  }
  const changeClear = () => {
    setText('');
    props.showAlert("text is cleared!","success");
  };

  const [text, setText] = useState('');
  const [table, setTable] = useState([]);

  useEffect(() => {
    // Collection reference
    const colRef = collection(db, 'About');

    // Get collection data
    getDocs(colRef)
      .then((snapshot) => {
        const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTable(docs);
        console.log(docs);
      })
      .catch((error) => {
        console.error("Error fetching documents: ", error);
      });
  }, []);

  var wordCount = text === '' ? 0 : text.split(/\s+/g).filter((element)=>{return element.length!==0}).length;
  var preview = text === '' ? "Nothing to preview" : text;
  var timer = text === '' ? 0 : 0.0032 * 60 * text.split(' ').length;

  return (
    <>
      <div className="container" style={{color:props.mode === 'light' ? 'black' : 'white' }} >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <div className="my-3">
            <h2 style = {{color : props.mode==='light'?'blue':'yellow'}}>Fetched Data</h2>
            <ul>
              {table.map(doc => (
                <li
                  className='btn btn-secondary mx-2 my-1'
                  key={doc.id}
                  onClick={() => setText(doc.Discription)}
                >
                  {doc.Title}
                </li>
              ))}
            </ul>
          </div>
          <textarea
            className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color:props.mode === 'dark' ? 'white' : 'black' }}>
          </textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={changeUpCase} disabled = {text.length===0}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={changeLowerCase} disabled = {text.length===0}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={copyText} disabled = {text.length===0}>
          Copy
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={removeExtraSpace} disabled = {text.length===0}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={changeClear} disabled = {text.length===0}>
          Clear
        </button>

        {/* btn-primary is a class in bootsrap which generate a button with a specific design */}
      </div>
      <div className="container my-4" style={{color:props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='fs-2 my-3'>Your Text Summary</h1>
        <p className='my-3'>
          {wordCount} <b>words</b> , {text.length} <b>characters</b>
        </p>
        <p>{timer} seconds to read</p>
        <h2>Preview</h2>
        <p>{preview}</p>
      </div>
    </>
  );
}
