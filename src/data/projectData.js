const template = {
  name: '',
  type: '',
  shortDescription: '',
  longDescription: '',
  technologies: ['', '', ''],
  goals: ['', '', ''],
  general: ['', '', ''],
  features: ['', '', ''],
  link: '',
  live: '',
  github: '',
  image: '',
  largeImage: '',
  screenshots: ['', '', '']
}

const stockleData = {
  name: 'Stockle',
  type: 'Personal Project',
  shortDescription: 'A Wordle-like game with over 500 weekly users which uses stock tickers instead of words. A Wordle-like game with over 500 weekly users which uses stock tickers instead of words.',
  longDescription: 'Stockle is a static, client-side only web application built on vanilla Javascript, HTML and CSS. Stockle was built to function almost identically to the popular game Wordle. Wordle is a web-based word game. Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position. Wordle has a single daily solution, with all players attempting to guess the same word. Stockle relies on the same concept but rather than using any five-letter word the potential answers are stock tickers of various lengths and the UI and game logic dynamically adjusts to the ticker length of the day. The purpose of Stockle is to allow financial market participants and enthusiats to play a fun and mentally stimulating stock related game which also exposes them to new stocks and companies they were otherwise unaware of.',
  technologies: ['Javscript', 'HTML', 'CSS', 'Cloudflare'],
  goals: ['This is my first goal', 'This is another goal ahshcjsn n d dih b whushuhdu ahshcjsn n d dih b whushuhdu ahshcjsn n d dih b whushuhdu ahshcjsn n d dih b whushuhdu ahshcjsn n d dih b whushuhdu ahshcjsn n d dih b whushuhdu ', 'This is the last goal paragraphhhhhhhh hhhhhhhhhh hhhhhhhhhhhh hhhhhhhhh'],
  general: ["Stockle is a static, client-side only web application built on vanilla Javascript, HTML and CSS.", "Stockle was built to function almost identically to the popular game Wordle.", "Wordle is a web-based word game. Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position. Wordle has a single daily solution, with all players attempting to guess the same word.", "Stockle relies on the same concept but rather than using any five-letter word the potential answers are stock tickers of various lengths and the UI and game logic dynamically adjusts to the ticker length of the day.", "The purpose of Stockle is to allow financial market participants and enthusiats to play a fun and mentally stimulating stock related game which also exposes them to new stocks and companies they were otherwise unaware of."],
  features: ["A once daily 'Stockle' which is identical for all users who are offered 6 guesses to decipher the ticker.", "A dynamic user interface and game logic which adapts the number of guess squares depending on the ticker of the day.", "Dark and Light Mode alongside a High Contrast Mode for those with visual impairments.", "Statistic tracking stored in the brower's local storage allowing tracking of their scores without necessitating a cumbersome login which could negatively influence user adoption."],
  link: '/stockle',
  live: 'https://www.stockle.org/',
  github: 'https://github.com/llleeeaaannn/stockle',
  image: 'This is the stockle image',
  largeImage: 'This is a wide image',
  screenshots: ['screenshot1', 'screenshot2', 'screenshot3']
}

const spotlistData = {
  name: 'Spotlist',
  type: 'Full Stack Application',
  shortDescription: 'A Progressive Web Application which transforms concert setlists into Spotify Playlists. A Progressive Web Application which transforms concert setlists into Spotify Playlists.',
  longDescription: "Spotlist is a full stack application which creates playlists in a user's Spotify account from a setlist.fm setlist. Spotlist's frontend is built in Javascript on the React framework. Spotlist's backend is a Node.js server built on the Express framework, hosted on an AWS EC2 instance and accessed through AWS's API Gateway. The server persists through the use of Screen, a Linux terminal multiplexer. The purpose of Spotlist is to allow concert goers, in 3 clicks, to effortlessly create a playlist in their Spotify account with every song from the setlist of their choice.",
  technologies: ['React', 'Express', 'Javscript', 'HTML', 'CSS', 'CSS Modules', 'AWS EC2', 'AWS API Gateway', 'Cloudflare'],
  goals: ["", "", ""],
  general: ["", "", ""],
  features: ["", "", ""],
  link: '/spotlist',
  live: 'https://www.spotlist.net/',
  github: 'https://github.com/llleeeaaannn/spotlist',
  image: 'This is the Spotlist image',
  largeImage: '',
  screenshots: ['', '', '']
}

const optioncentData = {
  name: 'Optioncent',
  type: 'Personal Project',
  shortDescription: "A React web application which displays stock option prices as a percentage of their underlying asset's value providing traders an objective and data focused perspective on their investment strategies.",
  longDescription: "Optioncent is a responsive web application built on the React framework with Javascript, HTML and CSS. Optioncent is a web-based word game. Players have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position. Wordle has a single daily solution, with all players attempting to guess the same word. Stockle relies on the Tradier API for its live option pricing data and custom calculations for determining the value of option contracts in relation to the value of their underlying assets. The purpose of Optioncent is to provide financial market participants, particularly retail traders, with an objective perspective on the value of the financial derivatives they are trading. Rather than displaying live prices in dollars, the call and put prices are provided as a percentage of the value of basket of underlying assets that they represent. This prevents users from being deceived by arbitrarily high (or low) values and to instead view the value of these derivatives as a derivative of the stocks or funds they represent. We hope that alongside delivering our users with the data necessary to view option prices in relation to their underlying, Optioncent also imparts a change in perspective to our users allowing them to more critically evaluate their investment decisions.",
  technologies: ['React', 'Javscript', 'HTML', 'CSS', 'Tailwind', 'Tradier API', 'Cloudflare'],
  goals: ["", "", ""],
  general: ["", "", ""],
  features: ["", "", ""],
  link: '/optioncent',
  live: '',
  github: 'https://github.com/llleeeaaannn/optioncent',
  image: 'This is the Optioncent image',
  largeImage: '',
  screenshots: ['', '', '']
}

export { template, stockleData, spotlistData, optioncentData }
