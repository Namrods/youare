var youAre = [
  "Your bright beautiful smile, that every time i see it i cant hide the smile that finds its way to my lips.",
  "The beautiful enchanting glow that is your eyes putting me under your spell.",
  "Your soft angelic singsong voice, the voice of my love.",
  "The way laugh and giggle makes me happy, as it is the happiest sound in the entire universe.",
  "Your funny and cute sense of homour that never ceases to make me laugh happy.",
  "That look in your eyes so filled with love and joy a complete reflection of mine.",
  "The way you always do your best and make me smile and truly happy.",
  "your unconditional love that makes me truly feel like the luckiest man ever, I cant explain how loved I feel.",
  "The support, love, understanding and encouragement that you have for me.",
  "The way that you understand and see things in the same kind of light that I do.",
  "Your silly cute personality that always makes me a smile and feel blessed.",
  "Everything about you that makes you who you are, the most wonderful amazaing woman ever."
];

$("button").click(function() {
  var randomYouAre = youAre[Math.floor(Math.random() * (youAre.length))];

  $("h2").text(randomYouAre).toggle()
});
