//Packages
//qr-image

//Inquirer
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from  'fs';

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      message: "Type in your URL",
      name:"URL", 
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_url = qr.image(url); 
    qr_url.pipe(fs.createWriteStream('qr_image.png'));
    
    fs.writeFile('inserted_url', url, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
      console.log("Error in generate the qr code, try again")
    }
  });

