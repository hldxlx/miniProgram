// components/behavior/behavior.js
Component({
  behaviors:[require("../my.behavior")],
  data:{
    title:{
      type:String,
      value:"覆盖"
    },
    num:0
  },
  created(){
    console.log("#1 created")
    console.log(this.data.title)
  },
  attached(){
    console.log("#2 attached")
  },
  ready(){
    console.log("#3 ready")
  },
  pageLifetimes:{
    show(){
      console.log("show")
    }
  },
  methods:{
    update: function(){
      this.setData({
        num:++this.data.num
      })
    }
  },
  observers:{
    "num":function(value){
      console.log(value)
    }
  }

})
