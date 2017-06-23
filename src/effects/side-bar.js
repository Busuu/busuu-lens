function add_to_sidebar(image, source, dest){

var new_shit = create_list_item(image, source, dest)                    // Append the text to <li>
document.getElementById("bruces_bonus_sidebar").appendChild(new_shit);
}


function create_list_item(image, source, dest){
var template = document.getElementById("item_template")
new_item = clone(template)

document.getElementById('item_template_image').src=image;
document.getElementById('item_template_base').innerHTML=source;
document.getElementById('item_template_trans').innerHTML=dest;

return new_item
}

function clone(obj) {
obj2 = obj.cloneNode(true);
return obj2
}