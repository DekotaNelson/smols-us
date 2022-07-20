# Smols Us 
Sometimes you need a small url. No matter the reason you need that url to be small, you need it to be reliable, consistent, and preferably without being drowned in advertisements while you're at it. Well do I have the solution for you! The Smols Us web app does exactly that!  All one has to do is enter the full length url, hit the button, and just like that it 'smols' it for you! Now go forth and smols all of your urls as the best url is a smols one.

Link to live demo of project: http://thought-exchanger.herokuapp.com/

# How It's Made:
Tech used: JavaScript, Node, Express, MongoDB, Heroku, CRUD, HTML, and CSS

I've created a full stack application that allows users input a url and recieve a unique smols url. When this smols url is called upon, the app redirects the user to the inputted url matched with that unique smols url. This is all accomplished via Node, Express, MongoDB and CRUD opertaions. When a user inputs a long url to be shortened, the server api posts it to the database with a unique key that identifies that particular long url. This key is simply one or more characters that when the server receives a request with that key as the extension, the server than connects to the database does a search for the provided key, then redirects the user's browser to the url that is paired with that key. 

# Lessons Learned:
This project allowed the oppritunity to dive deeper into Node, Express, MongoDB, and CRUD in general. From solving new server-side problems all the way to optimizing front-end CRUD/API usage, this project provided many great chances for me to learn and grow. This is why I enjoyed this project so much as it allowed expolration and trying new things in these technologies.

# Other Projects:
Feel free to explore other projects I've worked on:

Meme Break, for your next coffee break: https://github.com/DekotaNelson/meme-break

Thought Exchanger for finding and sharing thoughts: https://github.com/DekotaNelson/thought-exchanger

Ingredient Checker for Vegans/Vegetarians: https://github.com/DekotaNelson/dietary-product-look-up
