import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  song_id: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  artist_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Artist",
  },
  genre: { type: String, required: true, trim: true },
  release_date: { type: Date, required: true, default: Date.now },
  play_count: { type: Number, default: 0, required: true },
});

const Song = mongoose.model("Song", songSchema);

export default Song;
