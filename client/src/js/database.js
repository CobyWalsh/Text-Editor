// Initializing the IndexedDB named 'jate' with version 1 and setting up the structure.
import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Defines the function 'putDb' that allows me to add or update data in the indexDB database named 'jate'.
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jate', 1);
  const tx = jateDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ jate: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};


// Defines the function 'getDb' that allows me to retrieve data from the IndexedDB database named 'jate'. 
export const getDb = async () => {
  console.error("getDb not implemented");
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("jate", "readonly");
  const store = tx.objectStore("jate");
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();
