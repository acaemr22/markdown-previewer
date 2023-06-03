import { marked } from "marked";
import { useState, useEffect } from 'https://esm.sh/react@18.2.0'
import ReactDOM from 'https://esm.sh/react-dom@18.2.0'



function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.google.com)
  ![image](image.jpg)
  \`console.log("")\`
  \`\`\`
  console.log()
  \`\`\`
  - First item
  > blockquote
  **bold text**

  `);

  marked.setOptions({
    breaks: true
  })
  

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked.parse(
      document.querySelector("textarea").innerHTML
    ).replace(/&gt;/g, '<blockquote></blockquote>').replace(/\\r/g, '<br>');
  });

  return (
    <div className="App">
      <div id="markdown-wrapper">
        <div id="editor-title" class="toolbar">
          <span>
            <i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i> Editor
          </span>
          <i class="fa fa-arrows-alt"></i>
        </div>
        <textarea
          name="editor"
          onChange={handleChange}
          value={text}
          id="editor"
          class=""
        ></textarea>
      </div>

      <div id="previewer">
        <div className="previewer-title toolbar">
          <span>
            <i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i>{" "}
            Previewer
          </span>
          <i class="fa fa-arrows-alt"></i>
        </div>
        <div id="preview"></div>
      </div>
    </div>
  );
}



ReactDOM.render(<App/>, document.querySelector("#root"))


