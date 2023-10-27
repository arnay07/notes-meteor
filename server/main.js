import { Meteor } from "meteor/meteor";
import "/imports/api/NotesMethods";
import "/imports/api/NotesPublications";

Meteor.startup(() => {
  console.log("Démarrage du serveur...");
});
