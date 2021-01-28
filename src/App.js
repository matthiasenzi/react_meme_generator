import { useState } from 'react';

export default function MemeGenerator() {
  // Meme-Text via controlled Components with State variables
  const [topText, settopText] = useState('');
  const [bottomText, setbottomText] = useState('');

  return (
    <div>
      <h1>REACT MEME GENERATOR</h1>
      <p>This meme generator allows you to create memes and put text on it.</p>
      <p>Please enter your text below:</p>
      <label>
        Top Text:{' '}
        <input
          // Controlled Component Top Text: onChange of form element
          onChange={(event) => {
            settopText(event.currentTarget.value);
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
            setbottomText(event.currentTarget.value);
          }}
          value={bottomText}
        />
      </label>
      <h2>Text Preview</h2>
      <b>Top Text:</b> {topText}
      <br />
      <b>Bottom Text:</b> {bottomText}
      <br />
    </div>
  );
}
