[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Boggle Challenge

Test for words on a boggle board.

Solve `boggle` as simply as possible. Then, solve
`bigBoggle` and compare it to your `boggle` solution. You might notice
patterns. Finish by make a single solution work for every kind of boggle
presented here.

## Instructions

1.  Fork and clone this repository.
2.  Change into the new directory.
3.  Install dependencies `npm install`.
4.  Fulfill the listed requirements.

## Requirements

Map row/column coordinates onto an array index (i.e. represent a square grid
 using a simple array).  Use this mapping to return (potential) words from
 letters in the grid.

[Boggle](https://en.wikipedia.org/wiki/Boggle) is a word game played with
 letter-dice arrange in a 4X4 tray.

A _tray_ is just an array of length 16 with each element a single letter string.

A _list of coordinate pairs_ is an array with length <= 4 and each element is an
 array of length 2.  The sub-arrays contain two integers >= 0 and <= 3.

Write a function - in `lib/challenge.js` - that takes a **tray** and a **list of
 coordinate pairs** and returns a string representing the concatenation of the
 letters at each of the coordinates.

## Bonuses

Only try these after completing the main challenge.

### Big Boggle challenge

Big Boggle uses a 5X5 tray.

### Super Big Boggle challenge

Super Big Boggle uses a 6X6 tray.

### Validate inputs

-   Ensure tray has the correct length
-   Ensure that coordinates fall within the tray
-   Disallow coordinate pairs that aren't in a line

Return the empty string if a validation fails

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
