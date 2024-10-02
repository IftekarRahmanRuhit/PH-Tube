
const loadCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((response)=> response.json())
    .then((data) => displayCategories(data.categories    ))
    .catch((error) => console.log(error))
}

const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories')
    categories.forEach( (item) => {
            // creating button 
    const button = document.createElement('button')
    button.classList = 'btn';
    button.innerText = item.category;

    // adding button 
    categoriesContainer.append(button);

})

}

loadCategories();