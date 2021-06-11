# Nice2MeetU App - v1.0
###### Side Project | App | 10 Jun 2021
It is a tool for lucky draw with my new friends.

###### Link: https://kawaii-ng.github.io/Nice2MeetU/

## Content 
<ol>
  <li><a href="#overview">Overview</a></li>
  <li><a href="#usage">Usage(s)</a></li>
  <li><a href="#what">What I Have Learnt</a></li>
  <li><a href="#problem">Problem(s) Faced</a></li>
</ol>

<a id="overview" />

## Overview
### Objective(s)
- Identify which friends have drew the card
- Faciliatate my friends to draw the card instead of drawing from 100 cards in real life
- Collect the name and card number immediately once my friends use this app

### Feature(s)
1. Background color changes after a certain time
2. The number will count from 0 until it equals to the lucky number

### Function(s)
1. Allow users input their name
2. Automatically and randomly generate a number 
3. Data (including users' name & number) is sent via email automatically

### Technical Skill(s)
- React.js
- Javascript
- HTML
- CSS

### Dev Tool(s)
Visual Studio Code

### Dependent(s)
- Email.js
- Material UI

<a id="usage" />

## Usage(s)
1. Click "Next" button to go to next page
<img src="https://user-images.githubusercontent.com/55972286/121630321-7d95f800-caaf-11eb-9af2-0d05552baba5.PNG" width="25%">

2. Enter your nick name into the textbox

<img src="https://user-images.githubusercontent.com/55972286/121630371-9b635d00-caaf-11eb-84bf-0b8acf66f1b0.PNG" width="25%">

3. If the textbox is blank, it will show the error message. 

<img src="https://user-images.githubusercontent.com/55972286/121630393-a3bb9800-caaf-11eb-8302-eb293f20f62b.PNG" width="25%">

4. Click "Draw Your Card" Button to draw a card number

<img src="https://user-images.githubusercontent.com/55972286/121630406-a918e280-caaf-11eb-9358-1cbc7dc0aa68.PNG" width="25%">

<a id="what" />

## What I Have Learnt?
### Change Background Color in Every 10 Seconds
To make this effect, I have learnt `setInterval()` to perform the tasks in every 10 seconds.
```React.js
  const change_bg = () => {

    setInterval(() => {

      let index = rand_bg();
      setBg(bgSet[index]);

    }, 10000)

  }
```

### Passing Data to another Component(s)
To pass the data, I have learnt `useLocation()` and `useHistory()` to pass the data from one component to another one. 

First, I need to pass the data within `history.push()` in component A. Apart from `pathname`, `state` allow me to pass a variable `cardNum` into it. 

```React.js
{/* Component A */}
history.push({
    pathname: '/card-number',
    state: {

        cardNum: card,

    }
});
```

Next, I need to create a variable in component B to obtain the value of `cardNum` from component A. 
```React.js
{/* Component B */}
const location = useLocation();
const card = location.state.cardNum;
```

### Counting Number from 0

To count the number from 0, I have learnt `setTimout()` to delay the adding speed on `num`. `num` is the number that showing on the screen, so its initial value is 0. Within `setTimout()`, I have used `setNum()` to add the number by 1. 

```React.js
setTimeout(() => {
    setNum(prevState => prevState + 1)
}, speed)
```


<a id="problem" />

## Problem(s) Faced
### autocomplete = 'off' Is Not Working
As I want to avoid auto complete feature applying on my textfield. Hence, I simply add `autocomplete='off'`. However, this feature is still applying on my textfield. 

To solve this problem, I added `autoComplete: 'off'` within `InputProps`. It is useful to avoid the feature of autocomplete apply on my textfield. 

```React.js
<TextField 
    style={{style}}
    id="input-with-icon-textfield"
    InputProps={{
        startAdornment: (
            <InputAdornment position="start">

                <FaceRounded /> 

            </InputAdornment>
        ),
        autoComplete: 'off'

    }}
    onChange={(e) => setName(e.target.value)}
    name="user"
    type="text"                            
/>
```

### Fail to Send Email
Once I have click the button, the console shows that it is fail to send email. 

To solve this problem, I have removed `onClick`, beacuse `onClick` interrupt the process of sending email. Then, I put the function within `onClick`, that is `handle_drawCard()` into `sendEmail` (, the function handle send email once button was clicked). 

```React.js
function sendEmail(e) {
        e.preventDefault();
    
        setError('');

        if (name === '' || name == undefined ){

            setError('Please type in your name first. ')

        } else {

            emailjs.sendForm('service_6lrqgp8', 'template_8dngwxq', e.target, 'user_D2f8ClCvFMHbQfBfyL8Q8')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

          handle_drawCard();
        
        }

    }    

```

```React.js
<Button 
    variant="contained"
    style={{background: "white", color: "black"}}
    type="submit"
    value="Send"
>
    Draw Your Card
</Button>
```

### Number Count Wrongly
The number starts counting from 0, but this action is not stopped and exceed 100. Also, it is discovered that the state of `num` is not updated. 

To avoid this problem, I have replaced `setInterval()` to `setTimeout()`. To update the state of `num`, I put `count_up()` within `useEffect()` and pass `num` into second parameter of `useEffect()`. 

```React.js
const count_up = () => {

    if(num !== card){

        setTimeout(() => {
            setNum(prevState => prevState + 1)
        }, speed)

    }

}

useEffect(() => {

    count_up()

},[num])

```
