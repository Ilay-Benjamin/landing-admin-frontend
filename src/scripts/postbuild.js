const replace = require('replace-in-file');

// Define the options for the replacement
const options = {
  files: [
    './build/static/index.html',
    './build/asset-manifest.json',
    './build/**/*.js',
    './build/**/*.css'
  ],
  from: /static\//g,  // Regular expression to match 'static/'
  to: '../build/static/',  // Replacement path
};

// Perform the replacement
replace(options)
  .then((results) => {
    console.log('Replacement results:', results);
  })
  .catch((error) => {
    console.error('Error occurred:', error);
  });
