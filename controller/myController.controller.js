sap.ui.define(['sap/ui/core/mvc/Controller','sap/m/MessageBox'],function(Controller,MessageBox){
  return Controller.extend(['com.sapui5.Controller.myController'],{
      // xmlbutton:function(){
      //     alert('from cont')
      // }
      // ,
      onInit: function() {
          // Initialization code, if needed
      },
      jsbutton:function(){
          console.log('i called');
          var value=sap.ui.getCore().byId('myjsbtn')
          value.attachPress(this.enable)
          // sap.ui.getCore().byId('idjsbtn').setText(value)
        
        
          
      },
      enable(){
          alert('now Button is enabled')
      },xmlenable(){

          MessageBox.confirm('Btn First is enabled')
      }
      ,
      xmlfun(){
          // var value=sap.ui.getCore().byId('myxmlbtn1')
          console.log('f');
          db=this.getView()
          var value=db.byId("myxmlbtn1")
          console.log(value);
          value.attachPress(this.xmlenable)
          
      }
  })

})