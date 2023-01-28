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
  largeImage: "",
  screenshots: []
}

const stockleData = {
  name: 'Stockle',
  type: 'Personal Project',
  shortDescription: "A Wordle-like game with over 500 weekly users which uses stock tickers instead of words. Stockle is a static, client-side only web application built on vanilla Javascript, HTML and CSS.",
  longDescription: "Stockle is a static, client-side-only web application built on vanilla Javascript, HTML, CSS and SCSS. Stockle was built to function almost identically to the popular game Wordle. Wordle is a web-based word game. Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of coloured tiles indicating when letters match or occupy the correct position. Wordle has a single daily solution, with all players attempting to guess the same word. Stockle relies on the same concept but rather than using any five-letter word the potential answers are stock tickers of various lengths and the UI and game logic dynamically adjust to the ticker length of the day. The purpose of Stockle is to allow financial market participants and enthusiasts to play a fun and mentally stimulating stock market related game which also exposes them to new stocks and companies they were otherwise unaware of.",
  technologies: ['Javascript', 'HTML', 'CSS', 'SCSS', 'Webpack', 'Cloudflare'],
  goals: ["From its release, I was an avid user of the popular word-based game, Wordle. My friends and I played it every day without fail. Upon the game being sold to the New York Times, a friend asked me would it have been expensive or difficult to develop. I explained that although the idea and implementation were fantastic, it was a relatively simple static site with even the future daily answers pre-loaded.", "This discussion gave me the idea to develop my own version of Wordle. I am very passionate about finance and am active in many investment communities online. I, therefore, decided to build a version of Wordle which would use stock tickers rather than 5 letter words.", "My goals for this project were to design and implement a lightweight static web application with all of the features provided by the original Wordle. The application would have further logic built on top of the original features owing to the use of stock tickers of various lengths (in comparison to Worlde where all answers are 5 letters long). Furthermore, I wanted the styling of Stockle to be identical to that of Wordle to bring a sense of familiarity."],
  general: ["Stockle was built to function almost identically to the popular game Wordle.", "Wordle is a web-based word game. Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of coloured tiles indicating when letters match or occupy the correct position. Wordle has a single daily solution, with all players attempting to guess the same word.", "Stockle relies on the same concept but rather than using any five-letter word the potential answers are stock tickers of various lengths. Due to the changing lengths of the daily answers, the user interface and game logic dynamically adjusts to the ticker length of the day.", "The purpose of Stockle is to allow financial market participants and enthusiasts to play a fun and mentally stimulating stock market related game which also exposes them to new stocks and companies they were otherwise unaware of."],
  technical: ["Stockle is a static, client-side only web application built on vanilla Javascript, HTML and CSS.", "Owing to its static nature, each of the daily answers for the next year are hard coded into the application, similarily to Worlde.", "The application uses the date-fns package to identify the date in the user's timezone which is then used to select the ticker of the day, which we colloquially refer to as the Stockle.", "A dynamic user interface and game logic which adapts the number of guess squares depending on the ticker of the day.", "Stockle features Dark and Light Mode alongside a High Contrast Mode for those with visual impairments. Users' theme preference is stored in their browser's Local Storage allowing Stockle to present it by default on future visits.", "Statistic tracking, including wins, games played, results and win streak, are stored in the browser's local storage allowing tracking of user's scores without necessitating a cumbersome login which could negatively influence user adoption and is unnecessary for such simple game.", "After each game, the user can 'Share' their result through the application generated and formatted text."],
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
  shortDescription: "A Full-Stack Progressive Web Application which leverages multiple APIs to transform concert setlists into Spotify Playlists within the user’s account. Built upon the React framework with a Node backend developed with Express.js and hosted on an AWS EC2 Instance.",
  longDescription: "Spotlist is a full stack application allowing users to automate the creation of playlists in their Spotify account from a setlist.fm setlist. Spotlist's front end is built in Javascript on the React framework. Spotlist's backend is a Node.js server built on the Express framework, hosted on an AWS EC2 instance and accessed through AWS's API Gateway. The server persists through the use of Screen, a Linux terminal multiplexer. The purpose of Spotlist is to allow concertgoers, in 3 clicks, to effortlessly create a playlist in their Spotify account with every song from the setlist of their choice.",
  technologies: ['React', 'Express', 'Javascript', 'HTML', 'CSS', 'CSS Modules', 'AWS EC2', 'AWS API Gateway', 'Screen', 'Cloudflare'],
  goals: ["As somebody who goes to many concerts, I always like to find the artist's setlist and listen to it so I know all the songs they'll play. To do this I use setlist.fm, a site with user-generated concert setlists, to find the latest setlist and then I manually add each song to a Spotify playlist. This allows me to play the setlist, in order, whenever is convenient to me.", "Although this technique works for me, it is quite cumbersome. I'm forced to check the next song name in the setlist.fm tab on my browser, switch to the Spotify app, search for the song, add it to the playlist and rinse and repeat.", "With most setlists being upwards of 20 songs, this can take me over 10 minutes each time. I decided to save myself 10 minutes and instead spend days developing a web application which would automate the entire process", "I aimed to build a lightweight Progressive Web App which could be installed on users' devices. The application would connect to the user's Spotify account and accept a setlist.fm setlist link. The application would call setlist.fm's REST API to retrieve setlist data including artist, songs, date, location... Said data would then be converted to a format accepted by Spotify's API. A Spotify playlist would be created in the user's account with each song added sequentially", "Finally a link to the playlist would be returned to the user, while the playlist will also be present in the user's Spotify account. Information on songs which could not be added to the playlist, due to not being on Spotify or other reasons, should also be returned to the user."],
  general: ["Spotlist is a full stack application which creates playlists in a user's Spotify account from a setlist.fm setlist.", "The purpose of Spotlist is to allow concertgoers, in 3 clicks, to effortlessly create a playlist in their Spotify account with every song from the setlist of their choice.", "To create a playlist, all you need to do is go to setlist.fm, find a setlist you like, copy the URL and paste it into Spotlist. We look after the rest."],
  technical: ["Spotlist is a Full-Stack Progressive Web Application.",
  "The front end is built on the React framework and availing of the React Router DOM library to enable routing. The application is styled through vanilla CSS with the use of CSS Modules allowing code separation, preventing namespace collision alongside improving readability and maintainability. Spotlist's frontend is hosted on Cloudflare Pages with a custom domain and avails of Cloudflare analytics.",
  "Spotlist has a Node.js backend built on the Express.js framework. The backend has two main purposes.", "Firstly, it is used to authorise the user's Spotify account. This is achieved by requesting a login URL from Spotify and returning it to the client upon which the user is redirected to Spotify's login page to authorise the app. Upon successful authorisation, the Express.js server requests an access token from Spotify which is valid for 30 minutes and is used for subsequent requests to Spotify's API until it expires.",
  "Following authorisation, the backend is also called when the user attempts to create a playlist. The 'setlist' route receives a HTTP request including a setlist ID and a Spotify Access token. The setlist.fm REST API is called to retrieve a response containing the necessary data on the user's chosen setlist. The data is then parsed and numerous methods are called to convert the data into the required format. The Spotify API's Search endpoint is called to retrieve a unique URI for each track. Tracks which weren't found on Spotify are added to an object to be returned to the client alongside the playlist. Finally, the playlist is created through a POST request and populated with each track (through their respective URI). The Node.js backend returns a link to the playlist alongside other relevant data to the client.",
  "The backend is hosted on an AWS EC2 Instance running Linux and persists through the use of Screen GNU. It is accessed through an AWS API Gateway.",
  "Spotlist's frontend and backend feature comprehensive error handling which produce simple and clean error messages for the user.",
  "The entire application is optimised to be lightweight and scores 100% in each of the metrics in Google's Lighthouse Report. It is also a certified Progressive Web Application allowing the application to be downloaded onto a user's device and function similar to a native app."],
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
  shortDescription: "A React Web Application which displays stock option prices as a percentage of their underlying asset's value providing traders an objective and data-focused perspective on their investment strategies.",
  longDescription: "A React Web Application which displays stock option prices as a percentage of their underlying asset's value providing traders an objective and data-focused perspective on their investment strategies.",
  technologies: ['React', 'Javascript', 'HTML', 'CSS', 'Tailwind', 'Chart.js', 'Tradier API', 'Cloudflare'],
  goals: ["Optioncent was conceived and developed with the purpose of altering investors' mindset when trading stock options.", "Options are derivatives of equities/stocks and therefore are reliant on the underlying value of their associated equity.", "As an investor, and active participant in many online investing communities and forums, I witnessed first-hand the intrinsic biases which seep into ", "The primary issue emerges from investors viewing the value of an option as absolute rather than relative to the underlying equities it represents.", "As an example, investors will view a $50 at-the-money call option on an equity with an underlying value of $5,000 as cheap whereas a $750 at-the-money call option on an equity with an underlying value of $100,000 will be considered expensive. This is in spite of the 'cheap' option costing 1% of its underlying's value whereas the 'expensive' call only costs 0.75%", "As a disclaimer, I note that option pricing is far more complex and nuanced than outlined above and relies on a strong grasp of the Black Scholes formula alongside option greeks.", "Nevertheless Optioncent aims to remediate the abovementioned fallacy by solely displaying option prices as a percentage of their underlying asset's value. I believe this allows investors to form objective opinions and decisions relying on data rather than inherent, though inevitable, biases."],
  general: ["Optioncent is a web application which yields stock option prices as a percentage of the value of the  underlying asset they derive from.", "Investors can simply search for an equity of their choice (by its stock ticker) and will be presented with a list of all its associated options expiration dates in chronological order. By default, the option chain of the closest expiry will be presented to the user.", "Optioncent displays 4 values for each option: Bid, Mid, Ask & Spread.", "The bid, mid and ask values are displayed as a percentage of the underlying asset, while the spread takes the difference between the bid and ask and displays it as a percentage of the underlying asset.", "Users can toggle between option chains for each expiration date simply by clicking the expiry of their choice", "Furthermore, Optioncent provides investors with further data on each option which can be viewed in a popup by clicking on the option of choice. The popup displays the option price in both relative terms as a percentage alongside the absolute dollar value. Other information is conveyed including volume, open interest and values for each of the greeks.", "Where historical pricing data is available, a chart will be displayed in the popup with a green or red theme denoting the performance during the displayed timeline."],
  technical: ["Optioncent is a React application built with Javascript and styled with Tailwind CSS alongside vanilla CSS.", "The application builds upon the Tradier API to provide data (both real-time and 15-minute delayed) to its users.", "Charting of historical option prices is undertaken with Chart.js, a Javascript library for data visualisation"],
  todo: ["Add a light theme to the appication", "Add options for users to customise the data displayed to them"],
  link: '/optioncent',
  live: 'https://www.optioncent.com/',
  github: 'https://github.com/llleeeaaannn/optioncent',
  image: "/images/optioncent/optioncentOverviewImage.png",
  largeImage: "/images/optioncent/optioncentLargeImage.png",
  screenshots: ["/images/optioncent/optioncentUI1.png", "/images/optioncent/optioncentUI2.png", "/images/optioncent/optioncentUI3.png"]
}

const medicleData = {
  name: "Medicle",
  type: "",
  shortDescription: "",
  longDescription: "",
  technologies: ["", "", ""],
  goals: ["", "", ""],
  general: ["", "", ""],
  technical: ["", "", ""],
  todo: ["", "", ""],
  link: "",
  live: "https://www.medicle.net/",
  github: "https://github.com/llleeeaaannn/medicle",
  image: "",
  largeImage: "",
  screenshots: []
}

export { stockleData, spotlistData, optioncentData, medicleData }

// Add tehcnical summary info and usage
