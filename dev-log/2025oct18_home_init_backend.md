# 2025OCT18 | Backend Workflow

I decided to transition into building the backend, because I'm getting frustrated with getting my firmware layer to
work, so think of it as a break.
Now, I want to transition my thoughts into my backend architecture and design. What I have in mind is that the backend
will be a separate entity like the other layers and it is the sole layer, gluing together the frontend and firmware
layers.

Let's talk DATA. Because that is what the backend is all about. My first thought when thinking about my data models is
what types of data and how to store them. After some research, I decided to go with a time-series database for my
real-time data, such as sensor data or communication data. Essentially any data that relying critical, time-sensitive
information. I will later integrate a relational database - Postgres - to the backend to hold structured data models,
such as users, accounts, etc. Luckily Postgres has a time-series database called TimescaleDB, which is just an extension
of the database itself.

Here are things I need to consider when building my backend + database:

- environment variables: where can I storing my database credentials => I should create a .env/dev-env and a .env/prod-env and ignoring the directory in my .gitignore
- mock data: where/how am I generating my mock data => is there a quick library to do this, so that I can get it up and
  running?
- connecting the backend & database => create the initial components to communicate with the database, so that I know they are communicating.
- testing: starting db first, then backend, then test endpoints
- move to prod-env => should be a quick config update

I want my first task to be figuring out the long-term architecture of the backend itself. I think I want to start with
creating a Docker container for my backend, so that later I could use Docker Compose to create a composite Docker image
of my backend, frontend, firmware, and control system.

## TimeScaleDB
