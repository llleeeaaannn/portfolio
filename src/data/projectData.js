const template = {
  name: "",
  type: "",
  shortDescription: "",
  longDescription: "",
  technologies: ["", "", ""],
  goals: ["", "", ""],
  general: ["", "", ""],
  technical: ["", "", ""],
  todo: ["", "", ""],
  link: "",
  live: "",
  github: "",
  image: "",
  largeImage: ""
}

const stockleData = {
  name: 'Stockle',
  type: 'Personal Project',
  shortDescription: 'A Wordle-like game with over 500 weekly users which uses stock tickers instead of words. A Wordle-like game with over 500 weekly users which uses stock tickers instead of words.',
  longDescription: 'Stockle is a static, client-side only web application built on vanilla Javascript, HTML and CSS. Stockle was built to function almost identically to the popular game Wordle. Wordle is a web-based word game. Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position. Wordle has a single daily solution, with all players attempting to guess the same word. Stockle relies on the same concept but rather than using any five-letter word the potential answers are stock tickers of various lengths and the UI and game logic dynamically adjusts to the ticker length of the day. The purpose of Stockle is to allow financial market participants and enthusiats to play a fun and mentally stimulating stock related game which also exposes them to new stocks and companies they were otherwise unaware of.',
  technologies: ['Javscript', 'HTML', 'CSS', 'Cloudflare'],
  goals: ["From its inception I was an avid user of the popular word based game, Wordle. Myself and my friends played it everyday without fail. Upon the game being sold to the New York Times, a friend asked me would it have been expensive or difficult to develop. I explained that although the idea and implementation were fantastic, it was a relatively simple static site with even the future daily answers pre-loaded.", "This discussion gave me the idea to develop my own version of Wordle. I am very passionate about finance and am active in many investment communities online. I therefore decided to build a version of Wordle which would use stock tickers rather than 5 letter words.", "My goals for this project were to design and implement a lightweight static web application with all of the features provided by the original Wordle. The application would have further logic built on top of tjhe original features owing to the use of stock tickers of various lengths (in comparison to Worlde where all answers are 5 letters long). Furthermore, I wanted the styling of Stockle to be identical to that of Wordle in order to bring a familiarity."],
  general: ["Stockle was built to function almost identically to the popular game Wordle.", "Wordle is a web-based word game. Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position. Wordle has a single daily solution, with all players attempting to guess the same word.", "Stockle relies on the same concept but rather than using any five-letter word the potential answers are stock tickers of various lengths. Due to the changing lengths of the daily answers, the user interface and game logic dynamically adjusts to the ticker length of the day.", "The purpose of Stockle is to allow financial market participants and enthusiats to play a fun and mentally stimulating stock related game which also exposes them to new stocks and companies they were otherwise unaware of."],
  technical: ["Stockle is a static, client-side only web application built on vanilla Javascript, HTML and CSS.", "Owing to its static nature, eahc of the daily answers for the next year are hard coded into the application, similarily to Worlde.", "The applciation uses the date-fns package to identify the date in the user's timezone which is then used to select the ticker of the day, which we colloquially refer to as the Stockle.", "A dynamic user interface and game logic which adapts the number of guess squares depending on the ticker of the day.", "Stockle features Dark and Light Mode alongside a High Contrast Mode for those with visual impairments. Users theme preference is stored in their browser's Local Storage allowing Stockle present it by default on future visits.", "Statistic tracking, including wins, games played, results and win streak, are stored in the browser's local storage allowing tracking of user's scores without necessitating a cumbersome login which could negatively influence user adoption and is unnecessary for such simple game.", "After each game the user can 'Share' their result through the application generated and formatted text."],
  todo: ["Implement more detailed statistic tracking than exists on Stockle (or Wordle), including tracking of users' most guessed letters, tickers and other trends.", "Identify an API which provides a suitable list of all current US stock tickers which can be called to replace the static list currently used and remove the necessity for frequent updates to the tickers"],
  link: '/stockle',
  live: 'https://www.stockle.org/',
  github: 'https://github.com/llleeeaaannn/stockle',
  image: "/images/stockle/stockleOverviewImage.png",
  largeImage: "/images/stockle/stockleLargeImage.png",
  screenshots: ["/images/stockle/stockleUI1.png", "/images/stockle/stockleUI2.png", "/images/stockle/stockleUI3.png"]
}

// Add hard mode as feature

const spotlistData = {
  name: 'Spotlist',
  type: 'Full Stack Application',
  shortDescription: "A Full-Stack Progressive Web Application which transforms concert setlists into Spotify Playlists within the user’s account. Built upon the React framework with a Node backend developed with Express.js and hosted on an AWS EC2 Instance.",
  longDescription: "Spotlist is a full stack application allowing users to automated the creation of playlists in their Spotify account from a setlist.fm setlist. Spotlist's frontend is built in Javascript on the React framework. Spotlist's backend is a Node.js server built on the Express framework, hosted on an AWS EC2 instance and accessed through AWS's API Gateway. The server persists through the use of Screen, a Linux terminal multiplexer. The purpose of Spotlist is to allow concert goers, in 3 clicks, to effortlessly create a playlist in their Spotify account with every song from the setlist of their choice.",
  technologies: ['React', 'Express', 'Javscript', 'HTML', 'CSS', 'CSS Modules', 'AWS EC2', 'AWS API Gateway', 'Screen', 'Cloudflare'],
  goals: ["As somebody who goes to many concerts, I always like to find the artist's setlist and listen to it so I know all the songs they'll play. To do this I use setlist.fm, a site with user generated concert setlists, to find the latest setlist and then I manually add each song to a Spotify playlist. This allows me to play the setlist, in order, whenever is convenient to me.", "Although this technique works for me, it is quite cumbersome. I'm forced to check next song name in the setlist.fm tab on my browser, switch to the Spotify app, search for the song, add it to the playlist and rinse and repeat.", "With most setlists being upwards of 20 songs, this can take me over 10 minutes each time. I decided to save myself 10 minutes and instead spend days developing a web application which would automate the entire process", "My aim was to build a lightweight Progressive Web App which could be installed on users' devices. The application would connect to the user's Spotify account and accept a setlist.fm setlist link. The application would call setlist.fm's REST API to retrieve setlist data including artist, songs, date, location... Said data would then be converted to a format accepted by Spotify's API. A Spotify playlist would be created in the user's account with each song added sequentially", "Finally a link to the playlist would be returned to the user, while the playlist will also be present in the user's Spotify account. Information on songs which could not be added to the playlist, due to not being on Spotify or other reasons, should also be returned to the user."],
  general: ["Spotlist is a full stack application which creates playlists in a user's Spotify account from a setlist.fm setlist.", "Spotlist's frontend is built in Javascript on the React framework.", "Spotlist's backend is a Node.js server built on the Express framework, hosted on an AWS EC2 instance and accessed through AWS's API Gateway. The server persists through the use of Screen, a Linux terminal multiplexer. ", "The purpose of Spotlist is to allow concert goers, in 3 clicks, to effortlessly create a playlist in their Spotify account with every song from the setlist of their choice."],
  technical: ["Spotlist is a Full-Stack Progressive Web Application.",
  "The frontend is built on the React framework and availing of the React Router DOM library to enable routing. The application is styled through vanilla CSS with the use of CSS Modules allowing code seperation, preventing namespace collision alongside improving readability and maintainability",
  "Spotlist's frontend is hosted on Cloudflare Pages with a custom domain and avails of Cloudflare analytics.",
  "Spotlist has a Node.js backend built on the Express.js framework. The backend has two main purposes.", "Firstly, it is used to authorise the user's Spotify account. This is achieved by requesting a login URL from Spotify and returning it to the client upon which the user is redirected to Spotify's login page to authorise the app. Upon successful autorisation, the Express.js server requests an access token from Spotify which is valid for 30 minutes and is used for subsequent requests to Spotify's API until it expires.",
  "Following authorisation, the backend is also called when the user attempts to create a playlist. The 'setlist' route receives a HTTP request including a setlist ID and a Spotify Access token. The setlist.fm REST API is called to retrieve a response containing the necessary data on the user's chosen setlist. The data is then parsed and numerous methods are called to convert the data into the required format. The Spotify API's Search endpoint is called to reteive a unique URI for each track. Tracks which weren't found on Spotify are added to an object to be returned to the client alongside the playlist. Finally the playlist is created througha POST request to and populated with each track (through their respective URI). The Node.js backend return a link to the playlist alongside other relevant data to the client.",
  "The backend is hosted on an AWS EC2 Instance running Linus and persists through the use of Screen GNU. It is accessed through an AWS API Gateaway",
  "Spotlist's frontend and backend feature comprehensive error handling which produce simple and clean error messages for the user.",
  "The entire application is extremely light and scores 100% in each of the metrics in Google's Lighthouse Report. It is also a certified Progressive Web Application allowing the application to be downloaded onto a user's device and function similar to a native app."],
  todo: ["Add option for covers on a setlist to be included in the generated playlist.", "Add support for Apple Music and other streaming services."],
  link: '/spotlist',
  live: 'https://www.spotlist.net/',
  github: 'https://github.com/llleeeaaannn/spotlist',
  image: "/images/spotlist/spotlistOverviewImage.png",
  largeImage: "/images/spotlist/spotlistLargeImage.png",
  screenshots: ["/images/spotlist/spotlistUI1.png", "/images/spotlist/spotlistUI2.png", "/images/spotlist/spotlistUI3.png"]
}

const optioncentData = {
  name: 'Optioncent',
  type: 'Personal Project',
  shortDescription: "A React web application which displays stock option prices as a percentage of their underlying asset's value providing traders an objective and data focused perspective on their investment strategies.",
  longDescription: "Optioncent is a responsive web application built on the React framework with Javascript, HTML and CSS. Optioncent is a web-based word game. Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position. Wordle has a single daily solution, with all players attempting to guess the same word. Stockle relies on the Tradier API for its live option pricing data and custom calculations for determining the value of option contracts in relation to the value of their underlying assets. The purpose of Optioncent is to provide financial market participants, particularly retail traders, with an objective perspective on the value of the financial derivatives they are trading. Rather than displaying live prices in dollars, the call and put prices are provided as a percentage of the value of basket of underlying assets that they represent. This prevents users from being deceived by arbitrarily high (or low) values and to instead view the value of these derivatives as a derivative of the stocks or funds they represent. We hope that alongside delivering our users with the data necessary to view option prices in relation to their underlying. Optioncent also imparts a change in perspective to our users allowing them to more critically evaluate their investment decisions.",
  technologies: ['React', 'Javscript', 'HTML', 'CSS', 'Tailwind', 'Tradier API', 'Cloudflare'],
  goals: [],
  general: [],
  technical: [],
  todo: [],
  link: '/optioncent',
  live: 'https://www.optioncent.com/',
  github: 'https://github.com/llleeeaaannn/optioncent',
  image: "/images/optioncent/optioncentOverviewImage.png",
  largeImage: "/images/optioncent/optioncentLargeImage.png",
  screenshots: []
}

export { template, stockleData, spotlistData, optioncentData }

// Add tehcnical summary info and usage
// Remove screenshots section and add "For more images see github..."
