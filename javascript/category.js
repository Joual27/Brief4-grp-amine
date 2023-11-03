class Category {
   
    constructor(categoryId,categoryTitle,CategoryDesc){
        this.categoryId = categoryId;
        this.categoryTitle = categoryTitle;
        this.CategoryDesc = CategoryDesc;
    }
}

const bringData = (key) => {
    const data = JSON.parse(localStorage.getItem(key));
    return data;
}

const catContainer = document.getElementById("catContainer");

let categorys = bringData("categorys");

categorys.forEach(category =>{
    const cat = document.createElement("div");
    cat.classList.add("category");
    cat.innerHTML = ` <div class="centr-cat">
    <div class="cat-title">
        <h1>${category.categoryTitle}</h1>
    </div>
</div>`;
    catContainer.appendChild(cat);
    
})