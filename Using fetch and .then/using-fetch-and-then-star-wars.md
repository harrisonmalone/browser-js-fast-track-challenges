## Fetch, Promises and CSS

### Where are we at with these concepts?
- Interacting with APIs
- Requests and responses
- Writing basic HTML, CSS and JavaScript and how it all links together

### API recap

Think of an API as something that's part of a remote server (where code is deployed) that receives requests and sends back responses 🔙.

Requests are sent from a client (from a browser) when you load a page.

Responses are usually sent in JSON format (they can also be sent in text, HTML etc but don't worry about that) which is just a standardized way of structuring data. JSON is just data. 

Dependent on the request the client sends we get back certain data (from the API) in JSON format.

### So how do we get the JSON

To access JSON data through an API we're going to use JavaScript. 

The best way to do this is to use two JavaScript methods `fetch` and `.then` which return promises.

Promises are quite a big complicated concept in JavaScript and it took me a while to wrap my head around them.

Javascript and methods like `fetch` and `.then` execute asynchronously which is different to other programming languages like Ruby.

Asynchronous means that code is not executed line by line (thats synchronous). Asynchronous code is executed when it's ready. 

So what `fetch` does is it sends a request to an API and says 

> hey give me this data as a response 

but we don't know when we'll get this response, it could take 1 second or 10 seconds; it depends on the remote server you're dealing with and how much data you're getting back (if it's craploads it will be slower).

`fetch` only returns something when it's ready to do so (when it gets the data) and this is done through a promise object.

Go to the [Mozilla docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) for a perfect one line explanation of a promise.

With a promise object we prevent the blocking of executing our other code while it reaches out over the internet to get some data. We don’t have to deal with adding the promise to the way `fetch` runs - a promise is returned from `fetch` as a default.

Once we have the first promise object from `fetch` we can then use `.then` to handle our response. `.then` is kind of like it's name; once something happens then do something else.

So if the response in successful in `fetch` we ask `.then` to please extract JSON from the response body. We'll see how to do this later.

Remember too that `.then` also gives us a promise object by default.

### And once we have the JSON

With the JSON data we wanted we can then render it as HTML using JavaScript, and then use CSS to style everything.

In this case we're going use CSS Flexbox which is a great tool for responsiveness. I'll cover flex box in brief but please refer to [the docs](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for further guidance.

### Code along

Feel free to code along 👩‍💻.

### Challenge 

To get more accustom with using `fetch`, `.then` and flex box recreate the same layout using the [Star Wars API](https://swapi.co/api/people/).

I want to have each Star Wars character's name, height and birth year represented in a card; using flex box to make everything look nice 🌈.

![](https://media.giphy.com/media/8L0PkS1DfGAGjKATmH/giphy.gif)

### Resources
- [Pokemon API](https://pokeapi.co/api/v2/pokemon/)
- [.json()](https://developer.mozilla.org/en-US/docs/Web/API/Body/json)
- [FastTrack JavaScript challenges](https://github.com/harrisonmalone/js-challenges)