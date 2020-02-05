Setting up Local MongoDB Database:
  1. 'mongo' command >> to enter shell
  2. 'show dbs' command >> list the dbs currently set up on local machine
  3. 'use <name_of_new_db>' command >> creates a new database named whatever you type in after 'use ', and switches your mongodb instance to use this newly created DB

Seeding the Database:
  1. Enter the mongo shell
  2. 'load("scripts/seedscript.js")' command >> Will execute whatever code you have in said seedscript file.
    (The file should be structured just like your typing into the mongoDB shell, as that's what its doing anyway)
    - If, for some reason this isn't working, or having issues, you can enter the shell, and copy / paste content from the seedscript file

Dropping a Collection:
  1. First, make sure you're in the correct DB,
    - Can do this by typing 'use <db_name>'
  2. Verify the collection you are trying to delete is actually there
    - 'show collections'
  3. Command to drop >> 'db.<collection>.drop()' { ex: db.user.drop() }

Creating a Collection:
  1. 'db.<collection_name>.insert({ key: "value" })'
  Alternative Way:
    2. db.createCollection(name, options)
      - name = name of collection
      - Options(Field, Type, Description)
        *{ capped, Boolean, if true collection is limited in size }*
        *{ size, Number, size of collection in bytes }*
        *{ max, Number, number of mongodb documents that can be stored in collection }*

  ## Starting MongoDB Service
   - 'sudo service mongod start'
