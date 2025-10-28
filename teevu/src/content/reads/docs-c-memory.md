---
title: C - Memory
date: '2024-11-30'
---

## Learn & Understand

### Memory Allocation

(Issue): What happens when the fixed size memory space runs out of "boxes" for the
data? => memory leak; data overwrites the spaces next to it and you lose data = BAD

(Solution): Resize/reallocate more memory space to compensate

(How): mallac, calloc, realloc, free
Tell the kernel (OS) how much memory you need, and it finds some space.

malloc vs. calloc: big difference is calloc allocates a space in memory and
initializes that specified size (bits) to zeros, while malloc just allocates a
space in memory of a specified size. (TL;DR) => use calloc if you want to
initialize all bits of that specified space to 0s.

```c

```

### Best Practices

- Declare & initialize pointers - Set it to NULL
- Guard check for NULL - Check before dereferencing
- Always free dynamically allocated memory & set the ptr to NULL
- Explicitly express memory size - malloc(4 x sizeof(int)); int (4 bytes) x 4

## Apply & Develop

### Passing By: Value (single), Reference (double), Function, Struct & Arrays

```c
#include <stdio.h>

// pass by value (single ptr): copy of the ptr in the used function body

int main(void) {
  int num_a = 5;

  // declare a ptr of type Pointer
  int *p;

  // init ptr by pointing to the address of num_a variable
  p = &num_a;

  // increment the value that the ptr points to by 10
  *p += 10; // new value is 15

  // get the value of this address via the ptr that's pointing to it
  printf("new value of num_a: %d\n", *(&num_a));

  // directly getting value of the original variable
  printf("get value by the variable: %d\n", num_a);

  // deref the ptr to get the value
  printf("deref the ptr that's pointing to num_a: %d\n", *p);

  // notice the format specificer is of type Pointer
  // address of the ptr should be the same as the variable it's pointing to
  printf("address of num_a via *p ptr: %p\n", p);

  // pulling the direct address of the variable
  printf("address of num_a: %p\n", &num_a);
  return 0;
}

// pass by reference (double ptr): address of the passed variable in the
// function body
// this directly modifies the variable out of the function scope.

// passing by function
// passing by struct or array

void print_array(int *arr, int len) {
  for (int i = 0; i < len; i++) {
    printf("values: %d\n", arr[i]);
  }
}

int main(void) {
  int a[5] = {1, 2, 3, 4, 5};

  int *pX;

  // the ptr points to the array and increments by one
  // HOWEVER arrays are not pointers, they decay down to
  // a pointer once an expression, such as ++ or -- is used
  pX = a;
  printf("arrayy: %d\n", *pX);
  printf("array + 1: %d\n", *pX++);
  printf("array + 1: %d\n", *pX++);
  printf("array + 1: %d\n", *pX++);

  print_array(a, 5);
  return 0;
}

// pointers
#include <stdio.h>

void test_pass_ptr(int *ptr) {
  *ptr = 20;
}

void test_pass_ptr_of_ptr(int *ptr) {
  *ptr = 30;
}

int main(void) {
  int *ptr = NULL;
  int **ptr2 = NULL;
  int num = 10;
  ptr2 = &ptr;
  ptr = &num;

  printf("---VALUES---\n");
  printf("value before change: %d\n", num);
  test_pass_ptr(&num);
  printf("value change: %d\n", num);
  printf("value that ptr points to: %d\n", *ptr);
  printf("before change...pointer to a pointer: %d\n", **ptr2);
  test_pass_ptr_of_ptr(ptr);
  printf("after change...pointer to a pointer: %d\n", **ptr2);

  printf("---ADDRESSES---\n");
  printf("address of num: %p\n", &num);
  printf("the address of ptr: %p\n", &ptr);
  printf("the address of ptr2: %p\n", &ptr2);

  printf("ptr points to the address of num %p\n", ptr);
  printf("ptr2 points to the address of ptr %p\n", ptr2);

  printf("\n\nThing:                dPtr                    ptr                       orig\n");
  printf("holding values:   [%p]  ----->  [%p]  ----->  [%d]\n", ptr2, ptr, num);
  printf("addresses of:     [%p]  ----->  [%p]  ----->  [%p]\n", &ptr2, &ptr, &num);
  return 0;
}

// OUTPUT:
/*---VALUES---
value before change: 10
value change: 20
value that ptr points to: 20
before change...pointer to a pointer: 20
after change...pointer to a pointer: 30
---ADDRESSES---
address of num: 0x7ff7beb7bf54
the address of ptr: 0x7ff7beb7bf60
the address of ptr2: 0x7ff7beb7bf58
ptr points to the address of num 0x7ff7beb7bf54
ptr2 points to the address of ptr 0x7ff7beb7bf60


Thing:          dPtr                    ptr                       orig
values:       [0x7ff7beb7bf60]  ----->  [0x7ff7beb7bf54]  ----->  [30]
addresses:    [0x7ff7beb7bf58]  ----->  [0x7ff7beb7bf60]  ----->  [0x7ff7beb7bf54]
*/
```

## Teach

Refer to DOCS-C-DSA-X for more details on
application and implementation.

Programs manipulate data. But HOW? Think of it as a child who constantly asks
WHY? This is very similar analogy when trying to understand pointers. Your
program has data that needs to be manipulate, but you're trying to figure out
HOW to do that. Well here's HOW:

All data is store somewhere in the memory grid and to access the data and
manipulate it, you would need to reference where it's stored first aka the
memory address of that data.

Here is the analogy:

You live in a neighborhood, and someone is visiting you. They don't know where
you live, so you send them your address, containing the street number and street
name. This is the reference to the memory address. You don't send your whole
house to your friend but a reference to where your house is.
