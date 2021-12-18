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
