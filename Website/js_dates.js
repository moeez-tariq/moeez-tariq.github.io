let button = document.querySelector('#text_button');
let facts = document.querySelector('#changeable_text');
let headings = document.querySelector('#changeable_heading');

let headingList = [
    'DATES HAVE A VARIETY OF ANTIOXIDANTS', 'DATES  PROVIDE NO ADDED SUGAR', 'DATES SUPPORT DIGESTIVE HEALTH', 'DATES PROTECT HEART HEALTH AND BLOOD SUGAR', 'DATES MAY OFFER BRAIN PROTECTION','DATES ARE NUTRIENT RICH'  
];
let factList = [
  'In addition to their vitamin and mineral content, dates are fruits that are rich in health-protective antioxidants. One 2019 study found that dates are a good source of natural antioxidants, which can be used to manage oxidative stress-related illnesses.',
  'Many people think of dates as dried fruit—but they are actually fresh fruit since no water is removed. And because dates are whole, unprocessed fruit, their sugar content is naturally occurring. In other words, if an energy bar is sweetened only with dates, the label can list zero grams of added sugar.',
  'Three dates provide about 18% of the daily goal for fiber, which supports good digestive function. Dates can improve bowel movement frequency and reduce level of stool chemicals known to damage cells and trigger mutations that may lead to cancer',
  'Dates could potentially have a beneficial effect on lipid profile, especially in reducing total cholesterol and elevating HDL, because of the high polyphenolic content of dates (polyphenols are micronutrients that naturally occur in plants) ensuring better cardiovascular health.',
  'Protective compounds in dates are also thought to help guard the brain. According to a paper published in 2016, dates have promising therapeutic potential against Alzheimers disease due to their ability to combat inflammation and oxidative stress in the brain.','Three dates provide about 200 calories, 54 grams of carbohydrates with about five grams of fiber, a gram of protein, and no fat. This portion also supplies smaller amounts of a wide range of nutrients, including B vitamins, vitamin K, calcium, iron, magnesium, potassium, zinc, and manganese.'
];

let currentFact = 0;

button.addEventListener('click', () => {
  facts.textContent = factList[currentFact];
    headings.textContent = headingList[currentFact];
  currentFact++;

  if (currentFact >= factList.length) {
    currentFact = 0;
  }
});

let recipeButton = document.querySelector('#recipe_button');
let recipes = document.querySelector('#changeable_recipe');
let labels = document.querySelector('#changeable_label');

let labelList = [
    'Peanut Butter Banana Toast', 'Caprese Salad', 'Greek Yogurt Parfait', 'Hummus and Veggie Wrap', 'Fruit Salad', 'Avocado Toast',
];

let recipeList = [
    'Toast a slice of bread. Spread peanut butter on the toast. Top with sliced banana and enjoy.', 'Slice a few tomatoes and fresh mozzarella cheese. Arrange the tomato and cheese slices on a plate. Drizzle with olive oil and balsamic vinegar, and sprinkle with salt and pepper to taste.', 'Layer 1 cup of Greek yogurt, 1/2 cup of granola, and 1 cup of mixed berries in a tall glass. Repeat the layering process until the glass is full. Serve immediately.', 'Spread hummus on a large flour tortilla. Top with sliced veggies of your choice, such as cucumber, bell pepper, and carrot. Roll up the tortilla and enjoy.', 'Cut up your favorite fruits, such as strawberries, kiwi, mango, and pineapple. Mix the fruits together in a large bowl. Drizzle with honey or sprinkle with a little bit of cinnamon.', 'Toast a slice of bread. Mash 1/2 an avocado and spread it on the toast. Top with a fried or poached egg, and sprinkle with salt and pepper to taste.'
];

let currentRecipe = 0;

recipeButton.addEventListener('click', () => {
//    alert(currentRecipe);
  recipes.textContent = recipeList[currentRecipe];
    labels.textContent = labelList[currentRecipe];
  currentRecipe++;


  if (currentRecipe >= recipeList.length) {
    currentRecipe = 0;
  }
});

