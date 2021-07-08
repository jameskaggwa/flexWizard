const flexWizard = (options) => {

    // select html element by class flexWizard
    const element = document.querySelector('.flexWizard');

    // applying styles to element
    element.style.display = options.display;
    element.style.justifyContent = options.justify;
    element.style.alignItems = options.align;
    element.style.flexDirection = options.direction;

}


module.exports.flexWizard = flexWizard;
