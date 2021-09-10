const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
  name: {
    type: String,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  typeOfCourse: {
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
  position: {
    type: Number,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  lectures: [{
      type: Schema.Types.ObjectId, ref: 'Lecture'
  }],
  reviews: [{
      type: Number, 
  }],
},
{
    timestamps: true
}
);

const Course = model("Course", courseSchema);

module.exports = Course;