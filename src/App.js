import { useState } from "react";
import { marked } from "marked";
import './App.css';

// a header (H1 size), a sub header (H2 size), a link, 
// inline code, a code block, a list item, 
// a blockquote, an image, and bolded text

function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://github.com/)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\` 

  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](image.jpg)

  **bold text**

  `);

  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      <div className="wrapper">

        <div className="box-content">
          <div className="box-editor">
            <header className="header"><span class="material-symbols-outlined">
dataset
</span>Editor</header>
            <textarea id="editor" onChange={(event) => {
              setText(event.target.value)
            }}
              value={text}
            >
            </textarea>
          </div>
        </div>

        <div className="box-content">
          <div className="box-preview">
            <header className="header"><span class="material-symbols-outlined">
dataset
</span>Previewer</header>
            <div
              id="preview"
              dangerouslySetInnerHTML={{
                __html: marked(text),
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
