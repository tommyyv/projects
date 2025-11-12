# Inventory Management TUI

Pseudo-functionality:

1. Set up Docker Compose with PostgreSQL.
1. Build simple Python script to CRUD items (no TUI yet).
1. Wrap CRUD functions with SQLAlchemy ORM.
1. Integrate Textual for TUI CRUD interface.
1. Add barcode/QR scanning support.
1. Enable Textual Web mode + LAN access.
1. Add notifications (low stock warnings).
1. Add quality-of-life features (sorting, search, etc.).

## Software Design and Architecture

### Design

Design Philosophy: Minimal, lightweight, portability

Tech stack: Python, Docker, Postgres
Frameworks & Libraries: Textual, psycopg, Scanner(?), dotenv (secrets)

User story: Inventory Audit
The user scans all items' barcode and/or QR code from the stockroom. The model is the unique identifier for each item.
The user must first scan the master copy barcodes and/or QR codes to direct the application that a certain model is
being scanned. The next thing is scanning the items themselves; each item has a unique barcode and/or QR code. Ideally,
the user would group the items and scan the same models at a time.

Example: Model 1234. A 1234 barcode has been created. The barcode is scanned to let the application know that the user
is about to scan 1234 models. The user starts scanning the models' unique manufacturer barcodes. The scanned items are
recorded into the database, representing quantity of a model.

User story: Removing inventory
The user grabs a system of some model. The user scans the master copy barcode associate with the physical model. The
user scans the unique identifier on the system, triggering an event. The scanned item is queried in the database and
then removed from the schema. A datastamped notification is logged for tracking purposes.

User story: Replenishing inventory
The inventory stock has been diminished to only 3 items left. A trigger event occurs when an item of some model reaches
a quantity of 5. An event trigger occurs, notifying the user that this item is low. This generates an email template
that the user can copy/paste. The email template will include the item(s) and what quantity is in-stock and how many
should be ordered. The user can then create a procurement ticket to order these items (unfortunately, this can't be
automated or interacted because no API access)

User story: Report generation
The user wants to generate monthly reports, measuring inventory metrics. A generate report button is pressed, triggering
an event. An event trigger occurs, generating a database report of the stockroom.

User story: Dashboard
A user accesses the web interface dashboard to get an overview of what's in stock. Users can utilize this webpage to
gather quick information on how the inventory is looking.

### Architecture

```
             ┌────────────────────────────────┐
             │         Textual TUI App         │
             │ (Event-driven UI in terminal or │
             │        web browser mode)        │
             └──────────────┬─────────────────┘
                            │
                        down-arrow
             ┌────────────────────────────────┐
             │   Application / Service Layer   │
             │ Handles CRUD, business logic,   │
             │ validation, notifications, etc. │
             └──────────────┬─────────────────┘
                            │
                        down-arrow
             ┌────────────────────────────────┐
             │        Database Layer           │
             │ (SQLAlchemy / asyncpg ORM over  │
             │     PostgreSQL in Docker)       │
             └────────────────────────────────┘

```

### Data Model

This is what the schema will look like (entity); this should be a mirror representation of the data model itself.

```
id: PK
name: String
model: String
barcode: String
quantity: Integer
initial_entry: DateTime
last_updated: DateTime
```

Logic for name: asset's identifier
Logic for barcode & model: validates the barcode scanned matches what the model is.
Logic for initial_entry: logs the first time the item was added into the database.
Logic for last_updated: logs the last time the item has been in the database

### Containerization & Hosting

Docker-compose orchestrates the application by doing the heavy lifting. It will start/initialize the database and then
start the TUI application. A local persistent volume is created to hold data (backups)

## Features

- Paper barcodes replaced with interactive buttons. Users can select the model they want and that acts as if they
  scanned a barcode.

## Contributions

TODO: create docs for future contribution and maintainability

## References

- REF: https://textual.textualize.io/blog/2023/09/06/what-is-textual-web/
