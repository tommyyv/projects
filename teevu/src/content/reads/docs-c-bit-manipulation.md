---
title: C - Bit Manipulation
date: '2024-11-29'
---

## Learn & Understand

Way to change the value of the bit position. Very useful when packing/unpacking
data to be transmit/receive elsewhere.

representation

- ShL: x(n\*2), where n is the shift bit position and x is the decimal
- ShR: x/(n\*2), see above.

```c
int main() {
  int tx_pck = 00000000; // x

  // the values for these variables should be the addresses of the port & pin
  int var_one = 00000001; // this could be 0x0D
  int var_two = 00000000; // this could be 0x0E
  int var_three = 00000000; // this could be 0x0F

  printf("shifting left for var_two: %d\n", tx_pck | var_two << 3);

  printf("shifting left for var_three: %d\n", tx_pck | var_three << 5);

  printf("this is the final value of tx_pck: %d\n", tx_pck);
  return 0;
}
```

what you expect to see from this bit manipulation example above is that the
tx_pck gets modified multiple times to set its 8-bit data package to include the
three variables.

THIS IS EXTREMELY USEFUL when space and memory are SCARCE.
This is very similar to packaging data into an object before transmitting it
elsewhere in web development; data stored into data structure, modified, and
packaged for sending elsewhere.

## Apply & Develop

Configuring and programming a microcontroller

## Teach

Terms:

1. DDRx (data direction register): determines input or output of pin
2. PORTx (port output register): determines output value
3. PINx (port input register): determines read value
4. OR |: sets a bit
5. AND &: clears by flipping all bits; used with NOT
6. XOR ^: toggles specific bits
7. NOT ~: clears; used with AND

This is the recipe:

1. Select the port register: DDRxn
2. Set the direction (input or output): DDBxn
3. Configure the pin register bit
4. Set the pull-up or pull-down register

```c
void setup(0) {
  // step 1: configuring port register B pin 2 and 5 as outputs
  DDRB |= (1<<DDB2 | 1<<DDB5);
  // step 2: configuring the port register data register
  PORTB |= (1<<PORTB5);
}

void loop() {
  setup() // call setup fn

  while(1) {
    // do logic
    // step 2: configuring the port register data register
    PORTB |= (1<<PORTB5);
    // delay
    _delay_ms(500);
    // clear the bit
    PORTB &= ~(PORTB5);

    // delay
    _delay_ms(500);
  }
  return 0;
}
```

