import { useState } from 'react';

export default function MemeGenerator() {
  // Meme-Text via controlled Components with State variables´

  var [imageKey, setImageKey] = useState('buzz');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  // fetch(https://api.memegen.link/templates/')
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));

  return (
    <div>
      <h1>REACT MEME GENERATOR</h1>
      <p>This meme generator allows you to create memes and put text on it.</p>
      <p>Please enter your text below:</p>
      <br />
      <label>
        Top Text:{' '}
        <input
          // Controlled Component Top Text: onChange of form element
          onChange={(event) => {
            setTopText(event.currentTarget.value);
          }}
          value={topText}
        />
      </label>
      <br />
      <label>
        Bottom Text:{' '}
        <input
          // Controlled Component Bottom Text: onChange of form element
          onChange={(event) => {
            setBottomText(event.currentTarget.value);
          }}
          value={bottomText}
        />
      </label>
      <br />
      <button
        onClick={() => {
          setImageKey('bender',); // Button to click for meme.
          console.log('bender', imageKey);
        }}
      >
        New Meme!
      </button>
      <br />
      <img
        // Show an image with the inserted text on it.
        src={`https://api.memegen.link/images/${imageKey}/${topText}/${bottomText}.png`}
        alt=" "
      />
      <br />
    </div>
  );
}
