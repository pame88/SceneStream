export const JamPostsData={ /* containing the info for all projects organized into objects */

  "Snarling Dogs": {
    name: "Mike L.", 
    state: "active",
    title: "Snarling Dogs", /* */
    category: "Album",
    category: "All",
    location: "Boston",
    caption: "A compilation of the best punk bands coming out of PGH right now.",
    replies: "7 replies",
    profileURL: "./Images-People/Mike.png",
    image: "post-image",
    imageURL: "./Images-Compilations/snarling.jpg",

    reply: [
      {
          title: "Drummer Needed", /* */
          category: "Drums",
          category: "Top",
          location: "Boston",
          type: "jam-header",
          name: "Mike L.", 
          caption: "Looking for a drummer that can play stuff like what is on this playlist! We have a couple gigs a week at local bars.",
          replies: [
            {name: "Grace", profileURL: "./Images-People/grace.png", message: "Exactly my style! I'm interested"},
            {name: "Royal", profileURL: "./Images-People/Royal.png", message: "I think I know just the guy for this, DM me!"},
            {name: "Fayyad", profileURL: "./Images-People/fayyad.png", message: "Message me!"},
            {name: "Phil", profileURL: "./Images-People/phil.png", message: "What's the band name?"},
            {name: "George", profileURL: "./Images-People/george.png", message: "Great playlist ;)"},
            {name: "Abel", profileURL: "./Images-People/abel.png", message: "What is the pay like?"},
            {name: "Liam", profileURL: "./Images-People/liam.png", message: "What is the pay like?"}
          ],
          profileURL: "./Images-People/Mike.png",
          image: "post-image-opened",
          imageURL: "./Images-UI/playlistTag.png"
      }
    ]
  },

  "Looking for band": {
    title: "Looking for band", /* */
    state: "inactive",
    category: "Songs",
    location: "Boston",
    type: "jam-header",
    name: "Liam L.",
    caption: "Drummer here interested in playing metal in a band, check out my Spotify profile for my fa...",
    replies: "1 reply",
    profileURL: "./Images-People/liam.png",
    image: "no-post-image",
    posts: []
  },

  "CPR x JW": {
    title: "CPR x JW", /* */
    state: "inactive",
    category: "Bands",
    category: "All",
    location: "Worcester",
    type: "show-header",
    name: "Phil M.", 
    caption: "Candlepin from Boston and Julia's War from Philly combining for an epic set of up and coming bands.",
    replies: "1 reply",
    profileURL: "./Images-People/phil.png",
    image: "post-image",
    imageURL: "./Images-Compilations/candlepin.jpg",
    posts: []
  },


  "Best of North Carolina": {
    title: "Best of North Carolina", /* */
    state: "inactive",
    category: "Songs",
    category: "All",
    location: "Boston",
    type: "show-header",
    name: "Sarah B.", /* shows when clicked into project */
    caption: "I put together a comp of some of the best artists I've seen around the scene here.",
    replies: "1 reply",
    profileURL: "./Images-People/Sarah.png",
    image: "post-image",
    imageURL: "./Images-Compilations/NC.png",
    posts: []
  },

  "Looking to jam": {
    title: "Looking to jam",
    state: "inactive",
    category: "All",
    location: "Boston",
    type: "jam-header",
    name: "John B.", /* shows when clicked into project */
    caption: "Looking for a casual group who can meet up a couple times a month!",
    replies: "1 reply",
    profileURL: "./Images-People/Aparna.png",
    image: "post-image",
    imageURL: "./Images-Compilations/fauna.jpg",
    posts: []
  },

  "Mike is going to:": {
    title: "Mike is going to:", /* */
    state: "inactive",
    category: "Bands",
    location: "Boston",
    type: "show-header",
    name: "Mike L.", /* shows when clicked into project */
    caption: "Anyone up for a festival??",
    replies: "1 reply",
    profileURL: "./Images-People/Mike.png",
    image: "post-image",
    imageURL: "./Images-JamFeed/FF.png",
    posts: []
  },

  "Let's jam!": {
    title: "Let's jam!",
    state: "inactive",
    category: "Collections",
    location: "Boston",
    type: "show-header",
    name: "John B.", /* shows when clicked into project */
    caption: "Beginner on keyboard who wants to jam with people!",
    replies: "3 replies",
    profileURL: "./Images-People/Aparna.png",
    image: "no-post-image",
    posts: []
  }
};



export const ListeningData = {
  "Mike L.": {
    name: "Mike L.", /* */
    state: "active",
    profileURL: "./Images-People/Mike.png",
    song: "Wheels -",
    artist: "Foo Fighters",
    mutuals: "5",
    friendNumber: "320",
    friends: [
      {name: "Ameer", profileURL:"./Images-People/ameer.png",  state: "inactive"},
      {name: "Grayson", profileURL:"./Images-People/grayson.png", state: "inactive"},
      {name: "Hannah", profileURL:"./Images-People/hannah.png", state: "inactive"},
      {name: "Piper", profileURL:"./Images-People/piper.png", state: "inactive"},
      {name: "Abel", profileURL:"./Images-People/abel.png", state: "inactive"},
    ], 
    artists: [
      {name: "Led Zeppelin", profileURL:"./Images-Artists/zepp.png", state: "inactive"},
      {name: "Foo Fighters", profileURL:"./Images-Artists/FooFighters.png", state: "inactive"},
      {name: "Black Sabbath", profileURL:"./Images-Artists/Sabbath.png", state: "inactive"},
      {name: "Joan Jett", profileURL:"./Images-Artists/JoanJett.png", state: "inactive"},
      {name: "MGMT", profileURL:"./Images-Artists/mgmt.png", state: "inactive"},
    ],
    songs: [
      {name: "1. Black Dog", artist:"Led Zeppelin", plays:"250"},
      {name: "2. Everlong", artist:"Foo Fighters", plays: "203"},
      {name: "3. Landslide", artist:"Fleetwood Mac", plays: "196"},
      {name: "4. Sweet Leaf", artist:"Black Sabbath", plays: "144"},
      {name: "5. Eventually", artist:"Tame Impala", plays: "139"}
    ],
    posts: [
      {
          title: "Drummer Needed", /* */
          category: "Drums",
          location: "Boston",
          type: "jam-header",
          name: "Mike L.", 
          caption: "Looking for a drummer that can play stuff like this...",
          replies: "1 reply",
          profileURL: "./Images-People/Mike.png",
          image: "post-image",
          imageURL: "./Images-JamFeed/rockplaylist.png"
      },

      {
        title: "Mike is going to:", /* */
        state: "inactive",
        category: "Events",
        type: "show-header",
        name: "Mike L.", /* shows when clicked into project */
        caption: "Anyone up for a festival??",
        replies: "1 reply",
        profileURL: "./Images-People/Mike.png",
        image: "post-image",
        imageURL: "./Images-JamFeed/FF.png"
      },

      
      {
        title: "Open Jam", /* */
        state: "inactive",
        category: "Events",
        type: "jam-header",
        name: "Mike L.", /* shows when clicked into project */
        caption: "Message me if you want to jam at the courts today at 4!",
        replies: "1 reply",
        profileURL: "./Images-People/Mike.png",
        image: "no-post-image"
      }
    ]
  },

  "Hannah": {
    name: "Hannah", /* */
    state: "inactive",
    profileURL: "./Images-People/hannah.png",
    song: "Blinding Lights -",
    artist: "The Weeknd"
  },


  "Ameer": {
    name: "Ameer", /* */
    state: "inactive",
    profileURL: "./Images-People/ameer.png",
    song: "R.E.S.P.E.C.T -",
    artist: "Aretha Franklin"
  },

  "Spencer": {
    name: "Spencer", /* */
    state: "inactive",
    profileURL: "./Images-People/spencer.png",
    song: "Perfect -",
    artist:  "Ed Sheeran"
  }
}