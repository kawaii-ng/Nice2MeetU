# Nice2MeetU App
It is a tool for lucky draw with my new friedns.

## Overview
### Objective(s)
- Identify which friends have drew the card
- Faciliatate my friends to draw the card instead of drawing from 100 cards in real life
- Collect the name and card number immediately once my friends use this app

###Function(s)
1. Allow users input their name
2. Automatically and randomly generate a number 
3. Data (including users' name & number) is sent via email automatically
4. Background color changes after a certain time
5. The number will count from 0 until it equals to the lucky number

###Dev Tool(s)
Visual Studio Code

### API (s)
- Email.js

## Function(s)
### change_bg()
#### Objective(s)
- changes the background color to another one after a certain time

#### Procedure(s)

```React.js
  const change_bg = () => {

    setInterval(() => {

      let index = rand_bg();
      setBg(bgSet[index]);

    }, 10000)

  }
  ```
`setInterval()` is used for running the specific code at every 10 seconds. 

```React.js
  const rand_bg = () => {

    let index = Math.floor(Math.random() * 6);
    return index;

  }
```

`rand_bg()` is the function to generate the radom number and specifiy the new index of getting the new background color code from `bgSet`. `bgSet` is a array that contains 6 different background color code. 

#### Result(s)
