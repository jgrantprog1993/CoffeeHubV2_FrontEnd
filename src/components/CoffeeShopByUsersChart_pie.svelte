<script>
    // @ts-nocheck
    
    
        import ChartY from 'svelte-frappe-charts';
        import {getContext, onMount} from "svelte";
        // import type { user } from 'src/stores';
     
        const coffeeHubService = getContext("CoffeeHubService");
        let allUsers = [];
        let allUsersEmail = [];
        let allUsersId = [];
        let allCoffeeShops =[];
        let allCoffeeShopsId =[];
        let allCoffeeShopsName =[];
        let allCoffeeShopsRating =[];
        let coffeeShopsPerUserCount = [];
        let allCoffeeShopsUserId = [];
        let userCoffeeShops =[];
        let data = {
            labels: allUsersEmail ,
            datasets:[
                {
                    values: coffeeShopsPerUserCount
                }
            ]
    
        }
    
        //let coffeeShopReviewer = []
        
        //let count = [];
        let i = 0;
        let j = 0;
        onMount(async () => {
           //List of User Emails
           allUsers = await coffeeHubService.getAllUsers();
           allCoffeeShops = await coffeeHubService.getCoffeeShops();
    
           // console.log('ALL Coffee Shops ->' + allCoffeeShops);
           //https://gist.github.com/joeytwiddle/37d2085425c049629b80956d3c618971
           
           for(const user of allUsers){
            allUsersEmail[i] = user.email;
            allUsersId[i] = user._id;  
                // console.log('Made it here -> ' + allUsersEmail[i] + ' ID =>' + allUsersId[i] );
                data.labels[i] = allUsersEmail[i];
                i+=1;
            };
            for(const coffeeShop of allCoffeeShops ){
                allCoffeeShopsName[j] =coffeeShop.coffeeShopName;
                allCoffeeShopsId[j] = coffeeShop._id; 
                allCoffeeShopsRating[j] = coffeeShop.rating;
                allCoffeeShopsUserId[j] = coffeeShop.user._id;
    
                // console.log('Made it here CS*** -> ' + allCoffeeShopsName[j] + ' ID =>' + allCoffeeShopsId[j] + ' Rating =>' + allCoffeeShopsRating[j] + ' UserID =>' + allCoffeeShopsUserId[j]);
                j+=1;
            }
    
            let countforGraph = 0;
            let k = 0;
            for(const user of allUsers){
                
                for(const coffeeShop of allCoffeeShops ){
    
                    if(coffeeShop.user._id == user._id)
                    {
                        countforGraph+=1;
                    }
                   
                }
                coffeeShopsPerUserCount[k] = countforGraph;
                data.datasets[0].values[k] = countforGraph;
                // console.log('coffeeShopsPerUserCount = ' + coffeeShopsPerUserCount[k] + 'countforGraph = ' + countforGraph + ' k ' + k)
                k+=1;
            }
            
            // console.log('Made it here -> ' + allUsersEmail + ' ID =>' + allUsersId );
            // console.log('Made it here CS*** -> ' + allCoffeeShopsName + ' ID =>' + allCoffeeShopsId + ' Rating =>' + allCoffeeShopsRating + ' UserID =>' + allCoffeeShopsUserId);
    
        });
    
        // console.log('allUsersEmail => ' + allUsersEmail);
        // console.log('coffeeShopsPerUserCount => ' + coffeeShopsPerUserCount);
       ;
    
    
      </script>
      
      
      <div class="columns">
        <div class="column box has-text-centered">
          <h1 class="title is-4">No. of Reviews per User</h1>
          <ChartY data={data} type="pie" />
        </div>
        
      </div>