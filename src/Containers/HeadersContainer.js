import Header  from "../Components/Redux/Header";
import {connect} from 'react-redux';


const mapDispatchToProps=dispatch=>({
});


const mapStateToProps = state => ({
    data: state.CartItem 
  });
  export default connect(mapStateToProps,mapDispatchToProps)(Header);