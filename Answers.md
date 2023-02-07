# Answers

[GitHub repo](https://github.com/MichalK98/HiQ-it-)

To start the porject run `npm i` and `npm start` in both frontend and backend. Read all README.md files for more information.

## How long time did you end up spending on this coding test?

I spended roughly 10h on this HiQ it! project.

## Explain why you chose the code structure(s) you used in your solution.

In this project I mainly focused on Frontend. For a project this small I wouldn't split my code into a file structure like this. Since this is a code test and my oppurtuinty to show off my 'best' attempt I diecided to split everything into smaller components to make it easier to scale up the project for the future needs. My react components are split into different folders. `components`, `layouts`, `pages`, `partials`. Most of them are self explained however `components` are the main components that will be reused to build a new page. Stuff like buttons, headings, text, link etc. `partials` flder is where I put page `components` like Header, Footer, Sidebar etc.

## What would you add to your solution if you had more time? This question is especially important if you did not spend much time on the coding test - use this as an opportunity to explain what your solution is missing.

I noticed a bug with html-react-parser that made my frontend crash. I quick fixed it using `dangerouslySetInnerHTML` with I normaly wouldn't do. There is anoster frontend bug if you try to select a new file again. The "Submit" button will be already pink. It would also be great to split my backend code some more into a better patern but since there is only "one" request I decided to not do that.

## What did you think of this recruitment test?

It was a fun and not too that difficult project. I could easyly spend some hours split over couple of evenings and it was easy to find a good stopping point.
