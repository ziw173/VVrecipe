# Milestone 5

### Cogs 121
### Team Name: VegHub
#### Team Members:
* Brandon Kim 
* Henry Ou 
* Chloe Wu
</br>

### How someone in your target user population would use your app
Bob is looking over vegan food on Instagram and found some delicious looking food. He decided that he wants to recreate it for himself but a problem arose. The person who posted the pictures of the food did not list any recipe or ingredients.</br> Bob didn't give up so he decided to try to find the recipe for the dishes he saw. He came across the vegan/vegetarian site VegHub. On the site, Bob can enjoy looking at all the homemade recipe people are sharing on the page. When he clicks on them he is able to find ingredients and recipe for the pictures. Now Bob is able to recreate what the vegan dishes that looks delicious from the photos  and share them with his friends.
</br>


### Latest UI Screenshots
#### Home

![Home 1](https://github.com/henrywuo/VegHub/blob/master/milestone5/home1.PNG)</br></br></br>
![Home 2](https://github.com/henrywuo/VegHub/blob/master/milestone5/home2.png)</br></br></br>
![Home 3](https://github.com/henrywuo/VegHub/blob/master/milestone5/home3.PNG)</br></br>

## Recipe
![Recipe 1](https://github.com/henrywuo/VegHub/blob/master/milestone5/recipe1.PNG)</br></br></br>
![Recipe 3](https://github.com/henrywuo/VegHub/blob/master/milestone5/recipe2.PNG)</br></br>


## Profile
![Profile 1](https://github.com/henrywuo/VegHub/blob/master/milestone5/profile1.PNG)</br></br></br>
![Profile 2](https://github.com/henrywuo/VegHub/blob/master/milestone5/profile2.PNG)</br></br>

## #4
Our UI has improved immensely compared to Milestone 4 in many ways. The most important change we made to the UI was adding more design to the profile page, which was essentially empty in Milestone 4. We added tabs for users' favorites and uploaded recipes that make it easy for users to navigate through. We've added an onclick function to the recipes in the home/recipe page for people to click on and pop up recipe steps.

## #5
![#5 1](https://github.com/henrywuo/VegHub/blob/master/milestone5/display1.PNG)</br></br></br>
![#5 2](https://github.com/henrywuo/VegHub/blob/master/milestone5/display2.PNG)</br></br></br>
![#5 3](https://github.com/henrywuo/VegHub/blob/master/milestone5/display3.PNG)</br></br>

## #6
For our data display, we ended up using MongoDB to store our user's information, such as posts, recipes uploaded, recipes saved, etc. We used node get/post requests in order to update and retrieve information from our database paired up with AJAX requests to display data without refreshing the page. For example, the search bar in the recipe page calls an AJAX request to a get request on the backend, which calls the database and retrieves JSON information. In order to store image effectively, we used GridFS to minimize cost/space of the pictures.

## #7
Some ambitious data visualization we would have liked to create would be a more functional carousel than what we had before. And when users click on a certain image, it will bring up more information about the recipe, such as ingredients, messages, comments, likes, steps, etc. This would bring more of a social aspect to our app, which we would have liked to implement more.
