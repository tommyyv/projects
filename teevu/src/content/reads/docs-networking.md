---
title: Networking
date: '2024-12-20'
---

## Learn & Understand

### Network Model

Circuit-switched network: old days where operators manually moved ports around
by pulling in/out
Packet-switched network: Modern data transmission
TCP (transmission control protocol): slow, yet reliable data transmission due to
the acknowledgement process. Stream sockets
UDP (user-datagram protocol): fast yet unreliable. Datagram sockets
NAT (network address translation): subnets within network. 192.168.x.x or 10.x.x.x
Router: specialized hardware used for forwarding (moving) packets to its
destination, while ensuring data integrity and destination accuracy via IP
addresses.
IP (internet protocol): computer ID using an address ID; allows seamless data
transmission, because it tells the system where to go
Header: prepended data, containing protocol-based information, so some protocols
have certain signatures, while others don't. Putting info on an envelope to
send off.

### Data Processing: Header

This is what a header packet looks like whenever it goes through the different
layers in the network model. Each layer will process and package up the data and
adds onto the header packet before transmission.

These are the steps that the OS takes:

1. Process & package data via the layered network model.
2. OS looks at routing table to determine destination -- either within the LAN
   or outbound via the router. Computer's NIC card(s) send the packaged Ethernet
   frames (packets) to its destination.
3. Arriving at the destination, the layers are revealed and processed backwards
   until the OS reaches the application layer where the data is.

Application -> Transport -> Internet -> Link

ex: HTTP -> TCP -> IP -> Ethernet

A notable thing to notice is that each layer doesn't know if a procotol changes
or cares what it's doing. They are isolated in their own little world.

### Single-threaded vs Multi-threaded

?: How many clients the server can handle depends on how the server-side logic
is written; multiple threads to handle clients or a singular one for a more
simpler approach.

### Concurrency

## Apply & Develop

### HTTP Server & Client using Python

```python
import socket
# server-side
# create socket object
server_socket = socket.socket()

# bind socket connection to destination
# params: (<IP_address>, PORT)
server_socket.bind()

# listen for incoming traffic
server_socket.listen()

# accept incoming traffic
# server accepts a socket type and the socket address
client_socket, client_address = server_socket.accept()

# package & data transmission
# always loop recv because data can be split
# encode the data


# close socket connection

# client-side
# create socket object
# package & data transmission
# receive response
# close socket connection
```

### HTTP Server & Client using C

## Teach
