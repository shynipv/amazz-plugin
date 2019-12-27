wp.blocks.registerBlockType('asdf/border-box',{
  title:'cool border',
  icon:'smiley',
  category:'common',

  attributes:{
  content:{type:'string'},
  color:{type: 'string'}
},
edit:function(props){
  return wp.element.createElement(
    "div", null,
    wp.element.createElement(
      "h2", null, "cool border box"),
    React.createElement(
        "input", {
    type: "text"
  }));
},
save:function(props){
return null
}
})
