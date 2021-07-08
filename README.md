# What Is This?
This is flexBox solution for non developers.

# Installation
```javascript
npm i --save flexWizard
```

# Basic Usage

```javascript
import { flexWizard } from 'flexWizard';

flexWizard({
    display: 'flex',
    justify: 'center',
    align: 'center',
    direction: 'column',
});

```
> In your html to the container that you want the flex options to be applied to give a class of flexWizard e.g __class="flexWizard"__
# Options
This module takes in 4 options:

* _display_ - __'flex'|'none'__
* _justify_ - __'center'|'flex-start'__
* _align_ - __'center'|'flex-start'__
* _direction_ - __'row'|'column'__