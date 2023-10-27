import { Meteor } from "meteor/meteor";
import { NotesCollection } from "/imports/api/NotesCollection";

Meteor.publish("notes", function publishNotes() {
  return NotesCollection.find({});
});
