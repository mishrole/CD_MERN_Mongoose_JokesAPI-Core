const Joke = require("../models/joke.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
  .then(allJokes => res.json({ jokes: allJokes }))
  .catch(err => res.json({ mesage: "Something went wrong", error: err }));
}

module.exports.findOneSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
  .then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
  .catch(err => res.json({ mesage: "Something went wrong", error: err }));
}

module.exports.findRandomJoke = (req, res) => {
  Joke.find()
  .then(allJokes => {
    const jokes = [...allJokes];
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const random = jokes.length > 0 ? jokes[randomIndex] : [];
    res.json({ joke: random })
  })
  .catch(err => res.json({ mesage: "Something went wrong", error: err }));
}

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
  .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
  .catch(err => res.json({ mesage: "Something went wrong", error: err }));
}

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
  .then(updatedJoke => res.json({ joke: updatedJoke }))
  .catch(err => res.json({ mesage: "Something went wrong", error: err }));
}

module.exports.deleteAnExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
  .then(result => res.json({ result: result }))
  .catch(err => res.json({ mesage: "Something went wrong", error: err }));
}