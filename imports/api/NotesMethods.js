import { NotesCollection } from "./NotesCollection";
import { Meteor } from "meteor/meteor";

Meteor.methods({
  "notes.insert"({ title, body, isImportant }) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    NotesCollection.insert({
      title,
      body,
      isImportant,
      createdAt: new Date(),
      userId: this.userId,
    });
  },

  "notes.remove"(noteId) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    NotesCollection.remove(noteId);
  },

  "notes.update"(noteId, { title, body, isImportant }) {
    if (!this.userId) {
      throw new Meteor.Error("Not authorized.");
    }

    NotesCollection.update(noteId, {
      $set: {
        title: title,
        body: body,
        isImportant: isImportant,
      },
    });
  },
});
