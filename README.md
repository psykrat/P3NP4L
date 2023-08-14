# P3NP4L: Pentester Assistant

```
 ____       __      __  __      ____     __ __       __        
/\  _`\   /'__`\   /\ \/\ \    /\  _`\  /\ \\ \     /\ \       
\ \ \L\ \/\_\L\ \  \ \ `\\ \   \ \ \L\ \\ \ \\ \    \ \ \      
 \ \ ,__/\/_/_\_<_  \ \ , ` \   \ \ ,__/ \ \ \\ \_   \ \ \  __ 
  \ \ \/   /\ \L\ \  \ \ \`\ \   \ \ \/   \ \__ ,__\  \ \ \L\ \
   \ \_\   \ \____/   \ \_\ \_\   \ \_\    \/_/\_\_/   \ \____/
    \/_/    \/___/     \/_/\/_/    \/_/       \/_/      \/___/ 
```                   

P3NP4L is a web-based tool designed for cybersecurity enthusiasts, especially pentesters. Leverage the power of GPT-3 to ask any pentesting-related questions and get instant answers.

## Features:
- Terminal-like UI for nostalgic feels.
- Quick and efficient GPT-3 backed responses.
- Easy and straightforward interface for immediate queries.

## Quickstart:

1. **Installation**
    ```bash
    git clone https://github.com/psykrat/p3np4l.git
    cd p3np4l
    npm install
    ```

2. **Environment Variables**

    Create a `.env` file in your root directory and add the following:

    ```bash
    OPENAI_API_KEY=your_openai_api_key
    PORT=3000  # Or any preferred port
    ```

3. **Run the App**
    ```bash
    npm start
    ```

    Navigate to `http://localhost:3000` in your browser.

## Directory Structure:
```
.
|-- public
|   |-- index.html
|   |-- script.js
|   `-- style.css
|-- server.js
`-- package.json
```

## Contribution:
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Dependencies:
- [express](https://www.npmjs.com/package/express): Web server framework.
- [axios](https://www.npmjs.com/package/axios): Promise based HTTP client for the browser and node.js.
- [body-parser](https://www.npmjs.com/package/body-parser): Body parsing middleware.
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from `.env`.

## License:
ISC License. Check `LICENSE` file for more information.

## Feedback:
If you have any feedback or feature requests, feel free to open an issue. We appreciate your contribution!

*Note: Please use this tool responsibly and ethically. We are not responsible for any misuse or harm caused.*

---

_Made with 💚 by [Psykrat](https://github.com/psykrat)_
