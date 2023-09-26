import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import alertify from "alertifyjs"

class CartSummary extends Component {
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
    );
  }

  removeFromCart(product) {
    this.props.actions.removeFromCart(product);
    alertify.error(product.name + " deleted from the cart!")
  }

  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart
        </DropdownToggle>
        <DropdownMenu end className="pe-2">
          {this.props.cart.map((cartItem) => (
            <div className="d-flex align-items-center justify-content-between">
              <DropdownItem key={cartItem.product.id}>
                {cartItem.product.name}
              </DropdownItem>
                <Badge color="success" className="me-1">{cartItem.quantity}</Badge>
                <Badge color="danger" onClick={() => this.removeFromCart(cartItem.product)}>X</Badge>
            </div>
          ))}
          <DropdownItem divider />
          <DropdownItem><Link to="/cart" className="text-decoration-none text-dark">Go to Cart</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
