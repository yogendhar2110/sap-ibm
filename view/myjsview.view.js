sap.ui.jsview('com.sapui5.view.myjsview',{
  getControllerName(){
      return "com.sapui5.Controller.myController"
  },
  createContent(oController){
      var Input=new sap.m.Input('idjsinput',{value:''})
      var Obtn=new sap.m.Button('myjsbtn',{
          text:'YOGIButton',
          // press:oController.jsbutton
      })
      var Obtn2=new sap.m.Button('idjsinput2',{
          text:'MYYOGIButton',
          press:[oController.jsbutton,oController]
      })
      return [Input,Obtn,Obtn2]

  }
})