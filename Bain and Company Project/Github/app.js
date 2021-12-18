// convert json into an object
// get every key from objects > pass in objects > takes every key and put into an array
// loop through array of keys
// inside of the function check the type of the key because I want to know what the data looks like
// switch statement to determine what I'm going to do with those data types...number string and boolean are my most obvious assumptions
// change everything into some sort of html structure based off the results of the switch statements and push into empty html array 
// append html to document.body


const convertJSON = json => {
   const pojo = JSON.parse(json)

   const keys = Object.keys(pojo)
   const htmlArr = []
   for (key in keys) {
     if (key) {
       const type = typeof key
       switch (type) {
         case 'number':
           htmlArr.push(createNumHTML(pojo[key]))
         break;
         case 'string':
           htmlArr.push(createStringHTML(pojo[key]))
         break;
         case 'boolean':
           htmlArr.push(createBooleanHTML(pojo[key]))
         break;
       }
     }
   }

   document.body.innerHTML =  htmlArr
 }
