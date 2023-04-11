const filters =  document.querySelectorAll('.filter_name');
for(let filter of filters){
   filter.onclick = () =>{
        filter.parentNode.classList.toggle('active');
   };
};
