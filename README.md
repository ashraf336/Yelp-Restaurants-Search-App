# Yelp-Restaurants-Search-React Native App 
This a simple React Native app that I implemented from the steven grider course on Udemy.

The app contains a search bar that takes a search word from the user and uses the YELP API to search for resataurants that contains that particular keyword or something similar to it.

Additionaly, the results that the API returns in a JSON object are then filtered according to the Price category of that result.

The results are presented in a horizantally scrollable TouchableOpacity List  where a user can  click on one of the restaurants.

Once the user chooses a restaurant , the user is navigated to  screen containing photos of the restaurant that had been fetched using the id registerded from the user choosen reataurant in the previous screen.

The followig are 6 screenshots from the App:

 Seraching with  a keyword "Pasta" where I created only the lists with "$"  & "$$" price categories where I name them "cost effective" and "Bit Pricer" ,respectively.There is a third price category "$$$" or "Big Spender" that didn't appear because it got no results.It will appear in the next Screenshot.

<img src="https://user-images.githubusercontent.com/48598160/167315465-f5636849-3ce7-47e2-bbce-6e0147bc9a30.png" width="300" height="650" >


  Here, we got the "Big Spender"  List because the Yelp API returned results for the keyword "Fish" that has a "$$$" price category.  

<img src="https://user-images.githubusercontent.com/48598160/167315472-3029eba1-9f48-4f80-99e0-bb691c15f3f6.png" width="300" height="650">


  We will see in the next screenshot what will happen if we clicked for example on "The City Fish" restaurant.

<img src="https://user-images.githubusercontent.com/48598160/167315477-e5e63153-913c-4f40-884d-6a98a6f7f0fc.png" width="300" height="650">


     We got a new screen with the details of the reataurant according to the id of the registered click on the TouchableOpacity, or simply the FlatList.

<img src="https://user-images.githubusercontent.com/48598160/167315480-6f52bad9-81be-4102-97ad-32c204f8b7f8.png" width="300" height="650">


          

<img src="https://user-images.githubusercontent.com/48598160/167315485-a5906abb-9bd2-4f10-b77f-f268f9c4b234.png" width="300" height="650">

