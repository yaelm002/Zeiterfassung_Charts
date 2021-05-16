class UICtrl {
   UISelectors ={
    list : '#item-list',
    addBtn : ".add-btn",
    totalStunden : ".total-stunden",
    personalId : '#personalId',
    kostenstelle : '#kostenstelle',
    projekt : '#projekt',
    aufgabe : '#aufgabe',
    beschreibung : '#beschreibung',
    datum : '#datum',
    zeit : '#zeit',
    loeschAll : '.clear-btn',
    filterBtn: "#filterBtn",
    datumFilter : '#datumFilter'
  }

  showData(items){
      let html = "";
      items.forEach((item)=>{
        html += `<li class="collection-item" id="item-${item.personalId}">
        <div class="row mt-3">
          <div class="col-lg-5 col-md-6 col-ms-12">
            <div class="card mb-3">
              <div class="card-body" style="display: flex;">
                <span class="icon"> 
                  <h2 style="margin-inline: 2rem;">
                    <i class="far fa-user"></i>
                  </h2>
                </span>
                <span>
                  <h4 class="card-title">
                    <strong>${item.personalId}</strong> 
                  </h4>
                  <p class="text-muted card-text">${item.datum}</p>
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-ms-12">
            <div class="card mt-3">
              <div class="card-body" style="display: flex;">
                <span class="icon"> 
                  <h2 style="margin-inline: 2rem;">
                    <i class="far fa-user"></i>
                  </h2>
                </span>
                <span>
                  <h4 class="card-title">
                    <strong>Kostenstelle</strong> 
                  </h4>
                  <p class="text-muted card-text">${item.kostenstelle}</p>
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-ms-12">
            <div class="card mt-3">
              <div class="card-body" style="display: flex;">
                <span class="icon"> 
                  <h2 style="margin-inline: 2rem;">
                  <i class="fas fa-project-diagram"></i>
                  </h2>
                </span>
                <span>
                  <h4 class="card-title">
                    <strong>Porjekt</strong> 
                  </h4>
                  <p class="text-muted card-text">${item.projekt}</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
        <div class="col-lg-5 col-md-6 col-ms-12">
          <div class="card mb-3">
            <div class="card-body" style="display: flex;">
              <span class="icon"> 
                <h2 style="margin-inline: 2rem;">
                <i class="fas fa-tasks"></i>
                </h2>
              </span>
              <span>
                <h4 class="card-title">
                  <strong>Aufgabe</strong> 
                </h4>
                <p class="text-muted card-text">${item.aufgabe}</p>
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-ms-12">
          <div class="card mt-3">
            <div class="card-body" style="display: flex;">
              <span class="icon"> 
                <h2 style="margin-inline: 2rem;">
                <i class="far fa-clock"></i>
                </h2>
              </span>
              <span>
                <h4 class="card-title">
                  <strong>Zeit</strong> 
                </h4>
                <p class="text-muted card-text">${item.zeit}</p>
              </span>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-6 col-ms-12">
          <div class="card mt-3">
            <div class="card-body" style="display: flex;">
              <span class="icon"> 
                <h2 style="margin-inline: 2rem;">
                <i class="fas fa-audio-description"></i>
                </h2>
              </span>
              <span>
                <h4 class="card-title">
                  <strong>Beschreibung</strong> 
                </h4>
                <p class="text-muted card-text">${item.beschreibung}</p>
              </span>
            </div>
          </div>
        </div>
      </div>
        <a href="#" class="secondary-content"> <i class="edit-item fa fa-pencil"></i></a></li>`;
      })
      document.querySelector(this.UISelectors.list).innerHTML= html;
    }
    getItemInput() {
      return{
        personalId : document.querySelector(this.UISelectors.personalId).value,
       kostenstelle :document.querySelector(this.UISelectors.kostenstelle).value,
       projekt :document.querySelector(this.UISelectors.projekt).value,
       aufgabe :document.querySelector(this.UISelectors.aufgabe).value,
       beschreibung :document.querySelector(this.UISelectors.beschreibung).value,
       datum :document.querySelector(this.UISelectors.datum).value,
       zeit :document.querySelector(this.UISelectors.zeit).value
      }   
    }
    UIaddInput(neueItem){
      document.querySelector(this.UISelectors.list).style.display = "block";

      const li = document.createElement('li');
      li.className = "collection-item";
      li.id= `item-${neueItem.personalId}`;
      li.innerHTML= `
        <br>
  <br>
   <div class="row">
        <div class ="col l4 col m6 col s12">
            <div class="card mb-3">
              <div class="card-body" style="display: flex;">
                <span class="icon"> 
                  <h4 style="margin-inline: 2rem;">
                    <i class="far fa-user"></i>
                  </h4>
                </span>
                <span>
                  <h6 class="card-title mb-0">
                  <strong>${neueItem.personalId}</strong> 
                  </h6>
                  <p class="text-muted card-text">${neueItem.datum}</p>
                </span>
              </div>
            </div>
          </div>
          <div class ="col l4 col m6 col s12">
            <div class="card mb-3">
              <div class="card-body" style="display: flex;">
                <span class="icon"> 
                  <h4 style="margin-inline: 2rem;">
                    <i class="far fa-user"></i>
                  </h4>
                </span>
                <span>
                  <h6 class="card-title mb-0">
                  <strong>K.stelle</strong> 
                  </h6>
                  <p class="text-muted card-text">${neueItem.kostenstelle}</p>
                </span>
              </div>
            </div>
          </div>
          <div class ="col l4 col m6 col s12">
            <div class="card mb-3">
              <div class="card-body" style="display: flex;">
                <span class="icon"> 
                  <h4 style="margin-inline: 2rem;">
                  <i class="fas fa-project-diagram"></i>
                  </h4>
                </span>
                <span>
                  <h6 class="card-title mb-0 p-au">
                  <strong>Projekt</strong> 
                  </h6>
                  <p class="text-muted card-text">${neueItem.projekt}</p>
                </span>
              </div>
            </div>
          </div>

      </div>
    </div> 
  <div class="row">
  <div class ="col l4 col m6 col s12">
      <div class="card mb-3">
        <div class="card-body" style="display: flex;">
          <span class="icon"> 
            <h4 style="margin-inline: 2rem;">
            <i class="fas fa-tasks"></i>
            </h4>
          </span>
          <span>
            <h6 class="card-title mb-0">
            <strong>Aufgabe</strong>  
            </h6>
            <p class="text-muted card-text">${neueItem.aufgabe}</p>
          </span>
        </div>
      </div>
    </div>
    <div class ="col l4 col m6 col s12">
      <div class="card mb-3">
        <div class="card-body" style="display: flex;">
          <span class="icon"> 
            <h4 style="margin-inline: 2rem;">
            <i class="fas fa-audio-description"></i>
            </h4>
          </span>
          <span>
            <h6 class="card-title mb-0">
            <strong>Besch.</strong> 
            </h6>
            <p class="text-muted card-text">${neueItem.beschreibung}</p>
          </span>
        </div>
      </div>
    </div>
    <div class ="col l4 col m6 col s12">
      <div class="card mb-3">
        <div class="card-body" style="display: flex;">
          <span class="icon"> 
            <h4 style="margin-inline: 2rem;">
            <i class="far fa-clock"></i>
            </h4>
          </span>
          <span>
            <h6 class="card-title mb-0">
            <strong>Stunden</strong> 
            </h6>
            <p class="text-muted card-text">${neueItem.zeit}</p>
          </span>
        </div>
      </div>
    </div>
</div>
</div> 
  `;
    
  
      document.querySelector(this.UISelectors.list).append(li);
    }
    InputEntleeren (){
      document.querySelector(this.UISelectors.personalId).value= "";
       document.querySelector(this.UISelectors.kostenstelle).value= "";
       document.querySelector(this.UISelectors.projekt).value= "";
       document.querySelector(this.UISelectors.aufgabe).value= "";
       document.querySelector(this.UISelectors.beschreibung).value= "";
       document.querySelector(this.UISelectors.datum).value= "";
       document.querySelector(this.UISelectors.zeit).value= "";
    }
    topBorderVerstecken(){
      document.querySelector(this.UISelectors.list).style.display = "none";
    }
    setTotal(total){
        document.querySelector(this.UISelectors.totalStunden).textContent = total;
    }

    
     inputZustandleeren(){
       this.InputEntleeren();
     }

     loeschList(){
       let list =document.querySelectorAll(".collection-item");
       list = Array.from(list); 
       list.forEach((item)=>{
         item.remove(); 
       })
     }
    
    getSelectors(){
      return this.UISelectors;
    }

    dataListUI(items){
      const list = document.getElementById('datumList');
      var option = document.createElement('option');
      if (items.length > 0){
        items.forEach((item)=>{ 
        option.value = item;
        console.log('ya',option.value);
      })
      list.appendChild(option);
      }
   
    }
    selectedDatum(){
      const filter = document.querySelector('#datumFilter').value;
      return filter;
    }

    fehlerMelden(){
      document.querySelector('.fehlermeldung').textContent= "Felder mit * müssen eingegeben werden"
    }

    //chart
    chart(a){
      var ctx = document.getElementById('myChart').getContext('2d');  
      var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: a.aufgabe,
        datasets: [{
            label: 'Stunden',
            backgroundColor: (zahl)=>{
               let index= zahl.dataIndex;
              let value = zahl.dataset.data[index];
              return value > 5 ? '#3366D6' : value > 3 ? '#4285F4': '#D0E0FC';
            },
            borderColor: 'none',
            data: a.zeit
        }]
    },
    options: {
      scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
      },
      title: {
        display: true,
        text: 'Zeit pro Aufgabe',
        position: 'top'
      }
    }
    });
  }


  chart2(a){
    var ctx = document.getElementById('myChart2').getContext('2d');  
    var chart = new Chart(ctx, {
  type: 'doughnut',

  data: {
      labels: a.aufgabe,
      datasets: [{
          label: 'Zeit pro Aufgabe',
          backgroundColor: (zahl)=>{
            let index= zahl.dataIndex;
           let value = zahl.dataset.data[index];
           return value > 5 ? '#000000' : value > 3 ? '#828282': '#CFCFCF';
         },
          borderColor: 'none',
          data: a.zeit
      }]
  },

  options: {
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
    },
    title: {
      display: true,
      text: 'Zeit pro Aufgabe',
      position: 'top'
    }
  }
  });
}
  }
