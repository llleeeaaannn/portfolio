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
  goals: ["As a frequent user of the popular word-based game, Wordle, from its initial release, I and a group of my friends regularly engaged in gameplay. Following the acquisition of the game by the New York Times, a colleague posed the question of the potential complexity and cost associated with the development of such a game. In response, I conveyed that while the concept and implementation of the game were impressive, it was essentially a static web application with pre-loaded daily answers.", "This conversation sparked an idea to develop my own version of the game, with a unique spin. As a finance enthusiast and active participant in various investment communities online, I decided to create a version of the game, named Stockle, that would utilize stock tickers instead of 5 letter words as answers.", "The objectives for this project included the design and implementation of a lightweight static web application that retained all the features of the original Wordle game, while also incorporating additional logic to accommodate the use of varying length stock tickers. Additionally, I aimed to replicate the styling of Wordle to provide a familiar user experience."],
  general: ["Stockle is a web-based game that utilizes the same mechanics as the popular game Wordle, but with a financial market twist. Stockle boasts 500 weekly users and involves players guessing stock tickers of varying lengths, with the user interface and game logic adjusting dynamically to the ticker length of the day. Feedback is provided in the form of colored tiles indicating when letters match or occupy the correct position. The objective of Stockle is to provide financial market participants and enthusiasts with a mentally stimulating and entertaining game that also exposes them to new stocks and companies."],
  technical: ["Stockle is a client-side only web application that utilizes Javascript, HTML, and CSS to deliver a static, interactive experience. Specifically, Stockle leverages the modern features of ES6 for the game logic and is styled with SCSS, a CSS preprocessor, taking adbantage of features such as variables, nested rules and mixins.", "The daily answers for the upcoming year are pre-determined and hard-coded into the application, similarly to Wordle. The date-fns package is used to determine the user's timezone and subsequently select the appropriate ticker of the day, referred to as the Stockle. The application features a dynamic user interface and game logic that adapts the number of guess squares based on the Stockle of the day and in turn renders the necessary UI. The user interface includes options for Dark and Light Mode, as well as a High Contrast Mode for individuals with visual impairments. User preferences for the theme are stored in the browser's Local Storage for easy access on future visits.", "The application also includes statistic tracking, such as wins, games played, results, and win streaks, which are stored in the browser's Local Storage for easy tracking without the need for a cumbersome login process that could negatively impact user adoption. Users can also share their results with others through the application-generated and formatted text after each game."],
  todo: ["Enhance the current statistic tracking capabilities beyond those offered by Stockle (or Wordle) by incorporating tracking of user-specific metrics such as the most frequently guessed letters, stock tickers, and other relevant trends.", "Investigate and integrate with a suitable API that provides an up-to-date list of all current US stock tickers to replace the current static list, thereby eliminating the need for manual updates to the tickers, and ensure the application's functionality remains current."],
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
  goals: ["As a frequent concert-goer, it is important for me to be familiar with the artist's setlist in order to fully enjoy the performance. To achieve this, I have been utilizing setlist.fm, a website that provides user-generated concert setlists, to access the latest setlists and manually adding each song to a Spotify playlist. Although this method has been effective for me, it is a cumbersome and time-consuming process that requires constant switching between tabs on my web browser and the Spotify app.", "To improve this process, I decided to develop a web application that would automate the entire process. The goal was to create a lightweight Progressive Web App that could be installed on users' devices and connect to their Spotify account. The application would accept a setlist.fm setlist link and use the setlist.fm REST API to retrieve setlist data, including artist, songs, date, and location. The data would then be converted to a format that is accepted by Spotify's API, and a Spotify playlist would be created in the user's account, with each song added sequentially.", "The application would return a link to the playlist, which will also be present in the user's Spotify account, and also provide information on songs that could not be added to the playlist due to unavailability on Spotify or other reasons."],
  general: ["Spotlist is a full-stack web application designed to facilitate the creation of playlists within a user's Spotify account from a setlist.fm setlist.", "The primary objective of Spotlist is to provide concertgoers with a simple and efficient means of creating a playlist in their Spotify account, with all the songs from the setlist of their choice in just three clicks.", "To create a playlist, all you need to do is go to setlist.fm, find a setlist you like, copy the URL and paste it into Spotlist. We look after the rest.", "The application then handles the rest of the process, which includes the retrieval of setlist data, the conversion of data to a format that is accepted by Spotify's API, and the creation of a Spotify playlist in the user's account with each song added sequentially."],
  technical: ["Spotlist is a full-stack Progressive Web Application (PWA) that utilizes the React framework for the front-end, with the implementation of the React Router DOM library to enable routing. The front-end is styled utilizing vanilla CSS and CSS Modules, which allows for code separation, prevents namespace collisions, and improves readability and maintainability. The front-end is hosted on Cloudflare Pages with a custom domain and leverages Cloudflare analytics.", "The back-end of Spotlist is built on the Node.js platform and utilizes the Express.js framework. It serves two primary purposes:", "Firstly, it facilitates the authorization of the user's Spotify account by requesting a login URL from Spotify, returning it to the client, and redirecting the user to Spotify's login page for authorization. Upon successful authorization, the Express.js server requests an access token from Spotify, which is valid for 30 minutes and is stored for use in subsequent requests to Spotify's API until it expires.", "Secondly, the back-end is called upon when the user attempts to create a playlist. The 'setlist' route receives an HTTP request containing a setlist ID and a Spotify Access token. The setlist.fm REST API is called to retrieve a response containing the necessary data on the user's chosen setlist, which is then parsed and processed through various methods to convert the data into the required format. The Spotify API's Search endpoint is called to retrieve a unique URI for each track. Tracks that were not found on Spotify are added to an object, which is returned to the client along with the playlist. Finally, the playlist is created through a POST request and populated with each track using their respective URI. The Node.js back-end returns a link to the playlist, along with other relevant data to the client.", "The back-end is hosted on an AWS EC2 Instance running Linux and is managed through the use of Screen GNU. It is accessed through an AWS API Gateway. The front-end and back-end of Spotlist feature comprehensive error handling, which produces simple and clean error messages for the user.", "The entire application is optimized for lightweight performance and scores 100% in each of the metrics in Google's Lighthouse Report. It is also a certified Progressive Web Application, enabling the application to be downloaded onto a user's device and function similar to a native app."],
  todo: ["Implement the capability for the inclusion of cover songs within a setlist in the generated playlist feature.", "Expand the supported streaming services to include Apple Music and other prominent platforms. This will require integrating with the relevant APIs and adapting the application's functionality to accommodate the specific requirements and structure of each service."],
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
  goals: ["Optioncent was designed to address the cognitive biases that commonly affect investors' decision-making when trading stock options. As derivatives of equities/stocks, options prices are directly tied to the underlying value of their associated equity.", "As an active participant in various online investing communities and forums, I observed the prevalence of these biases firsthand, particularly in the way investors view the value of an option as absolute rather than relative to the underlying equities it represents.", "As an example, investors will view a $50 at-the-money call option on an equity with an underlying value of $5,000 as cheap, while a $750 at-the-money call option on an equity with an underlying value of $100,000 will be considered expensive, despite the 'cheap' option costing 1% of its underlying's value, while the 'expensive' call only costs 0.75%.", "It should be noted that option pricing is far more complex and nuanced than outlined above and relies on a strong understanding of the Black Scholes formula and option greeks. Nevertheless, Optioncent aims to address this fallacy by solely displaying option prices as a percentage of their underlying asset's value, providing investors with an objective and data-focused perspective on their investment strategies."],
  general: ["Optioncent is a web-based application that presents stock option prices as a percentage of the underlying asset value.", "It allows investors to search for a specific equity by its stock ticker and view a list of all associated options expiration dates in chronological order, with the option chain of the closest expiry displayed by default. The application presents four values for each option: bid, mid, ask and spread. These values are displayed as a percentage of the underlying asset, with the spread being the difference between the bid and ask value presented as a percentage of the underlying asset. Investors can toggle between option chains for different expiration dates by clicking on the desired expiry date.", "Additionally, Optioncent provides investors with additional data on each option that can be viewed in a pop-up by clicking on the option. The pop-up displays the option price in both relative and absolute terms, as well as volume, open interest, and values for each of the greeks. Where historical pricing data is available, a chart with a green or red theme is displayed in the pop-up, indicating the performance during the displayed timeline."],
  technical: ["Optioncent is a React web-based application. The application's styling is implemented using Tailwind CSS, a utility-first CSS framework, in conjunction with vanilla CSS.", "Data for the application is sourced from the Tradier API, which provides real-time and 15-minute delayed data for stock options. The historical pricing data is visualized using Chart.js, a JavaScript library for data visualization."],
  todo: ["Implement a light theme to the application by utilizing CSS variables and appropriate class toggling techniques. This will allow users to switch between a light and dark theme, providing an improved user experience.", "Provide users with the ability to customize the data displayed to them by implementing a user settings page. This will allow users to select which data fields they want to see displayed in the application, such as bid, ask, and spread. This can be achieved by using a combination of React state and local storage to persist the user's preferences."],
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

const scrollToTopData = {
  name: "Scroll To Top",
  type: "Package",
  shortDescription: "An NPM package which provides functionality for automatically scrolling to the top of the page upon route changes in React applications, while also preserving the previous pages' scroll position when navigating using the browser's Back and Forward buttons.",
  longDescription: "",
  technologies: ["Javascript", "React", "React Router", "NPM"],
  goals: ["Upon initial implementation of navigation functionality utilizing React Router in a React application, I observed that the default behavior resulted in the retention of the scroll position of the previous page upon navigation to a new page. However, this behavior did not align with the desired functionality of automatically resetting the scroll position to the top of the newly navigated page. Having examined React Router's documentation and other available resources I discovered that there is currently no built-in feature within the library to achieve this desired behavior.", "To address this issue, I developed a custom solution to enable the desired functionality. This solution, which I used in multiple projects, was subsequently packaged as an NPM package for the purpose of facilitating its use in future endeavors, both for myself and other members of the community. An additional requirement for the package was the maintenance of the previous page's scroll position upon utilizing the browser's back button."],
  general: [],
  technical: [],
  todo: [],
  link: "/scrolltotop",
  live: "https://www.npmjs.com/package/scroll-to-top-react-router",
  github: "https://github.com/llleeeaaannn/scroll-to-top-react-router",
  image: "/images/scrolltotop/scrollToTopOverviewImage.png",
  largeImage: "/images/scrolltotop/scrollToTopOverviewImage.png",
  screenshots: []
}

export { stockleData, spotlistData, optioncentData, medicleData, scrollToTopData }

// Add what I learnt
