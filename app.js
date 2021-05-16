const itemCtrl = new ItemCtrl;
const uiCtrl = new UICtrl;

 const selectors = uiCtrl.getSelectors();

  const loadEvents = function(){
    document.querySelector(selectors.addBtn).addEventListener('click', itemAddieren);
    document.addEventListener('keypress', (e)=>{
      if(e.keyCode == 13 || e.which == 13){
        e.preventDefault();
        return false
      }
    })
    
    document.querySelector(selectors.loeschAll).addEventListener('click', loeschAll); 

    document.querySelector(selectors.filterBtn).addEventListener('click', filterItem);

  }

    const itemAddieren = function(e){ 
    const input =uiCtrl.getItemInput();


    if(input.personalId && input.kostenstelle && input.projekt&& input.aufgabe&& input.datum && input.zeit){
      const neueItem =  itemCtrl.inputAddierenfunction(input.personalId,input.projekt, input.kostenstelle, input.aufgabe, input.beschreibung, input.datum, parseInt(input.zeit));
      console.log(neueItem);
      uiCtrl.UIaddInput(neueItem);
      uiCtrl.InputEntleeren();
    }else{
      uiCtrl.fehlerMelden();
      setTimeout(() => {
        document.querySelector('.fehlermeldung').remove();
      }, 2000);
    }
    const total =itemCtrl.totalStunden(itemCtrl.getItems());
      
      uiCtrl.setTotal(total);
      const dataListItem = itemCtrl.dataListitem();
      const copie = [...new Set(dataListItem)] ;
      console.log('data', copie);
      uiCtrl.dataListUI(copie);
      e.preventDefault();
  }


const loeschAll = function(e){
  itemCtrl.LoschAllItem();
  console.log('item',itemCtrl.LoschAllItem());
  uiCtrl.loeschList();
  const total =itemCtrl.totalStunden(itemCtrl.LoschAllItem().item);
  uiCtrl.setTotal(total);
  console.log(itemCtrl.getItems());
  console.log(total);
  document.getElementById('myChart').style.display= 'none';
  document.getElementById('myChart2').style.display= 'none';
  document.querySelector(selectors.datumFilter).value = "";
  uiCtrl.topBorderVerstecken();

  uiCtrl.InputEntleeren();

  e.preventDefault();
}
//filter
const filterItem = function(e){
  document.getElementById('myChart').style.display= 'block';
  document.getElementById('myChart2').style.display= 'block';
  console.log(uiCtrl.selectedDatum());

  const a= itemCtrl.zeitUndAufgabe(uiCtrl.selectedDatum());
  uiCtrl.chart(a);
  uiCtrl.chart2(a);
  console.log(a);
  e.preventDefault();

}
  const init= function(){
    document.getElementById('myChart').style.display= 'none';
    document.getElementById('myChart2').style.display= 'none';
      uiCtrl.inputZustandleeren();
      const items = itemCtrl.getItems();
      if(items.length > 0 ){
        uiCtrl.showData(items);
      }else{
        uiCtrl.topBorderVerstecken();
      }
      const total =itemCtrl.totalStunden(itemCtrl.getItems());
      uiCtrl.setTotal(total);
   
      loadEvents();
    }
  

init();
