
// STORE CONTROLLER



// ITEM CONTROLLER

const ItemCtrl = (function(){
    // ITEM CONSTRUCTOR

    const Item = function(id, name, money){
        this.id = id;
        this.name = name;
        this.money = money;
    }

    // DATA STRUCTURE / STATE
    const data = {
        items: [
            {id: 0, name:"Food", money: 1000},
            {id: 1, name:"Transport", money: 3000},
            {id: 2, name:"Clothes", money: 500},
        ],
        currentItem: null,
        totalMoney: 0
    }

    return {
        getItems: function(){
            return data.items;
        },
        addItem: function(name, money){
          let ID;

            //   Create ID 
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            money = parseInt(money);

            // Create a new Item
            newItem = new Item(ID, name, money);

            // Add to item array
            data.items.push(newItem);

            return newItem;

        },
        getTotalMoney: function(){
            let total = 0;

            if(data.items.length > 0){
                data.items.forEach(function(item){
                   total += item.money;

                   data.totalMoney = total;
                })
                return data.totalMoney;
            } else {
                return data.totalMoney = 0;
            }
        },
        getItemById: function(id){
            let found = null;

            // Loop through the items
            data.items.forEach(function(item){
              if(item.id === id){
                found = item;
              }
            })

            return found;
        },
        setCurrentItem : function(item){
            data.currentItem = item;
        },
        getCurrentItem: function(){
            return data.currentItem;
        }
        
    }
})();


// UI CONTROLLER

const UICtrl = (function(){
     return {
        populateItemList: function(items){
          let html = "";

          items.forEach(function(item){
            html += `
            <li class="collection-item" id="item-${item.id}">
                <strong>${item.name}</strong> <em>${item.money}</em>
                <a href="#" class="secondary-content">
                    <i class="fa fa-pencil edit-item"></i>
                </a>
            </li>`
          });

          document.querySelector(".collection").innerHTML = html;
        },
        clearEditState: function(){
           document.querySelector(".add-btn").style.display = "inline";
           document.querySelector(".update-btn").style.display = "none";
           document.querySelector(".delete-btn").style.display = "none";
           document.querySelector(".back-btn").style.display = "none";
        },
        getItemInput: function(){
            return {
                name: document.querySelector("#item-name").value,
                money: document.querySelector("#item-money").value
            }
        },
        addListItem: function(item){
            
            // Create a li ELement
            const li = document.createElement("li");

            // Add Class to li
            li.className = "collection-item";

            // Add ID
            li.id = `item-${item.id}`;

            // Add HTML
            li.innerHTML = `<strong>${item.name}:</strong> <em>${item.money}$</em>
            <a href="#" class="secondary-content">
                <i class="fa fa-pencil edit-item"></i>
            </a>`;

            // Insert ITem
            document.querySelector(".collection").appendChild(li);

        },
        clearInput: function(){
            document.querySelector("#item-name").value = "";
            document.querySelector("#item-money").value = "";
        },
        showTotalMoney: function(money){
           document.querySelector(".total-money").textContent = money;
        },
        addItemToform: function(){
            document.querySelector("#item-name").value = ItemCtrl.getCurrentItem().name;
            document.querySelector("#item-money").value = ItemCtrl.getCurrentItem().money;
        },
        showEditState: function(){
            document.querySelector(".add-btn").style.display = "none";
            document.querySelector(".update-btn").style.display = "inline";
            document.querySelector(".delete-btn").style.display = "inline";
            document.querySelector(".back-btn").style.display = "inline";
        }
     }
})()


// APP CONTROLLER

const App = (function(ItemCtrl, UICtrl){


    const loadEventListeners = function(){
        
        // Add item event
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

        // Edit Item Event
        document.querySelector(".collection").addEventListener("click", itemEditClick);

    }

    function itemAddSubmit(e){
        e.preventDefault();

        // Get from inout from ui controller

        const input = UICtrl.getItemInput();

        if(input.name === "" || input.money === ""){
          alert("Please fill the fields")
        } else {
             // Add Item
             const newItem = ItemCtrl.addItem(input.name, input.money);

             // Add Item to UI List
             UICtrl.addListItem(newItem);

            //  Get Input Money
            const totalMoney = ItemCtrl.getTotalMoney();

            // Update money to ui
            UICtrl.showTotalMoney(totalMoney);

             // Clear Input 
             UICtrl.clearInput();
        }
    }


    const itemEditClick = function(e){
        const listId = e.target.parentElement.parentElement.id;

        // Break into an array
        const listArr = listId.split("-");

        // Get the actual ID
        const id = parseInt(listArr[1]);

        // Get item
        const itemToEdit = ItemCtrl.getItemById(id);

        // Set Current Item
        ItemCtrl.setCurrentItem(itemToEdit);

        // Add item to form
        UICtrl.addItemToform();

        UICtrl.showEditState();
     
    }


    return {
        init:function(){

            UICtrl.clearEditState();

            const items = ItemCtrl.getItems();

            if(items.length > 0){
                UICtrl.populateItemList(items);
                document.querySelector(".no-item").style.display = "none";
            } else{
                document.querySelector(".no-item").style.display = "block";
            }

            loadEventListeners();
           
        }
    }
})(ItemCtrl, UICtrl)

App.init();
























// const primary = (function(){
//   var firstName = "Jagan";
  
//   return {firstName};
// })()

// const secondary = (function(){
//   var firstName = "Javid";
//   return {firstName};
// })()

// console.log(primary.firstName);
// console.log(secondary.firstName);

