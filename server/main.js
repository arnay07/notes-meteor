import { Meteor } from "meteor/meteor";
import { NotesCollection } from "/imports/api/NotesCollection";

Meteor.startup(() => {
  if (NotesCollection.find().count() === 0) {
    NotesCollection.insert({
      title: "First Note",
      body: "This is the body of the first note",
      createdAt: new Date(),
      isImportant: true,
    });
    NotesCollection.insert({
      title: "Second Note",
      body: "This is the body of the second note",
      createdAt: new Date(),
      isImportant: false,
    });
    NotesCollection.insert({
      title: "Third Note",
      body: "This is the body of the third note",
      createdAt: new Date(),
      isImportant: false,
    });
  }
});
