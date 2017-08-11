import {list} from '../cs/list';
console.log(list);
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  show: list.show, // list提供的handler
  select: list.select, // list提供的handler

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      // 初始化列表组件1
      list.new(this, {
          dataName: 'list1',
          data: [
              { name: '选择1' },
              { name: '选择2' }
          ]
      });

      // 初始化列表组件2
      list.new(this, {
          dataName: 'list2',
          data: [
              { name: '选择3' },
              { name: '选择4' }
          ]
      });
        
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})