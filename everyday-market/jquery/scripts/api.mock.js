'use-strict';

(function(window) {
    const ns = window.api = window.api || {};

    ns.getProducts = function(category, callback) {
        const products = [
            {
                title: `${category} 1`,
                description: 'sadasd asdasda asdadsa sadsadasdsdas sadsadasdas asdsadasda sadasdadasdsa',
                category: category,
                owner: {Id: '1'},
                city: {Name: 'Tel Aviv'},
                media: [{Url: ''}, {Url: ''}],
                primaryImage: 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2-800x954.jpg',
            },
            {
                title: `${category} 2`,
                description: 'sadasd asdasda asdadsa sadsadasdsdas sadsadasdas asdsadasda sadasdadasdsa',
                category: category,
                owner: {Id: '1'},
                city: {Name: 'Tel Aviv'},
                media: [{Url: ''}, {Url: ''}],
                primaryImage: 'http://shfcs.org/en/wp-content/uploads/2015/11/MedRes_Product-presentation-2-800x954.jpg',
            }
        ];
        setTimeout(() => callback(products), 1000);
    }

    ns.getCategories = function(callback) {
        const data = [
            {name: 'Books'},
            {name: 'Appliances'},
            {name: 'Food'},
        ];
        setTimeout(() => callback(data), 1000);
    }
})(window);

/*

public int ProductId { get; set; }
        public OwnerDTO Owner { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string Subcategory { get; set; }
        public CityDTO City { get; set; }
        public MediaDTO[] Media { get; set; }


public class CityDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
    public class OwnerDTO
    {
        public string Id { get; set; }
    }
    namespace GiveNTake.Model.DTO
{
    public class MediaDTO
    {
        public string Url { get; set; }
    }
}
*/