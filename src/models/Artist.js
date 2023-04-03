import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
  artist_id: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  genre: { type: String, required: true, trim: true },
  debut_year: { type: Date, required: true, default: Date.now },
});

const Artist = mongoose.model("Artist", artistSchema);

export default Artist;
