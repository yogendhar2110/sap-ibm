sap.ui.define(['sap/ui/core/mvc/Controller'],function(oController){
    return oController.extend('sapui5.Controller.mycontroller',{
        xmlfun(){
            gv=this.getView()
            var va=gv.byId('vertically')
            va.destroyContent()
        },
        xmlfun1(){
            gv=this.getView()
            var va=gv.byId('vertically')
            console.log('d');
            va.addContent('<text text="this is added text"/>')
        }
    })
})