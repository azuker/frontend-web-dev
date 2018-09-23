import React from 'react';
import MarketService from '../../../services/marketService';
import {CategoryMenu, ProductList} from '../';

class ProductsPage extends React.Component {
  state = {
    categories: [],
    products: [],
  };

  componentDidMount() {
    MarketService.loadCategories()
      .then(o => this.setState({categories: o}));
  }

  onCategoryChanged = (category) => {
    MarketService.loadProducts(category.name)
      .then(o => this.setState({products: o}));
  }

  render() {
    return (
      <div>
        <CategoryMenu
          categories={this.state.categories}
          onCategoryChanged={this.onCategoryChanged}
        />
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default ProductsPage;
