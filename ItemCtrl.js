 class ItemCtrl {
  constructor(personalId, kostenstelle,projekt, aufgabe = [],beschreibung, datum, zeit){
    this.personalId= personalId;
    this.kostenstelle= kostenstelle;
    this.projekt= projekt;
    this.aufgabe= aufgabe;
    this.beschreibung= beschreibung;
    this.beschreibung= this.beschreibung;
    this.datum = `${(new Date(datum)).getDate()}.${(new Date(datum)).getMonth()+1}.${(new Date(datum)).getFullYear()}`;
    this.zeit= zeit;
  }

   data={
    item:[
     
    ],
    totalStunden: 0
  }

   getData(){
    return this.data;
  }

   inputAddierenfunction(personalId,kostenstelle,projekt,aufgabe, beschreibung ,datum,zeit){
    //const neueId = this.data.item.length;
    const neueItem = new ItemCtrl(personalId, projekt, kostenstelle, aufgabe , beschreibung ,datum ,parseInt(zeit));

    this.data.item.push(neueItem);
    return neueItem;
  }
   deleteItem(id){
    const ids = this.data.item.map((item)=>{
      return item.id
    });
    const index = ids.indexOf(id);
    this.data.item.splice(index,1);
  }

   LoschAllItem (){
    this.data.item = [];
    this.data.totalStunden= 0;
    return this.data
  }  
  




   getItems(){
    return  this.data.item;
  }
   totalStunden(items){
    let stunden= 0;
    items.forEach((item)=>{
      stunden+= item.zeit;
    })
    this.data.totalStunden = stunden;
    return this.data.totalStunden;
  }


  dataListitem(){
    const datum = [];
    this.getData().item.forEach((i)=>{
      datum.push(i.datum);
    });
    return datum;
  }

  zeitUndAufgabe(datum){
    const zeit = [];
    const aufgabe = [];

    this.getData().item.forEach((i)=>{
      if(i.datum === datum){
        zeit.push(i.zeit);
        aufgabe.push(i.aufgabe);
      }
    })
    return {
      zeit,
      aufgabe
    }

  }
}

