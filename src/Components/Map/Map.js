import React, { Component } from 'react';
import BMap from 'BMap';
import './Map.css';

export default class Map extends Component {
  componentDidMount() {
    // var BMap = window.BMap;
    var sContent = "地址：北京市";
    var map = new BMap.Map("baiduMap");
    var point = new BMap.Point(116.401, 39.897);
    map.centerAndZoom(point, 14);
    var infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow, point); //开启信息窗口
    map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放


    // var myGeo = new BMap.Geocoder();
    // // 将地址解析结果显示在地图上,并调整地图视野
    // myGeo.getPoint("北京市海淀区上地10街", function (point) {
    //   if (point) {
    //     map.centerAndZoom(point, 16);
    //     map.addOverlay(new BMap.Marker(point));
    //   } else {
    //     alert("您选择地址没有解析到结果!");
    //   }
    // }, "北京市");

    // var BMap = window.BMap
    // var map = new BMap.Map("baiduMap"); // 创建Map实例
    // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11); // 初始化地图,设    置中心点坐标和地图级别
    // map.addControl(new BMap.MapTypeControl()); //添加地图类型控件
    // map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%' ,border:'1px solid #ddd'}}>
        <div id='baiduMap' style={{ width: '100%', height: '100%' }}>
            
        </div>
      </div>
    )
  }
}