
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
        }
     }
})()


// APP CONTROLLER

const App = (function(ItemCtrl, UICtrl){
    return {
        init:function(){

            UICtrl.clearEditState();

            const items = ItemCtrl.getItems();

            UICtrl.populateItemList(items);
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

