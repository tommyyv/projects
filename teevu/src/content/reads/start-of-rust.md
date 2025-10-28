---
title: Start Of Rust - Embedded
date: '2024-09-23'
---

# The Start

I have no experience with Rust but superficial level of embedded systems,
working with embedded systems using higher-level abstractions and software.

## Rust: Tools

What I'm looking for is the ideal Rust setup; I understand that Rust runs on a
system-level, so what I want is separate each project with their own package
directory and global packages. This is very similar to how I separate my Node
modules when using Node.js. Each node_module directory is local to the project,
unless it's globally used across Node. For example, I try and use the latest
version of TypeScript, so this is a global module for me.

But looking at the Rust tooling, it looks like I need:

- Rust: duh.
- cargo: package manager and builder
- crates: cargo modules
- rustc: compiler
- rustup: rust cli that manages Rust tools
- Cargo.toml: config file
- Rust targets: collection of architectures and platforms; ex. stm32 or esp
- cargo-binutils: collection of commands that make it easy to use the LLVM tools
- GDB or OpenOCD: debugger
- Probes: debug device; ex. ST-Link for STM32
- cargo-generate: optional; boilerplates

## Rustup: Terms

This is version management similar to pyenv (python) or nvm (node)

channel: release versions (stable, beta, nightly)
toolchain: rustc versions
host: current host (your local machine)
target: specify the platform & architecture you're trying to code for

## Rust: Project Structure

- Cargo.toml: config file
- src/parent files: main, lib, mod
- src/memory.x: linker file => MCU info
- modules: src/file => I like having separate directories (namespace) of modules

```rs
// src/foo/mod.rs => this what rustc looks for
mod foo; // find the module folder

use crate::foo::MyStruct; // find the struct class in this module folder

fn main() {
  some_var = MyStruct {}; // init struct class
}
```

## STM32F3: Start

Why Rust must cross-compile architectures: host and target are different
platforms and architectures, so rustc must compile for that

How does rustc know how/who to cross compile to: target

How is OpenGDB and GDB related: OpenGDB is the software the connects the
interface ST-LINK to the MCU by declaring the interface and the target. GDB is
a debug server, so whenever cargo run is executed, then a debug session opens

Steps to run:

1. target architecture and the st-link via openodb
2. cargo run/build the target architecture, depending on how you have your
   programmer/debugger config setup => make sure you're in the cwd

## STM32F3: LEDs Flashing

I was able to flash the led to circularly cycle

Now...time to optimize.
My initial solution accessed the led array and controlled the output. What I
want to do now is loop through and take the index to tell the loop that this
current index, turn on or off the led.
