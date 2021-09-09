const { Schema, model } = require("mongoose");

const lectureSchema = new Schema({
  name: {
    type: String,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  typeOflecture: {
    type: String,
    enum: ['video', 'written', 'OTHER'],
  },
  description: {
    type: String,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  image: {
    type: String,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  tags: [{
    type: String, 
  }],
  reviews: [{
      type: Number, 
  }],
},
{
    timestamps: true
}
);

const Lecture = model("Lecture", lectureSchema);

module.exports = Lecture;