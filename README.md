# Mobile Flashcards

An Android app built using React Native that allows you to add decks (categories) & flashcards, and take quizzes on them.

## Requirements

To run this app, you need to have the latest versions of a few things installed.

**On your computer**

- Node.js
- Yarn (or NPM)

**On your Android device**

- Expo app

## Installation

#### Step 1

First, download the repo and unzip it.

#### Step 2

Open a terminal, ```cd``` into the root directory of this project and run the following command
```sh
yarn install && yarn start
```

Or if you have NPM installed, you could run:
```sh
npm install && npm start
```

A QR code will be displayed on the Terminal.

#### Step 3

Open the Expo app and scan the QR code. That's it.

## Usage

There are five main views in this app.

- Deck list view
- Individual deck view
- Quiz view
- New deck view
- New card view

### The ```Deck list``` view

The Deck list view view displays a list of decks each displaying

- the title of the deck
- the number of cards in the deck

### The ```Individual deck``` view

The Individual deck view displays

- the title of the deck
- the number of cards in the deck
- a button to add a new card (question) to the deck
- a button to start a quiz on this specific deck (only if there are cards in the deck)

### The ```Quiz``` view

The Quiz view displays

- a question
- a button to view the answer (flips the card)
- the answer to the question (when card is flipped)
- a button to view the question (when card is flipped, flips the card back)
- a correct button
- an incorrect button
- the number of cards left in the quiz

Once the quiz is complete, this view displays

- the number of correct answers
- the percentage correct
- a button to retake the quiz
- a button to go back to the Individual deck view

### The ```New deck``` view

The New deck view displays

- an input to enter in the title for the new deck
- a button to submit the new deck title

### The ```New card``` view

The New card view displays

- an input to enter in the question
- an input to enter in the answer
- a button to submit the new deck title

## Developed for Android

This app was tested using OnePlus 3 running Android Nougat 7.1.1

___

This project is a part of the [React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) syllabus.