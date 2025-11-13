const questions = [
      { question: "What does HTML stand for?", options: ["Hyper Trainer Marking Language", "Hyper Text Marketing Language", "Hyper Text Markup Language", "Hyper Text Mark Language"], answer: 2 },
      { question: "Which HTML tag is used to define an internal style sheet?", options: ["&lt;css&gt;", "&lt;script&gt;", "&lt;style&gt;", "&lt;link&gt;"], answer: 2 },
      { question: "Which tag is used to create a hyperlink in HTML?", options: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;", "&lt;hyperlink&gt;"], answer: 1 },
      { question: "What is the correct HTML element for inserting a line break?", options: ["&lt;break&gt;", "&lt;br&gt;", "&lt;lb&gt;", "&lt;line&gt;"], answer: 1 },
      { question: "Which tag is used to display an image?", options: ["&lt;pic&gt;", "&lt;img&gt;", "&lt;image&gt;", "&lt;src&gt;"], answer: 1 },
      { question: "Which attribute is used to provide alternative text for an image?", options: ["alt", "title", "src", "href"], answer: 0 },
      { question: "Which HTML element is used to define a table row?", options: ["&lt;td&gt;", "&lt;tr&gt;", "&lt;th&gt;", "&lt;table&gt;"], answer: 1 },
      { question: "What is the correct HTML element for the largest heading?", options: ["&lt;h6&gt;", "&lt;heading&gt;", "&lt;h1&gt;", "&lt;head&gt;"], answer: 2 },
      { question: "Which attribute is used to define inline styles?", options: ["font", "class", "style", "styles"], answer: 2 },
      { question: "Which tag is used to create a checkbox in a form?", options: ["&lt;box&gt;", "&lt;input type='check'&gt;", "&lt;input type='checkbox'&gt;", "&lt;check&gt;"], answer: 2 },
      { question: "How can you make a numbered list in HTML?", options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"], answer: 1 },
      { question: "Which tag is used to define a list item?", options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"], answer: 2 },
      { question: "Which HTML element is used to specify a footer for a document or section?", options: ["&lt;bottom&gt;", "&lt;section-footer&gt;", "&lt;footer&gt;", "&lt;foot&gt;"], answer: 2 },
      { question: "Correct way to create a text input field?", options: ["&lt;input type='text'&gt;", "&lt;textfield&gt;", "&lt;textinput&gt;", "&lt;input text&gt;"], answer: 0 },
      { question: "Which tag is used to define a division or section?", options: ["&lt;div&gt;", "&lt;span&gt;", "&lt;section&gt;", "&lt;area&gt;"], answer: 0 },
      { question: "What does the href attribute specify?", options: ["Font", "Hyperlink reference", "Height", "Alt text"], answer: 1 },
      { question: "Which HTML tag is used to define a table cell?", options: ["&lt;row&gt;", "&lt;td&gt;", "&lt;th&gt;", "&lt;tr&gt;"], answer: 1 },
      { question: "Attribute to open a link in new tab?", options: ["open='new'", "target='_blank'", "new='tab'", "blank='true'"], answer: 1 },
      { question: "HTML tag for unordered list?", options: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;", "&lt;list&gt;"], answer: 1 },
      { question: "Tag for embedding JavaScript?", options: ["&lt;js&gt;", "&lt;javascript&gt;", "&lt;script&gt;", "&lt;code&gt;"], answer: 2 },
      { question: "Attribute to define width of an image?", options: ["size", "length", "width", "alt"], answer: 2 },
      { question: "How to set background color?", options: ["&lt;body bg='color'&gt;", "&lt;background&gt;", "&lt;style&gt;", "&lt;body style='background-color:color;'&gt;"], answer: 3 },
      { question: "Tag for dropdown list?", options: ["&lt;input type='dropdown'&gt;", "&lt;dropdown&gt;", "&lt;select&gt;", "&lt;option&gt;"], answer: 2 },
      { question: "Purpose of &lt;title&gt; tag?", options: ["Display heading", "Browser tab title", "Bold text", "Logo"], answer: 1 },
      { question: "Element for audio files?", options: ["&lt;audio&gt;", "&lt;media&gt;", "&lt;sound&gt;", "&lt;mp3&gt;"], answer: 0 },
      { question: "Tag for emphasized text?", options: ["&lt;strong&gt;", "&lt;bold&gt;", "&lt;em&gt;", "&lt;italic&gt;"], answer: 2 },
      { question: "Create comment in HTML?", options: ["// Comment", "&lt;!-- Comment --&gt;", "/* Comment */", "# Comment"], answer: 1 },
      { question: "Tag for horizontal rule?", options: ["&lt;hr&gt;", "&lt;line&gt;", "&lt;break&gt;", "&lt;bar&gt;"], answer: 0 },
      { question: "Correct HTML for image?", options: ["&lt;img src='image.jpg'&gt;", "&lt;image href='image.jpg'&gt;", "&lt;pic src='image.jpg'&gt;", "&lt;img link='image.jpg'&gt;"], answer: 0 },
      { question: "Tag to group inline elements?", options: ["&lt;div&gt;", "&lt;group&gt;", "&lt;section&gt;", "&lt;span&gt;"], answer: 3 },
      { question: "Semantic element for navigation?", options: ["&lt;navigate&gt;", "&lt;nav&gt;", "&lt;navigation&gt;", "&lt;navbar&gt;"], answer: 1 },
      { question: "Which tag defines the body?", options: ["&lt;body&gt;", "&lt;main&gt;", "&lt;head&gt;", "&lt;content&gt;"], answer: 0 },
      { question: "Default alignment of paragraph?", options: ["Right", "Center", "Justify", "Left"], answer: 3 },
      { question: "Make text bold?", options: ["&lt;b&gt;", "&lt;strong&gt;", "Both A and B", "&lt;bold&gt;"], answer: 2 },
      { question: "Which tag is self-closing?", options: ["&lt;div&gt;", "&lt;p&gt;", "&lt;img&gt;", "&lt;section&gt;"], answer: 2 },
      { question: "Purpose of &lt;meta&gt; tag?", options: ["Link", "Metadata", "Page layout", "Images"], answer: 1 },
      { question: "Tag defining structure of a table?", options: ["&lt;tr&gt;", "&lt;td&gt;", "&lt;table&gt;", "&lt;thead&gt;"], answer: 2 },
      { question: "Tag to underline text?", options: ["&lt;underline&gt;", "&lt;u&gt;", "&lt;ul&gt;", "&lt;em&gt;"], answer: 1 },
      { question: "Tag to add video?", options: ["&lt;media&gt;", "&lt;play&gt;", "&lt;video&gt;", "&lt;movie&gt;"], answer: 2 },
      { question: "Join columns in table?", options: ["merge", "colspan", "rowspan", "combine"], answer: 1 },
      { question: "Main content element?", options: ["&lt;main&gt;", "&lt;center&gt;", "&lt;article&gt;", "&lt;body&gt;"], answer: 0 },
      { question: "What does &lt;head&gt; contain?", options: ["Footer", "Page content", "Metadata & title", "Images only"], answer: 2 },
      { question: "Tag to add background image?", options: ["&lt;img background&gt;", "&lt;body background='image.jpg'&gt;", "&lt;background img='image.jpg'&gt;", "&lt;img src='image.jpg' background&gt;"], answer: 1 },
      { question: "Short quotation tag?", options: ["&lt;quote&gt;", "&lt;shortquote&gt;", "&lt;q&gt;", "&lt;blockquote&gt;"], answer: 2 },
      { question: "Not an HTML5 semantic tag?", options: ["&lt;footer&gt;", "&lt;section&gt;", "&lt;article&gt;", "&lt;font&gt;"], answer: 3 },
      { question: "Tag for client-side script?", options: ["&lt;script&gt;", "&lt;code&gt;", "&lt;style&gt;", "&lt;java&gt;"], answer: 0 },
      { question: "Dropdown option tag?", options: ["&lt;select&gt;", "&lt;input&gt;", "&lt;option&gt;", "&lt;dropdown&gt;"], answer: 2 },
      { question: "Unique identifier attribute?", options: ["id", "class", "name", "tag"], answer: 0 },
      { question: "Tag for sidebar content?", options: ["&lt;div&gt;", "&lt;aside&gt;", "&lt;side&gt;", "&lt;section&gt;"], answer: 1 },
      { question: "Tag for form?", options: ["&lt;input&gt;", "&lt;text&gt;", "&lt;form&gt;", "&lt;fieldset&gt;"], answer: 2 }
    ];

    const quizContainer = document.getElementById("quizContainer");

    questions.forEach((q, index) => {
      const qDiv = document.createElement("div");
      qDiv.classList.add("question");
      qDiv.innerHTML = `<p>${index + 1}. ${q.question}</p>`;
      q.options.forEach((opt, i) => {
        qDiv.innerHTML += `
          <label>
            <input type="radio" name="q${index}" value="${i}" required>
            ${String.fromCharCode(65 + i)}. ${opt}
          </label>`;
      });
      quizContainer.appendChild(qDiv);
    });

    document.getElementById("quizForm").addEventListener("submit", function (e) {
      e.preventDefault();
      let score = 0;

      questions.forEach((q, i) => {
        const selected = document.querySelector(`input[name='q${i}']:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
          score += 2;
        }
      });

      const resultDiv = document.getElementById("result");
      const message = score > 60 ? "Congratulations! You Passed!" : "Try again, you can do better.";
      resultDiv.innerHTML = `Total Score: ${score} / ${questions.length * 2} - <span class="${score > 60 ? 'pass' : 'fail'}">${message}</span>`;
      localStorage.setItem("studentResult", `Score: ${score} - ${message}`);
      document.getElementById("storedResult").innerHTML = `<p><strong>Stored Result:</strong> ${localStorage.getItem("studentResult")}</p>`;
    });

    window.addEventListener("load", () => {
      const stored = localStorage.getItem("studentResult");
      if (stored) {
        document.getElementById("storedResult").innerHTML = `<p><strong>Stored Result:</strong> ${stored}</p>`;
      }
    });