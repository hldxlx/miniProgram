// components/cources/item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type:String
    },
    idx:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  options:{
    multipleSlots:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    delItem(){
      console.log(this.data.idx)
      this.triggerEvent("del", { id: this.data.idx},{})
    },
    delMyItem(){
      this.triggerEvent("dels", { id: this.data.idx},{})
    }
  }
})
