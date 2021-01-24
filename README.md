# Podcast hosting based on Airtable.

The purpose of the project is to create podcast hosting service in the convinient environment of Airtable.

# Set up instructions

To replicate the process you need to have an Airtable profile.

1. When you had the profile, go to your Account and copy your API key.

2. Clone the project and in the root directory create a .env file where you need to create environmental variable named AIRTABLE_API and set it to your Airtable api key that you copied from your account.

3. Create the a base in your Airable for your podcast. Your base needs to have two separate tables. One for holding information about your podcast, second to have information about your episodes.

Copy the structure of the tables from here: [Podcast information](https://airtable.com/shrKIZ8hpFLd9hcYk/tblZN57M4UP7hJwNO) [Episodes information](https://airtable.com/shrk0M8vLYi8nrp0l/tblDK7SUs3ckKpXbh) 

4. Replace the links to your new airtable tables in the index.tsx. In line 86 - add your podcast information table link, line 96 add your episode information table link.

5. yarn dev to run.

# To do:

1. Login for the users,
2. Analytics for the listens (dropout time, completion rate, downloads, listens, download sources)
