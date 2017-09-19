export const Public={
  changeHeaderByPath(index){
    /*
    根据url里面path 和 组件的path 做对比  
    如果相等就根据传入的index参数未header的对应的index的a标签添加className
    */
    const componentPath=this.props.match.path;
    const locationPath=this.props.location.pathname;
    console.log(componentPath);
    console.log(locationPath);
    if(componentPath===locationPath){
      console.log(index);
    }
    
  },

}