# Poppulo Lottery Service

A RESTful API for creating, amending and checking the status of a Poppulo lottery ticket.

# Solution

The choice to build the solution using the [Play Framework](https://www.playframework.com/) was made because it is a lightweight, stable web framework.
It uses the well known model-view-controller pattern and has a powerful and flexible routing engine.
Based on the requirements and the target audience, I felt this was a good technical decision.

# Installation

## Prerequisites
* The project requires `SBT` and was built using version `1.2.8`
* The project is hosted in a git repository and installing git is suggested. (Although the project can be downloaded from the web)

## Build
* Clone the [technical assessment](https://github.com/john-lay/technical-assessment.git) project
* Checkout the `poppulo` branch
* Open a terminal and navigate to the `technical-assessment/Poppulo/rest` directory
* execute a `sbt run` command
* The application should be running at [http://localhost:9000](http://localhost:9000), navigating to this url in a browser should present you with a list of routes

# Requirements

## Problem

We are looking for a REST interface to a simple lottery system. The rules of the game are described below.

## Lottery Rules

You have a series of lines on a ticket with 3 numbers, each of which has a value of 0, 1, or 2.
For each ticket if the sum of the values on a line is 2, the result for that line is 10. Otherwise
if they are all the same, the result is 5. Otherwise so long as both 2nd and 3rd numbers are
different from the 1st, the result is 1. Otherwise the result is 0.

## Implementation

Implement a REST interface to generate a ticket with n lines. Additionally we will need to
have the ability to check the status of lines on a ticket. We would like the lines sorted into
outcomes before being returned. It should be possible for a ticket to be amended with n
additional lines. Once the status of a ticket has been checked it should not be possible to
amend.

We would like tested, clean code to be returned.

## Potential Solution
* `/ticket` **POST** Create a ticket
* `/ticket` **GET** Return list of tickets
* `/ticket/{id}` **GET** Get individual ticket
* `/ticket/{id}` **PUT** Amend ticket lines
* `/status/{id}` **PUT** Retrieve status of ticket

